

resource "aws_s3_bucket" "portfolio_logging_bucket" {

  depends_on = [ aws_s3_bucket.www_lamodata_com, aws_cloudfront_distribution.lamodata_cloudfront_dist ]
  bucket = "${var.logging_bucket}"

  tags = {
    Name = "logs"
  }
}


resource "aws_s3_bucket_versioning" "log_bucket_versioning" {
  bucket = aws_s3_bucket.portfolio_logging_bucket.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_policy" "log_bucket_policy" {
  bucket = aws_s3_bucket.portfolio_logging_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
        {
            Sid = "AllowDataFromCloudfront"
            Effect = "Allow"
            Principal = {
                Service = "cloudfront.amazonaws.com"
            }
            Action = "s3:PutObject"
            Resource = "${aws_s3_bucket.portfolio_logging_bucket.arn}/*"
            Condition = {
                ArnEquals = {
                    "AWS:SourceArn" = "${aws_cloudfront_distribution.lamodata_cloudfront_dist.arn}"
                }
            }
        },
        {
            Sid       = "DenyOtherThatIsNotCloudfront"
            Effect    = "Deny"
            Principal = "*"
            Action    = "s3:*"
            Resource  = "${aws_s3_bucket.portfolio_logging_bucket.arn}/*"
            Condition = {
                StringNotEquals = {
                    "AWS:SourceArn" = "${aws_cloudfront_distribution.lamodata_cloudfront_dist.arn}"
                }
            }
        }
    ]

  })
}

resource "aws_s3_bucket_lifecycle_configuration" "lifecycle_config" {
    bucket = aws_s3_bucket.portfolio_logging_bucket.id

    rule {
      id = "logs-older-than-30-days"
      status = "Enabled"

      filter {
        prefix = "logs/logs-older-than-30-days/"
      }
      transition {
        days = 30
        storage_class = "ONEZONE_IA"
      }
    }

    rule {
      id = "logs-older-than-365-days"
      status = "Enabled"

      filter {
        prefix = "logs/logs-older-than-365-days/"
      }
      transition {
        days = 365
        storage_class = "DEEP_ARCHIVE"
      }
    }
}
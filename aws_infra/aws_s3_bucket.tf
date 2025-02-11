

locals {
  s3_origin_id = "origin_s3"
}


resource "aws_s3_bucket" "www_lamodata_com" {
  bucket = "www.lamodata.com"

}


resource "aws_s3_bucket_website_configuration" "www_lamodata_com_web" {
  bucket = aws_s3_bucket.www_lamodata_com.id

  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }

}

resource "aws_s3_bucket_ownership_controls" "www_lamodata_com_owner" {
  bucket = aws_s3_bucket.www_lamodata_com.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}


resource "aws_s3_bucket_public_access_block" "www_lamodata_com_pab" {
  bucket = aws_s3_bucket.www_lamodata_com.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "www_lamodata_com_acl" {
  depends_on = [aws_s3_bucket.www_lamodata_com,
    aws_s3_bucket_public_access_block.www_lamodata_com_pab,
  ]
  bucket = aws_s3_bucket.www_lamodata_com.id
  acl    = "private"
}


resource "aws_s3_bucket_server_side_encryption_configuration" "www_lamodata_com_sse" {
  bucket = aws_s3_bucket.www_lamodata_com.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_versioning" "www_lamodata_com_versioning" {
  bucket = aws_s3_bucket.www_lamodata_com.id

  versioning_configuration {
    status = "Enabled"
  }
}
data "aws_ssm_parameter" "aws_account_id" {
  name = "/serverless-portfolio/aws_account_id"
}

resource "aws_s3_bucket_policy" "allow_cloudfront_policy" {
  bucket = aws_s3_bucket.www_lamodata_com.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "PublicReadGetObject"
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.www_lamodata_com.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = "${aws_cloudfront_distribution.lamodata_cloudfront_dist.arn}"
          }
        }
      },
      {
        Sid    = "AllowFullAccessToTheBucket"
        Effect = "Allow"
        Principal = {
          AWS = "${data.aws_ssm_parameter.aws_account_id.value}"
        }
        Action = "s3:*"
        Resource = [
          "${aws_s3_bucket.www_lamodata_com.arn}/*",
          "${aws_s3_bucket.www_lamodata_com.arn}"
        ]
      },
      {
        Sid       = "DenyAllExceptCloudFront"
        Effect    = "Deny"
        Principal = "*"
        Action    = "s3:*"
        Resource = [
          "${aws_s3_bucket.www_lamodata_com.arn}/*",
          "${aws_s3_bucket.www_lamodata_com.arn}"
        ]
        Condition = {
          StringNotEquals = {
            "AWS:SourceArn"    = "${aws_cloudfront_distribution.lamodata_cloudfront_dist.arn}",
            "aws:PrincipalArn" = "${data.aws_ssm_parameter.aws_account_id.value}"
          }
        }
      }
    ]
  })
}
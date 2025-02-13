
#this is the redirected bucket
resource "aws_s3_bucket" "redirect_bucket" {
  bucket = var.redirect_bucket_name
}
#this is the bucket with origin 
resource "aws_s3_bucket" "origin_bucket" {
  bucket = var.origin_bucket_name
}



#website configuration
resource "aws_s3_bucket_public_access_block" "redirect_bucket_pab" {
  bucket = aws_s3_bucket.redirect_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false

}

resource "aws_s3_bucket_public_access_block" "origin_bucket_pab" {
  bucket = aws_s3_bucket.origin_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true

}



data "aws_ssm_parameter" "admin" {
  name = "/serverless-portfolio/aws_account_id"
}



resource "aws_s3_bucket_policy" "redirect_bucket_policy" {
  bucket = aws_s3_bucket.redirect_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontServicePrincipalReadOnly"
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:*"
        Resource = "${aws_s3_bucket.redirect_bucket.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = "${aws_cloudfront_distribution.lamodata_cloudfront_dist.arn}"
          }
        }
      },
      {
        Sid    = "AllowAdminAccess"
        Effect = "Allow"
        Principal = {
          AWS = "${data.aws_ssm_parameter.admin.value}"
        }
        Action = "s3:*"
        Resource = [
          "${aws_s3_bucket.redirect_bucket.arn}/*",
          "${aws_s3_bucket.redirect_bucket.arn}"
        ]
      },
      {
        Sid       = "DenyAllExceptAdminAndCloudFront"
        Effect    = "Deny"
        Principal = "*"
        Action    = "s3:*"
        Resource = [
          "${aws_s3_bucket.redirect_bucket.arn}/*",
          "${aws_s3_bucket.redirect_bucket.arn}"
        ]
        Condition = {
          ArnNotEquals = {
            "aws:PrincipalArn" = "${data.aws_ssm_parameter.admin.value}"
            "aws:SourceArn"    = "${aws_cloudfront_distribution.lamodata_cloudfront_dist.arn}"
          }
        }
      }
    ]
  })
}


resource "aws_s3_bucket_policy" "origin_bucket_policy" {
  bucket = aws_s3_bucket.origin_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontServicePrincipalReadOnly"
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:*"
        Resource = "${aws_s3_bucket.origin_bucket.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = "${aws_cloudfront_distribution.lamodata_cloudfront_dist.arn}"
          }
        }
      },
      {
        Sid    = "AllowAdminAccess"
        Effect = "Allow"
        Principal = {
          AWS = "${data.aws_ssm_parameter.admin.value}"
        }
        Action = "s3:*"
        Resource = [
          "${aws_s3_bucket.origin_bucket.arn}/*",
          "${aws_s3_bucket.origin_bucket.arn}"
        ]
      },
      {
        Sid       = "DenyAllExceptAdminAndCloudFront"
        Effect    = "Deny"
        Principal = "*"
        Action    = "s3:*"
        Resource = [
          "${aws_s3_bucket.origin_bucket.arn}/*",
          "${aws_s3_bucket.origin_bucket.arn}"
        ]
        Condition = {
          ArnNotEquals = {
            "aws:PrincipalArn" = "${data.aws_ssm_parameter.admin.value}"
            "aws:SourceArn"    = "${aws_cloudfront_distribution.lamodata_cloudfront_dist.arn}"
          }
        }
      }
    ]
  })
}


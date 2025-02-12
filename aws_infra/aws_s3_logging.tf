# resource "aws_s3_bucket" "portfolio_logging_bucket" {
#   bucket = var.logging_bucket

#   tags = {
#     Name = "logs"
#   }
# }

# # Enable ACL for the logging bucket
# resource "aws_s3_bucket_acl" "log_bucket_acl" {
#   bucket = aws_s3_bucket.portfolio_logging_bucket.id
#   acl    = "log-delivery-write"
# }

# # Ensure S3 Block Public Access does not block ACLs
# resource "aws_s3_bucket_public_access_block" "log_bucket_public_access" {
#   bucket = aws_s3_bucket.portfolio_logging_bucket.id

#   block_public_acls       = false  # Allow ACLs
#   block_public_policy     = true   # Block public policies
#   ignore_public_acls      = true   # Ignore public ACLs
#   restrict_public_buckets = true   # Restrict public buckets
# }

# resource "aws_s3_bucket_versioning" "log_bucket_versioning" {
#   bucket = aws_s3_bucket.portfolio_logging_bucket.id

#   versioning_configuration {
#     status = "Enabled"
#   }
# }

# resource "aws_s3_bucket_policy" "log_bucket_policy" {
#   bucket = aws_s3_bucket.portfolio_logging_bucket.id

#   policy = jsonencode({
#     Version = "2012-10-17"
#     Statement = [
#       {
#         Sid       = "AllowDataFromCloudfront"
#         Effect    = "Allow"
#         Principal = {
#           Service = "cloudfront.amazonaws.com"
#         }
#         Action   = "s3:PutObject"
#         Resource = "${aws_s3_bucket.portfolio_logging_bucket.arn}/*"
#         Condition = {
#           StringEquals = {
#             "AWS:SourceArn" = "${aws_cloudfront_distribution.lamodata_cloudfront_dist.arn}"
#           }
#         }
#       },
#       {
#         Sid       = "DenyOtherThatIsNotCloudfront"
#         Effect    = "Deny"
#         Principal = "*"
#         Action    = "s3:*"
#         Resource  = "${aws_s3_bucket.portfolio_logging_bucket.arn}/*"
#         Condition = {
#           StringNotEquals = {
#             "AWS:SourceArn" = "${aws_cloudfront_distribution.lamodata_cloudfront_dist.arn}"
#           }
#         }
#       }
#     ]
#   })
# }

# resource "aws_s3_bucket_lifecycle_configuration" "lifecycle_config" {
#   bucket = aws_s3_bucket.portfolio_logging_bucket.id

#   rule {
#     id     = "logs-older-than-30-days"
#     status = "Enabled"

#     filter {
#       prefix = "logs/logs-older-than-30-days/"
#     }
#     transition {
#       days          = 30
#       storage_class = "ONEZONE_IA"
#     }
#   }

#   rule {
#     id     = "logs-older-than-365-days"
#     status = "Enabled"

#     filter {
#       prefix = "logs/logs-older-than-365-days/"
#     }
#     transition {
#       days          = 365
#       storage_class = "DEEP_ARCHIVE"
#     }
#   }
# }
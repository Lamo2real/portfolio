
resource "aws_s3_bucket" "www_lamodata_com" {
    bucket = "www.lamodata.com"
}

resource "aws_s3_bucket_public_access_block" "www_lamodata_com_pab" {
  bucket = aws_s3_bucket.www_lamodata_com.id

  block_public_acls = true
  block_public_policy = false
  ignore_public_acls = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_policy" "www_lamodata_com_policy" {
  bucket = aws_s3_bucket.www_lamodata_com.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = { 
          Service = "cloudfront.amazonaws.com" 
        }
        Action    = "s3:GetObject"
        Resource  = "arn:aws:s3:::www.lamodata.com/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = theCloudfrontServiceWillBeHere
          }
        }
      },
      {
        Sid       = "DenyAllExceptCloudFront"
        Effect    = "Deny"
        Principal = "*"
        Action    = "s3:*"
        Resource  = "arn:aws:s3:::www.lamodata.com/*"
        Condition = {
          StringNotEquals = {
            "AWS:SourceArn" = theCloudfrontServiceWillBeHere
          }
        }
      }
    ]
    
  })

}
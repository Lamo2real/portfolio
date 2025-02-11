
#these are the two s3 buckets

#this is the redirected bucket
resource "aws_s3_bucket" "redirect_bucket" {
  bucket = "${var.redirect_bucket_name}"
}
#this is the bucket with origin 
resource "aws_s3_bucket" "origin_bucket" {
  bucket = "${var.origin_bucket_name}"
}




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






resource "aws_s3_bucket_policy" "redirect_bucket_policy" {
  bucket = aws_s3_bucket.redirect_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
        {
            Sid = "GetPermissionToAll"
            Effect = "Allow"
            Principal = "*"
            Action = "s3:GetObject"
            Resource = "${aws_s3_bucket.redirect_bucket.arn}/*"

        }
        # ,
        # {
        #     Sid = "AllowAdminAccess"
        #     Effect = "Allow"
        #     Principal = "*"
        #     Action = "s3:*"
        #     Resource = [
        #         "${aws_s3_bucket.redirect_bucket.arn}/*",
        #         "${aws_s3_bucket.redirect_bucket.arn}"
        #     ]
        # }
    ]
  })
}









resource "aws_s3_bucket_website_configuration" "redirect_bucket_static_web_config" {
  bucket = aws_s3_bucket.redirect_bucket.id

  index_document {
    suffix = "index.html"
  }
}
resource "aws_s3_bucket_website_configuration" "origin_bucket_static_web_config" {
  bucket = aws_s3_bucket.origin_bucket.id

  redirect_all_requests_to {
    host_name = var.redirect_bucket_name
    protocol = "http"
  }
}
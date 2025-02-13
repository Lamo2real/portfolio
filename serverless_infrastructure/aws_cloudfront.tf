
locals {
  s3_origin_id = "myS3Origin"
}

resource "aws_cloudfront_origin_access_control" "oac" {
  name                              = "my_oac"
  description                       = "restrict s3 access to cloudfront"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "lamodata_cloudfront_dist" {
  origin {
    domain_name              = aws_s3_bucket.redirect_bucket.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
    origin_id                = local.s3_origin_id
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = [var.redirect_bucket_name, var.short_domain_name]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }



  price_class = "PriceClass_200"

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = false
    ssl_support_method             = "sni-only"
    acm_certificate_arn            = aws_acm_certificate.web_certificate.arn
  }
}
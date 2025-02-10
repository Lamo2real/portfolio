

resource "aws_cloudfront_origin_access_control" "www_lamodata_com_cf_oac" {
  name = "lamodata_cloudfront_s3_oac"
  origin_access_control_origin_type = "s3"
  signing_behavior = "never" #try "always" if this doesnt work
  signing_protocol = "sigv4"
}




resource "aws_cloudfront_distribution" "lamodata_cloudfront_dist" {
    depends_on = [ aws_s3_bucket.www_lamodata_com ]

  origin {
    domain_name              = aws_s3_bucket.www_lamodata_com.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.www_lamodata_com_cf_oac.id
    origin_id                = local.s3_origin_id

  }

  enabled = true
  is_ipv6_enabled = true
  default_root_object = "index.html"

#   logging_config {
#     include_cookies = false
#     bucket          = "${var.logging_bucket}.s3.amazonaws.com"
#     prefix          = "logs/recent-logs/"
#   }
  

  aliases = ["${var.my_subdomain}.${var.domain_name}", "${var.domain_name}"]

  default_cache_behavior {
    allowed_methods  = [ "GET", "HEAD" ]
    cached_methods   = [ "GET", "HEAD" ]
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

  # Cache behavior with precedence 0
  ordered_cache_behavior {
    path_pattern     = "/dist/*"
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false
      headers      = ["Origin"]

      cookies {
        forward = "none"
      }
    }

    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  price_class = "PriceClass_200"

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }


  viewer_certificate {
    minimum_protocol_version = "TLSv1.2_2021"
    ssl_support_method = "sni-only"
    acm_certificate_arn = aws_acm_certificate.tls_certificate.arn
  }
}

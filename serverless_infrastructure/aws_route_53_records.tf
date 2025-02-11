
data "aws_route53_zone" "my_zone" {
  name = var.domain_name
}

resource "aws_route53_record" "first_record" {
  zone_id = data.aws_route53_zone.my_zone.zone_id
  name = var.sub_domain_name_1
  type = "A"

  alias {
    name = aws_s3_bucket_website_configuration.redirect_bucket_static_web_config.website_domain
    zone_id = aws_s3_bucket.redirect_bucket.hosted_zone_id
    evaluate_target_health = false
  }
}
resource "aws_route53_record" "second_record" {
  zone_id = data.aws_route53_zone.my_zone.zone_id
  name = ""
  type = "A"

  alias {
    name = aws_s3_bucket_website_configuration.redirect_bucket_static_web_config.website_domain
    zone_id = aws_s3_bucket.redirect_bucket.hosted_zone_id
    evaluate_target_health = false
  }
}
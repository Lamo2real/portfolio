
data "aws_route53_zone" "my_zone" {
  name         = var.domain_name
  private_zone = false
}




resource "aws_route53_record" "first_record" {
  zone_id = data.aws_route53_zone.my_zone.zone_id
  name    = var.sub_domain_name_1
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.lamodata_cloudfront_dist.domain_name
    zone_id                = aws_cloudfront_distribution.lamodata_cloudfront_dist.hosted_zone_id
    evaluate_target_health = false
  }
}
resource "aws_route53_record" "second_record" {
  zone_id = data.aws_route53_zone.my_zone.zone_id
  name    = ""
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.lamodata_cloudfront_dist.domain_name
    zone_id                = aws_cloudfront_distribution.lamodata_cloudfront_dist.hosted_zone_id
    evaluate_target_health = false
  }
}
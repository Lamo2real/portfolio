

data "aws_route53_zone" "hosted_zone" {
  name = var.domain_name
  private_zone = false
}

resource "aws_route53_record" "site_domain" {
  zone_id = data.aws_route53_zone.hosted_zone.zone_id
  name = "www"
  type = "A"

  
  alias {
    name = aws_cloudfront_distribution.lamodata_cloudfront_dist.domain_name
    zone_id = "Z2FDTNDATAQYW2"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "root_domain" {
  zone_id = data.aws_route53_zone.hosted_zone.zone_id
  name = ""
  type = "A"

  alias {
    name = aws_cloudfront_distribution.lamodata_cloudfront_dist.domain_name
    zone_id = "Z2FDTNDATAQYW2"
    evaluate_target_health = false
  }
}

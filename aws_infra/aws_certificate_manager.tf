


resource "aws_acm_certificate" "tls_certificate" {
  provider          = aws.us_east_1
  domain_name       = var.domain_name
  validation_method = "DNS"

  subject_alternative_names = ["*.${var.domain_name}", "${var.domain_name}"]

  key_algorithm = "RSA_2048"

  lifecycle {
    create_before_destroy = true
  }

}

# Dynamically create Route53 validation records for all domains (main + SANs)
resource "aws_route53_record" "validation_records" {
  for_each = {
    for option in aws_acm_certificate.tls_certificate.domain_validation_options : option.domain_name => {
      name   = option.resource_record_name
      record = option.resource_record_value
      type   = option.resource_record_type
    }
  }

  zone_id         = data.aws_route53_zone.hosted_zone.zone_id
  name            = each.value.name
  type            = each.value.type
  records         = [each.value.record]
  ttl             = 60
  allow_overwrite = true
}

resource "aws_acm_certificate_validation" "validation" {
  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.tls_certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.validation_records : record.fqdn]
}

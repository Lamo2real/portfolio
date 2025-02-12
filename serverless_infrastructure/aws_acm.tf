resource "aws_acm_certificate" "web_certificate" {
  provider = aws.acm_region
  domain_name       = var.origin_bucket_name
  validation_method = "DNS"
  
  subject_alternative_names = [ var.origin_bucket_name, var.redirect_bucket_name ]
  key_algorithm = "RSA_2048"

  lifecycle {
    create_before_destroy = true
  }
}





#set-up for the ACM Validation process
resource "aws_route53_record" "acm_validation_process" {
  for_each = {
    for option in aws_acm_certificate.web_certificate.domain_validation_options : option.domain_name => {
      name   = option.resource_record_name
      record = option.resource_record_value
      type   = option.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.my_zone.zone_id
}

resource "aws_acm_certificate_validation" "validation_loop" {
  provider = aws.acm_region
  certificate_arn         = aws_acm_certificate.web_certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.acm_validation_process : record.fqdn]
}
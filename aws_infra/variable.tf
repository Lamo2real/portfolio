

variable "domain_name" {
  default     = "lamodata.com"
  description = "domain name leveraging route 53"
  type        = string
}

variable "my_subdomain" {
  default     = "www"
  description = "sub-domain name for route 53"
  type        = string
}

# variable "logging_bucket" {
#   default = "portfolio-logging-bucket"
#   description = "my bucket for holding data on logging to my portfolio"
#   type = string
# }


#this is not leveraged due to SSM Parameter Store beiing more secure and scalable
# variable "aws_account_id" {
#   type = string
#   description = "The AWS Account ID where the IAM user 'itachi' resides."
# }
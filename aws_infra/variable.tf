

variable "domain_name" {
  default = "lamodata.com"
  description = "domain name leveraging route 53"
  type = string
}

variable "my_subdomain" {
  default = "www"
  description = "sub-domain name for route 53"
  type = string
}

# variable "logging_bucket" {
#   default = "portfolio-logging-bucket"
#   description = "my bucket for holding data on logging to my portfolio"
#   type = string
# }


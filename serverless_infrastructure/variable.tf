variable "redirect_bucket_name" {
  default = "www.lamodata.com"
  description = "this is the name of the bucket"
  type = string
}
variable "origin_bucket_name" {
  default = "lamodata.com"
  description = "this is the name of the bucket"
  type = string
}
variable "domain_name" {
  default = "lamodata.com"
  description = "this is also the domain name of my route 53 domain"
  type = string
}
variable "sub_domain_name_1" {
  default = "www"
  description = "this is the sub domain name of my route 53 domain"
  type = string
}
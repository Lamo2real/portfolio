

terraform {
  required_version = ">= 1.9.5"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 5.85.0"
    }
  }
}
provider "aws" {
  region = "eu-north-1"
}
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}
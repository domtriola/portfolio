variable "aws_region" {
  type = "string"
  default = "us-east-1"
}

# S3 does not allow underscores
variable "project" {
  type = "string"
  default = "dominicktriola"
}

variable "user" {
  type = "string"
}

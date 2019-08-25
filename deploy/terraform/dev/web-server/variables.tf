variable "aws_region" {
  type = "string"
  default = "us-east-1"
}

variable "environment" {
  type = "string"
  default = "dev"
}

variable "user" {
  type = "string"
}

variable "project" {
  type = "string"
  default = "dominicktriola_portfolio"
}

variable "web_image_id" {
  type = "string"
  default = "ami-07d0cf3af28718ef8" # Ubuntu Server 18.04 LTS (HVM), SSD Volume Type
}

variable "web_instance_type" {
  type = "string"
  default = "t2.micro"
}

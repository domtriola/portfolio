variable "aws_region" {
  type = "string"
  default = "us-east-1"
}

variable "user" {
  type = "string"
}

variable "ec2_key" {
  type = "string"
}

variable "project" {
  type = "string"
  default = "dominicktriola_portfolio"
}

variable "image_id" {
  type = "string"
  default = "ami-07d0cf3af28718ef8" # Ubuntu Server 18.04 LTS (HVM), SSD Volume Type
}

variable "instance_type" {
  type = "string"
  default = "t2.micro"
}

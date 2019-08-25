provider "aws" {
  region = "${var.aws_region}"
}

resource "aws_instance" "web" {
  ami = "${var.web_image_id}"
  instance_type = "${var.web_instance_type}"

  tags = {
    Name = "${var.user}-${var.project}-web"
  }
}

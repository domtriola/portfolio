# See https://buildkite.com/docs/agent/v3/ubuntu for service setup

provider "aws" {
  region = "${var.aws_region}"
}

resource "aws_instance" "buildkite_agent" {
  ami                    = "${var.image_id}"
  instance_type          = "${var.instance_type}"
  vpc_security_group_ids = ["${aws_security_group.buildkite_agent.id}"]
  key_name               = "${var.ec2_key}"

  tags = {
    Name = "${var.user}-${var.project}-buildkite_agent"
  }
}

resource "aws_security_group" "buildkite_agent" {
  name = "buildkite_agent"
}

resource "aws_security_group_rule" "buildkite_agent_user_ssh" {
  security_group_id = "${aws_security_group.buildkite_agent.id}"

  type      = "ingress"
  from_port = 22
  to_port   = 22
  protocol  = "tcp"

  cidr_blocks = [
    "${data.external.user_public_ip.result.ip}/32"
  ]
}

resource "aws_security_group_rule" "buildkite_agent_egress" {
  security_group_id = "${aws_security_group.buildkite_agent.id}"

  type = "egress"
  from_port   = 0
  to_port     = 0
  protocol    = "-1"
  cidr_blocks = ["0.0.0.0/0"]
}

data "external" "user_public_ip" {
  # query as data.external.user_public_ip.result.ip
  program = ["bash", "${path.module}/myip.sh"]
}

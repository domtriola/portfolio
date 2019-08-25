terraform {
  backend "s3" {
    bucket  = "tfstate.dominicktriola.domt"
    key     = "dev/web-server/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}

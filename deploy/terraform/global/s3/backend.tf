terraform {
  backend "s3" {
    bucket  = "tfstate.dominicktriola.domt"
    key     = "global/s3/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}

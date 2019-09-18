terraform {
  backend "s3" {
    bucket  = "tfstate.dominicktriola.domt"
    key     = "global/buildkite/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}

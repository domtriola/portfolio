# Packer

Packer builds AMIs for releases. Do not include the 'v' in the release version.

Ex:
```bash
packer build -var 'version=0.0.1' deploy/packer/web.json
```

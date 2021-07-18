# nodejs-express-ec2

AWS NodeJS Express Server with CodeDeploy

EC2 Script

```
#! /bin/bash
sudo yum -y update
sudo yum -y install ruby
sudo yum -y install wget
cd /home/ec2-user
wget https://aws-code-deploy-us-east-1.s3.amazonaws.com/latest/install
sudo chmod +x ./install
sudo ./install auto

```
Check if CodeDeploy agent is running

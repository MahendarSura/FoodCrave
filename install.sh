#!/bin/bash

set -e

echo "Updating package lists..."
sudo apt update -y

echo "Adding Adoptium OpenJDK 17 repository and key..."
wget -qO - https://packages.adoptium.net/artifactory/api/gpg/key/public | sudo tee /etc/apt/keyrings/adoptium.asc > /dev/null
echo "deb [signed-by=/etc/apt/keyrings/adoptium.asc] https://packages.adoptium.net/artifactory/deb $(awk -F= '/^VERSION_CODENAME/{print $2}' /etc/os-release) main" | sudo tee /etc/apt/sources.list.d/adoptium.list

echo "Updating package lists after adding Adoptium repo..."
sudo apt update -y

echo "Installing Temurin OpenJDK 17..."
sudo apt install temurin-17-jdk -y

echo "Java version installed:"
java --version

echo "Adding Jenkins repository and key..."
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null

echo "Updating package lists after adding Jenkins repo..."
sudo apt-get update -y

echo "Installing Jenkins..."
sudo apt-get install jenkins -y

echo "Starting Jenkins service..."
sudo systemctl start jenkins
sudo systemctl enable jenkins

echo "Checking Jenkins service status..."
sudo systemctl status jenkins --no-pager

echo "Installing Docker..."
sudo apt-get update -y
sudo apt-get install docker.io -y

echo "Adding current user to docker group..."
sudo usermod -aG docker $USER  
newgrp docker

echo "Adjusting permissions for Docker socket..."
sudo chmod 777 /var/run/docker.sock

echo "Running SonarQube container..."
docker run -d --name sonar -p 9000:9000 sonarqube:lts-community

echo "Installing prerequisites for Trivy..."
sudo apt-get install wget apt-transport-https gnupg lsb-release -y

echo "Adding Trivy repository and key..."
wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | gpg --dearmor | sudo tee /usr/share/keyrings/trivy.gpg > /dev/null
echo "deb [signed-by=/usr/share/keyrings/trivy.gpg] https://aquasecurity.github.io/trivy-repo/deb $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/trivy.list

echo "Updating package lists after adding Trivy repo..."
sudo apt-get update -y

echo "Installing Trivy vulnerability scanner..."
sudo apt-get install trivy -y

echo "Installation completed!"


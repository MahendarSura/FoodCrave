# 🍽️ FoodCrave – Full-Stack Food Delivery App

FoodCrave is a comprehensive food delivery platform that connects customers with their favorite local restaurants.  
It offers real-time order tracking, secure payment options, and personalized meal recommendations to ensure a smooth and enjoyable food ordering experience.  
With **FoodCrave**, delicious meals are always just a few clicks away.

---

## 🚀 DevOps Real-time Project: FoodCrave App Deployment

This project demonstrates how to **build, scan, containerize, and deploy the FoodCrave React app** using modern **DevOps practices and tools**.

---

## 🛠️ Tools & Technologies Used

### ⚙️ CI/CD & Infra
- **GitHub** – Source Code Repository  
- **Jenkins** – Automation Server  
- **Terraform** – Infrastructure as Code (IaC)  

### 🔍 Quality & Security
- **SonarQube** – Static Code Analysis  
- **OWASP Dependency-Check** – Vulnerability Scanning  
- **Trivy** – Docker Image Security  

### 🐳 Containerization & Registry
- **Docker** – Container Platform  
- **DockerHub** – Public Registry (`mahi115`)  

---

## 📂 Project Links

- 🔗 **GitHub Repo:** [MahendarSura/FoodCrave](https://github.com/MahendarSura/FoodCrave)  
- 🐳 **DockerHub:** [mahi115 on DockerHub](https://hub.docker.com/u/mahi115)

---

## 📦 Jenkins Pipeline Overview

```text
GitHub → Jenkins → SonarQube → OWASP + Trivy Scan → Docker Build → DockerHub Push → Deploy

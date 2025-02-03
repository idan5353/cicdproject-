# CI/CD Project with AWS (ECS, CodePipeline, CodeBuild, Docker) 🚀

## Project Overview 🌟
This project implements a fully automated **CI/CD pipeline** using AWS services such as **ECS (Elastic Container Service)**, **CodePipeline**, **CodeBuild**, **ECR (Elastic Container Registry)**, and **Fargate** to build, push, and deploy a Dockerized Node.js application.


![צילום מסך 2025-02-03 042032]( https://github.com/user-attachments/assets/37c2d862-cd85-481e-93e1-9f81b51f9ae9)
<img src="https://github.com/user-attachments/assets/37c2d862-cd85-481e-93e1-9f81b51f9ae9" width="500"/>


### Key Services Used:
- **AWS ECS** (Fargate) 🖧 - for running containers in the cloud.
- **AWS ECR** 🛢️ - to store Docker images.
- **AWS CodeBuild** 🔨 - for building Docker images and pushing them to ECR.
- **AWS CodePipeline** 🔄 - to automate the entire CI/CD workflow from code push to deployment.

---

## Project Workflow 🛠️
1. **Build Docker Image** 🐳: 
   The project uses Docker to containerize a Node.js application. The Docker image is built using a `Dockerfile` and then pushed to **Amazon ECR**.

2. **Push to Amazon ECR** ⬆️: 
   Once the Docker image is built, it is pushed to a private **Amazon ECR** registry to keep it safe and ready for deployment.

3. **Deploy to ECS Fargate** 🚢: 
   The image from **ECR** is deployed to **ECS Fargate**, a fully managed service that runs the container without managing the underlying EC2 instances.

4. **CI/CD Pipeline** ⚙️:
   The entire workflow is automated using **AWS CodePipeline** and **AWS CodeBuild**. The pipeline automatically triggers the build and deployment process whenever code changes are pushed to the repository.

---

## Steps to Set Up the Project 📋

### 1. **Dockerfile** 📝
The `Dockerfile` contains instructions to build a Docker image for the Node.js application. It installs dependencies, sets up the working directory, and exposes port 3000 for the application.

### Setting Up ECS and CodePipeline ⚡
To automate the build and deployment process, follow these steps:

Create an ECS Fargate Task Definition 📦: Define a task in ECS with the Docker image pulled from ECR.
Create a CodePipeline 🔗: The pipeline will automatically trigger when changes are pushed to the source repository (GitHub).
Create a CodeBuild Project 🔨: This project builds the Docker image and pushes it to ECR.

### Conclusion 🎉
This project demonstrates a full CI/CD pipeline with AWS services and Docker. The process is fully automated to build and deploy a Node.js application in the cloud with ECS and Fargate. The entire pipeline runs automatically every time new changes are pushed to the GitHub repository.

For any questions or issues, feel free to open an issue or submit a pull request! 😄


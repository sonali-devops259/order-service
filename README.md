# Orders Service

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()

A simple microservice for managing orders in a sample e-commerce platform.  
This service provides APIs to create, fetch, and manage orders. It is designed to demonstrate DevOps best practices, including containerization, CI/CD, and monitoring.

---

## Features
- Create and manage customer orders
- REST API endpoints
- Lightweight and scalable design
- Ready for Docker and Kubernetes deployments

---

## Prerequisites
- Node.js (>=16.x)
- npm or yarn
- Docker (optional, for containerization)

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/sonali-devops259/order-service.git
cd order-service
npm install
Running the Service
Start the service locally:

bash
Copy code
npm start
The service will run at:
👉 http://localhost:3000

Running in Docker
Build and run with Docker:

bash
Copy code
docker build -t order-service .
docker run -p 3000:3000 order-service
Testing
Run unit tests:

bash
Copy code
npm test
Contributing
Contributions are welcome! Please open an issue or submit a pull request.


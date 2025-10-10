# Order Service

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Render](https://img.shields.io/badge/render-live-blue)](https://order-service-500m.onrender.com/orders)

A simple Node.js + Express microservice for managing orders.  
This project is part of a DevOps demo showcasing CI/CD, deployment, and monitoring.

---

## Features
- REST API built with Express
- Sample endpoints for orders
- Easy to deploy on free hosting (Render, Railway, etc.)
- Health check for testing deployments

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/sonali-devops259/order-service.git
cd order-service


2. Install dependencies
npm install

3. Run locally
npm start


The service will be available at:
👉 http://localhost:3000

API Endpoints
Method	Endpoint	Description
GET	/orders	Fetch all orders
GET	/orders/:id	Fetch a single order
GET	/api/health	Health check endpoint
Deployment

This service is deployed on Render for free hosting.

Orders endpoint: https://order-service-500m.onrender.com/orders

Health check: https://order-service-500m.onrender.com/api/health

🐳 Docker

Build the image:

docker build -t order-service .


Run the container (host port → container port):

# if 3000 is busy, use 3001:3000 instead
docker run --name order-svc -p 3000:3000 order-service


Test:

curl http://localhost:3000/orders


Stop & remove:

docker stop order-svc && docker rm order-svc

Push to Docker Hub (optional)
# login first: docker login
docker tag order-service DOCKERHUB_USER/order-service:v1
docker push DOCKERHUB_USER/order-service:v1
---

## Kubernetes (Minikube)

### Prerequisites
- Minikube running with the Docker driver
- Ingress addon enabled: minikube addons enable ingress

### Create namespace and apply manifests
`ash
kubectl create namespace orders
kubectl apply -f k8s/order-service.yaml
kubectl apply -f k8s/order-ingress.yaml
Access the service

Option A  Port-forward the ingress controller (quickest):

kubectl port-forward -n ingress-nginx svc/ingress-nginx-controller 8080:80
curl -H "Host: order.local" http://localhost:8080/api/health
curl -H "Host: order.local" http://localhost:8080/orders


Option B  Friendly host with hosts file:

Get Minikube IP: minikube ip (e.g., 192.168.49.2)

Edit C:\Windows\System32\drivers\etc\hosts as Administrator and add:
192.168.49.2 order.local

If using port-forward above, browse http://order.local:8080/...

Notes

Deployment exposes container port 3000; Service uses 3000; Ingress serves on 80.

Scale:

kubectl scale deploy/order-service -n orders --replicas=2


Using a Docker Hub image? Edit k8s/order-service.yaml:

image: <DOCKERHUB_USER>/order-service:v1
imagePullPolicy: IfNotPresent



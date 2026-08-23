# Gateway & Auth Service

This is the API Gateway for the Blood Donation System, built with Spring Cloud Gateway and Spring Boot. It acts as the single entry point for the Client Application.

## Features
- **API Routing**: Routes requests to Donor, Inventory, Request, and Notification services.
- **Authentication**: JWT & OAuth 2.0 based authentication.
- **Rate Limiting**: Protects downstream services from abuse.

## Running Locally

To run the gateway independently:
```bash
docker-compose up -d
```
Then start the application via your IDE or Maven.

## Ports
- Application runs on **8080**

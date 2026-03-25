# Microservice Project (DevOps Practice)

## Overview
This project contains 5 microservices:

- frontend-admin → port 3000
- frontend-customer → port 3005
- user-service → port 3010
- product-service → port 3020
- order-service → port 3030

## Technologies Used
- Node.js
- React
- Docker
- Docker Compose

## Setup Instructions

1. Clone the repository
2. Navigate to project directory
3. Run:

   docker compose up --build

4. Access:
   - Admin UI → http://localhost:3000
   - Customer UI → http://localhost:3005

## Architecture
- Microservices communicate via Docker network
- Internal communication uses service names (not localhost)

## Author
Muhammad Haris Khan

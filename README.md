# Full-Stack Project

## Overview

This is a full-stack web application that consumes an external API, reformats the data in a Python backend, and serves it to a React frontend for display. The solution demonstrates modern web development practices, containerization, and clean code architecture.

## Objective

Build an application that fetches data from an API, processes it in a backend, and displays it in a modern frontend.

## Tech Stack

- **Backend:** Python, FastAPI, Pydantic
- **Frontend:** React, TypeScript, Vite
- **Containerization:** Docker, Docker Compose

## Features

- API consumption and data transformation in Python
- RESTful endpoints for frontend consumption
- Modern React UI with TypeScript
- Dockerized development and deployment

## Getting Started

### Prerequisites

### Running the Project

1. Install `docker` and `docker-compose` if they're not already installed on your system.
2. From the project root, start services:
   ```bash
   docker compose up --build
   ```
3. Access the frontend at `http://localhost:3000` (or the port you configure in `docker-compose.yml`).

### Local Developement

For local development without Docker, see the individual `README.md` files in the `backend/` and `frontend/` folders.

## Notes

This project showcases:

- API integration and data handling
- Full-stack development
- Containerization and modern tooling

Feel free to explore the code and run the project locally!

### Limitations & Out-of-Scope

This project is a demonstration and intentionally omits several features commonly found in production-grade applications:

- No unit or integration tests
- No authentication or authorization
- No retry logic or error handling for third-party API failures
- No rate limiting or API usage monitoring
- No extensive code documentation or inline comments
- No input validation on frontend
- No logging or monitoring setup
- No CI/CD pipeline configuration
- No environment-specific configuration management
- No accessibility (a11y) audits or enhancements
- No support for internationalization (i18n)
- No performance optimization or caching

These aspects are excluded to keep the project focused and concise. For a production application, each would require careful consideration and implementation.

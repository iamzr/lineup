# Backend API

This is a FastAPI backend service, it exposes a single endpoint to fetch user information from a third-party API, and is
designed for containerized deployment with Docker and uv.

## Features

- **FastAPI**: Modern, async Python web framework
- **Async HTTP**: Uses `aiohttp` for non-blocking third-party API calls
- **CORS**: Configurable for development and production environments
- **Typed code**: All code is type-annotated for reliability
- **Containerized**: Ready for deployment with Docker
- **Dependency management**: Uses `uv` and `pyproject.toml`

## Usage

### Development

1. Install dependencies:
   ```bash
   uv sync
   ```
2. Run the server:
   ```bash
   fastapi run backend_api.main --port 8000 --host 0.0.0.0
   ```

### Docker

A docker compose setup is provided for easy deployment.

1. Build and start the container:

```bash
   docker compose up --build
   ```

## API Endpoints

### `GET /users/{user_id}`

Fetches user data from a third-party API using the provided `user_id`.

## Configuration

- Environment variables and settings are managed in `backend_api/config.py`.
- CORS origins for dev/prod are configurable via settings.
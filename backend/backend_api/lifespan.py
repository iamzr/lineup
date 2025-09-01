from contextlib import asynccontextmanager
from typing import Optional

import aiohttp
from fastapi import FastAPI

from backend_api.main import logger
from backend_api.users.client.user_api import UserApiClient


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize resources here (e.g., database connections, HTTP clients)
    logger.info("Starting up...")

    # TODO: setup settings config
    session = aiohttp.ClientSession()
    app.state.user_api_client = UserApiClient(
        session=session, base_url="https://reqres.in/api"
    )

    try:
        yield
    finally:
        # Clean up resources here
        logger.info("Shutting down...")
        await session.close()

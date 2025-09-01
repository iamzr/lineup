import logging
from contextlib import asynccontextmanager

import aiohttp
from fastapi import FastAPI

from backend_api.config import get_settings
from backend_api.users.client.user_api import UserApiClient

logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Starting up...")
    settings = get_settings()
    session = aiohttp.ClientSession()
    app.state.user_api_client = UserApiClient(
        session=session, base_url=settings.user_api_config.base_url
    )
    try:
        yield
    finally:
        logger.info("Shutting down...")
        await session.close()

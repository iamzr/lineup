from typing import Optional

from fastapi import Request

from backend_api.users.client.user_api import UserApiClient


async def get_user_api_client(request: Request) -> UserApiClient:
    client: Optional[UserApiClient] = getattr(
        request.app.state, "user_api_client", None
    )
    if client is None:
        raise RuntimeError(
            "UserApiClient not initialized yet. "
            "Ensure this is called inside FastAPI lifespan."
        )
    return client

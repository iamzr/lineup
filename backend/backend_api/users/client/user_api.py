import aiohttp
from fastapi import HTTPException
from pydantic import ValidationError

from backend_api.users.client import UserClientResponse, API_URL


class UserApiClient:
    def __init__(self, session: aiohttp.ClientSession, base_url: str) -> None:
        self.base_url = base_url
        self.session = session

    async def get_user(self, user_id: int) -> UserClientResponse:
        url = f"{self.base_url}/users/{user_id}"
        try:
            async with self.session.get(url) as resp:
                if resp.status >= 400:
                    raise HTTPException(
                        status_code=resp.status, detail=await resp.text()
                    )
                data = await resp.json()
        except aiohttp.ClientError as e:
            raise HTTPException(
                status_code=502, detail=f"Error contacting third-party API: {e}"
            )

        try:
            return UserClientResponse.model_validate(data)
        except ValidationError as e:
            raise HTTPException(
                status_code=502,
                detail=f"Error processing third-party API response: {e}",
            )

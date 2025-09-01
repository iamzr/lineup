from typing import Optional

import aiohttp
from fastapi import HTTPException
from pydantic import ValidationError

from backend_api.users.client.schemas import UserClientResponse


class UserApiClient:
    def __init__(
        self,
        session: aiohttp.ClientSession,
        base_url: str,
        api_key: Optional[str] = None,
    ) -> None:
        self.session = session
        self.base_url = base_url
        self.api_key = api_key

    async def get_user(self, user_id: int) -> UserClientResponse:
        url = f"{self.base_url}/users/{user_id}"
        headers = {}
        if self.api_key:
            headers["x-api-key"] = self.api_key

        try:
            async with self.session.get(url, headers=headers) as resp:
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

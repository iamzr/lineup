import aiohttp
from fastapi import HTTPException
from pydantic import BaseModel, AnyHttpUrl, EmailStr, ValidationError

API_URL = "https://reqres.in/api"  # TODO: Move to config

class UserData(BaseModel):
    id: int
    email: EmailStr
    first_name: str
    last_name: str
    avatar: AnyHttpUrl


class SupportData(BaseModel):
    url: AnyHttpUrl
    text: str


class UserClientResponse(BaseModel):
    data: UserData
    support: SupportData


async def get_user(user_id: int) -> UserClientResponse:
    url = f"{API_URL}/users/{user_id}"
    async with aiohttp.ClientSession() as session:
        try:
            async with session.get(url) as resp:
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
                status_code=502, detail=f"Error processing third-party API response: {e}"
            )

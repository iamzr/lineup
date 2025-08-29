from fastapi import APIRouter, Path

from app.users import client
from app.users.schemas import UserResponse

router = APIRouter(
    prefix="/users",
    tags=["users"],
    responses={404: {"description": "Not found"}},
)


@router.get("/{user_id}", tags=["users"])
async def get_user(user_id: int = Path(..., title="User ID")) -> UserResponse:
    """
    Fetch user details from a third-party API.

    :param user_id: ID of the user to fetch
    :return: UserResponse object containing user details
    """
    res = await client.get_user(user_id)

    return UserResponse(
        id=res.data.id,
        email=res.data.email,
        first_name=res.data.first_name,
        last_name=res.data.last_name,
        avatar=res.data.avatar,
    )

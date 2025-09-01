from fastapi import APIRouter, Path, Depends

import backend_api.users.client.user_api
from backend_api.users.client.user_api import UserApiClient
from backend_api.users.dependencies import get_user_api_client
from backend_api.users.schemas import UserResponse

router = APIRouter(
    prefix="/users",
    tags=["users"],
    responses={404: {"description": "Not found"}},
)


@router.get("/{user_id}", tags=["users"])
async def get_user(
    user_id: int = Path(title="User ID"),
    client: UserApiClient = Depends(get_user_api_client),
) -> UserResponse:
    """
    Fetch user details from a third-party API.

    :param user_id: ID of the user to fetch
    :param client: UserApiClient instance for making API requests
    :return: UserResponse object containing user details
    """
    if user_id <= 0:
        return UserResponse(
            id=user_id,
            email=f"myemail{user_id}@gmail.com",
            first_name=f"me{user_id}",
            last_name="name",
            avatar="https://reqres.in/img/faces/2-image.jpg"
            if user_id % 2 == 0
            else "https://www.google.com",
        )

    res = await client.get_user(user_id)

    return UserResponse(
        id=res.data.id,
        email=res.data.email,
        first_name=res.data.first_name,
        last_name=res.data.last_name,
        avatar=res.data.avatar,
    )

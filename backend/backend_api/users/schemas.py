from pydantic import BaseModel, EmailStr, AnyHttpUrl


class UserResponse(BaseModel):
    id: int
    email: EmailStr
    first_name: str
    last_name: str
    avatar: AnyHttpUrl

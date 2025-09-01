from pydantic import BaseModel, EmailStr, AnyHttpUrl


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

from functools import lru_cache

from pydantic import BaseModel
from pydantic_settings import BaseSettings


class UserApiSettings(BaseModel):
    base_url: str = "https://reqres.in/api"
    api_key: str | None = None


class CorsSettings(BaseModel):
    allow_origins: list[str] = "*"
    allow_methods: list[str] = ["GET"]
    allow_headers: list[str] = ["*"]
    allow_credentials: bool = False


class Settings(BaseSettings):
    app_name: str = "My FastAPI Application"
    cors_config: CorsSettings = CorsSettings()

    user_api_config: UserApiSettings = UserApiSettings()

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        env_nested_delimiter = "__"


@lru_cache
def get_settings():
    return Settings()

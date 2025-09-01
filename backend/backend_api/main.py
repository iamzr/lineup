from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware

from backend_api.config import get_settings
from backend_api.lifespan import lifespan
from backend_api.users.routes import router as users_router


app: FastAPI = FastAPI(lifespan=lifespan)

settings = get_settings()

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_config.allow_origins,
    allow_credentials=settings.cors_config.allow_credentials,
    allow_methods=settings.cors_config.allow_methods,
    allow_headers=settings.cors_config.allow_headers,
)

api_router = APIRouter(prefix="/api")
api_router.include_router(users_router)

app.include_router(api_router)

# For local development
if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
import os
from app.users.routes import router as users_router

app: FastAPI = FastAPI()

# Read allowed origins from environment variable as comma-separated values
allowed_origins = os.getenv("ALLOWED_ORIGINS", "*").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False,
    allow_methods=["GET"],
    allow_headers=["*"],
)

api_router = APIRouter(prefix="/api")
api_router.include_router(users_router)

app.include_router(api_router)


# For local development
if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

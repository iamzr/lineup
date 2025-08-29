from fastapi import FastAPI, APIRouter
from app.users.routes import router as users_router

app: FastAPI = FastAPI()

api_router = APIRouter(prefix="/api")
api_router.include_router(users_router)

app.include_router(api_router)


# For local development
if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app  = FastAPI(title = "LLM ML Service", version= "1.0.0")

# Core Setup 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:8000"],
     allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "ML Service is running!"}

@app.get("/health")
def health():
    return{"satus": "ok"}
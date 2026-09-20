import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
import httpx
from fastapi.middleware.cors import CORSMiddleware
from urllib.parse import quote

load_dotenv()

api_key = os.getenv("CLASH_API_KEY")
if not api_key:
    raise RuntimeError("CLASH_API_KEY is not set")


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"Message" : "Server Alive"}


@app.get("/test")
async def test():
    try:
        async with httpx.AsyncClient() as Client:
            response = await Client.get(
                "https://jsonplaceholder.typicode.com/posts/1"
            )
            response.raise_for_status()
            return response.json()
    except httpx.HTTPStatusError :
        raise HTTPException(
        status_code=502,
        detail="External API returned an error"
    )


@app.get("/player")
async def get_player(tag : str):
    encoded_tag = quote(tag,safe="")
    url = f"https://api.clashofclans.com/v1/players/{encoded_tag}"
    headers = {
        "Authorization": f"Bearer {api_key}"
    }

    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(url,headers=headers)
            response.raise_for_status()
            data = response.json()
            player_data = {
                    "playername": data["name"],
                    "townhall": data["townHallLevel"],
                    "level": data["expLevel"],
                    "trophies": data["trophies"],
                    "clan": data["clan"]["name"] if data.get("clan") else None,
                    "attackWins": data["attackWins"],
                    "defenseWins": data["defenseWins"]
                    }
            return player_data
        
    except httpx.HTTPStatusError as error:
        raise HTTPException(
            status_code=error.response.status_code,
            detail=f"Clash API error: {error.response.status_code}"
        )

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
import pygambit

app = FastAPI(title="Game Theory API", version="1.0")


class GameData(BaseModel):
    matrix: list

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

@app.get("/game-theory-PA2")
async def home():
    with open("templates/gt.html", "r", encoding="utf-8") as f:
        return HTMLResponse(f.read())

@app.get("/quiz")
async def quiz(request: Request):
    return templates.TemplateResponse("ml_quiz.html", {"request": request})

@app.get("/")
async def home():
    with open("templates/buy.html", "r", encoding="utf-8") as f:
        return HTMLResponse(f.read())


@app.post("/game_solve")
async def game_solve(data: GameData):

    p1_strategies = len(data.matrix)
    p2_strategies = len(data.matrix[0])

    game = pygambit.Game.new_table([p1_strategies, p2_strategies])

    game.players[0].label = "Player 1"
    game.players[1].label = "Player 2"

    for i in range(p1_strategies):
        for j in range(p2_strategies):

            payoff0 = float(data.matrix[i][j][0])
            payoff1 = float(data.matrix[i][j][1])

            game[i, j]["Player 1"] = payoff0
            game[i, j]["Player 2"] = payoff1

    result = pygambit.nash.enummixed_solve(game)

    equilibria = []

    for eq_number, msp in enumerate(result.equilibria, start=1):

        equilibrium = {
            "equilibrium_number": eq_number,
            "players": []
        }

        for player in game.players:

            strategies = {}

            for strategy in player.strategies:
                if float(msp[player.label][strategy.label]) > 0:
                    strategies[strategy.label] = float(
                        msp[player.label][strategy.label]
                    )

            equilibrium["players"].append(
                {
                    "player": player.label,
                    "strategies": strategies,
                    "payoff": float(msp.payoff(player.label))
                }
            )

        equilibria.append(equilibrium)

    return {
        "method": result.method,
        "number_of_equilibria": len(result.equilibria),
        "equilibria": equilibria
    }

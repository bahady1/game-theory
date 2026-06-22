import pygambit as gbt

p1_strategies = int(input("Enter the number of strategies for Player 1: "))
p2_strategies = int(input("Enter the number of strategies for Player 2: "))

game = gbt.Game.new_table([p1_strategies, p2_strategies])

# Player names
game.players[0].label = "Player 1"
game.players[1].label = "Player 2"


for i in range(p1_strategies):
    for j in range(p2_strategies):
        payoff0 = float(input(f"Enter the payoff for Player 1 when Player 1 chooses strategy {i+1} and Player 2 chooses strategy {j+1}: "))
        payoff1 = float(input(f"Enter the payoff for Player 2 when Player 1 chooses strategy {i+1} and Player 2 chooses strategy {j+1}: "))
        game[i, j]["Player 1"] = payoff0
        game[i, j]["Player 2"] = payoff1

result = gbt.nash.enummixed_solve(game)

print("\nNASH EQUILIBRIA RESULTS")
print("Number of Equilibria:", len(result.equilibria))


for eq_number, msp in enumerate(result.equilibria, start=1):
    print(f"\nEquilibrium #{eq_number}")
    print("-" * 50)

    for player in game.players:
        print(f"\n{player.label}:")

        for strategy in player.strategies:
            prob = float(msp[player.label][strategy.label])
            if prob > 0:
                print(f"Strategy {strategy.label}: with probability of {prob}")

        payoff = float(msp.payoff(player.label))
        print(f"  Expected Payoff: {payoff}")


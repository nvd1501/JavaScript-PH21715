const game = {
        team1: "Bayern Munich",
        team2: "Borrussia Dortmund",
        players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
        ],
        score: "4:0",
        scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
        date: "Nov 9th, 2037",
        odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
        },
  };
  console.log("Bài 1");
  const [player1, player2] = game.players;
  console.log(player1, player2);
  const [gk1, ...fieldPlayers1] = player1;
  const [gk2, ...fieldPlayers2] = player2;
  const allPlayers = [...player1, ...player2];
  const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
  const { odds: {team1, x: draw, team2}} = game;
  function printGoals(...players)
  {
      console.log(`${players.length} cầu thủ ghi bàn`);
      console.log(`là : ${players}`);
  }
  printGoals(...game.scored);

  team1 > team2 && console.log(`Đội thắng là đội số 1`);
  team2 > team1 && console.log(`Đội thắng là đội sô 2`);

  console.log("Bài 2");

  function check(data)
  {
    for( let i = 0; i < data.length; i++)
    {
      console.log(`Goal ${i + 1} ${data[i]} `)
    }
  }
  check(game.scored);

  const scorers = 
  {
    Lewandowski: 2,
    Gnarby: 1,
    Hummels: 1,
    
  };

  for (const [team1, odds] of Object.entries(game.odds))
  {
    const strt = team1 == 'x' ? 'Hòa' : `Thắng ${game[team1]}`;
    console.log(`Tỷ lệ ${strt} là ${odds}`)
  }
  
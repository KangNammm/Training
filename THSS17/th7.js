let players = {
    name : "Messi",
    age : 30,
    nation : "Argentine",
    club : "PSG",
};
players.email = "messi@gmail.com";
console.log(players);
players.club = " Barcelone";
for (const key in players){
    console.log(`${key}: ${players[key]}`);
}

delete players.age;
console.log(players);
const team_1 = document.getElementById("team-1-score");
const team_2 = document.getElementById("team-2-score");

// Assuming you initialize the scores somewhere
team_1.innerHTML = "0";
team_2.innerHTML = "0";

function player_1_add() {
    console.log("Player 1 Score Up");
    team_1.innerHTML = (parseInt(team_1.innerHTML) + 1).toString();
}

function player_1_sub() {
    console.log("Player 1 Score Down");
    team_1.innerHTML = (parseInt(team_1.innerHTML) - 1).toString();
}

function player_2_add() {
    console.log("Player 2 Score Up");
    team_2.innerHTML = (parseInt(team_2.innerHTML) + 1).toString();
}

function player_2_sub() {
    console.log("Player 2 Score Down");
    team_2.innerHTML = (parseInt(team_2.innerHTML) - 1).toString();
}

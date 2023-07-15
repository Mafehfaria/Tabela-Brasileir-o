function createGame(player1,hour,player2){
    return `
    <li>
<img src="./times/icon-${player1}.png" alt="Bandeira do ${player1}"/>
<strong>${hour}</strong>
<img src="./times/icon-${player2}.png" alt="Bandeira do ${player2}">
`
}
let delay = -0.4;
function createCard(date,day,games){
    delay = delay + 0.4;
    return`
<div class="card" style="animation-delay:${delay}s">
<h2> ${date} <span>${day}</span></h2>
<ul>
${games}
</ul>
</div>
`
}
document.querySelector("#cards").innerHTML = 
createCard("19/07","Segunda-Feira", createGame("corinthians","21hrs", "palmeiras"))
+ createCard("20/07","Terça-Feira", createGame("SP","21hrs", "Vasco")) + createCard("21/07","Quarta-Feira", createGame("Atletico","18hrs", "Bahia"))
+ createCard("22/07","Quinta-Feira", createGame("Inter","21hrs", "Flamengo"))+createCard("23/07","Sexta-Feira", createGame("Gremio","21hrs", "Cruzeiro"))
+createCard("24/07","Sábado", createGame("Santos","21hrs", "Palmeiras"))
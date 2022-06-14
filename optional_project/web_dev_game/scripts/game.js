function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("게임을 실행하기 위해서는 두명의 플레이어가 필요합니다!");
    return;
  }

  gameAreaElement.style.display = "block";
}

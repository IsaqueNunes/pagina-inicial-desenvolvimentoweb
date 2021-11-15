function searchProject() {
  let input = document.getElementById("searchbox").value;
  console.log(input);
  input = input.toLowerCase();

  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    if (!cards[i].textContent.toLowerCase().includes(input)) {
      cards[i].style.display = "none";
    } else {
      cards[i].style.display = "block";
    }
  }
}

const cards = document.querySelectorAll('.memory-card');

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;



  function start(){
  setTimeout(() => {
  cards.forEach(card =>{
    card.classList.add('flip')
  })
  }, 0)

  setTimeout(() => {
  cards.forEach(card =>{
    card.classList.remove('flip')
  })
  }, 3000)

}

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }


  var contagem = 0

  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
    console.log(isMatch)
    
    if (isMatch == true){
      contagem ++
    }

    if (contagem === 8){
      alert("Boyaah")
      location.reload()
    }

    console.log(contagem)
    document.getElementById('demo').innerHTML = "<b>score: </b>" + contagem
  }
  

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }

  var contagem2 = 0

  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
    }, 1500);

    if (unflipCards){
      contagem2++
    }

    if (contagem2 === 5){
      alert("Game Over")
      location.reload()
    }

    document.getElementById('demo2').innerHTML = "<b>erros: </b>" + contagem2
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

 (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 16);
     card.style.order = ramdomPos;
   });
 })();

 function refresh(){
  location.reload()
 }

 document.getElementById('demo2').innerHTML = "<b>erros: </b>" + contagem2
 document.getElementById('demo').innerHTML = "<b>score: </b>" + contagem
  cards.forEach(card => card.addEventListener('click', flipCard));
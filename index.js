function writeCards(names, occasion) {
    let cards = [];
    for (let i = 0; i < names.length; i++) {
      cards.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return cards;
  }
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  let names = ["Charlie", "Samip", "Ali"];
  let occasion = "birthday";
  let cards = writeCards(names, occasion);
  console.log(cards);
  countDown(10);
  countDown(4)
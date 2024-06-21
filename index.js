let names = ['Quiin', 'Nelly', 'Clark'];
  let eventName = 'birthday';
function writeCards(names, eventName) {
    let cards = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      cards.push(message);
    }
  
    return cards;
  }

  countDown(10);
  function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}


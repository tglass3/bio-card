// My Scripts
console.log('👍 JS Connected');

const gradient = ['bg0', 'bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8'];
const limit = gradient.length;
const randNum = Math.floor(Math.random()*limit);

const body = document.querySelector('body');

body.classList.add(gradient[randNum]);



// get all the card
document.querySelectorAll('.card').forEach( item => {
    
    // for each item i.e. card, do this
    item.addEventListener('click', event => {
      
      // toggle class on card
      item.classList.toggle('flipped');
    })
  
})
// My Scripts
console.log('👍 JS Connected');

// const gradient = ['bg0', 'bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8'];
// const limitG = gradient.length;
// const randNumOne = Math.floor(Math.random()*limitG);

// const body = document.querySelector('body');

// const randImg = document.querySelector('.workPic');
// const imgArray = ['img/logo.jpg', 'img/postcard.jpg', 'img/poster-1.jpg', 'img/poster-2.jpg', 'img/product.jpg'];

// const numRange = imgArray.length;
// const randNumTwo = Math.floor(Math.random()*numRange);

// body.classList.add(gradient[randNumOne]);




// get all the card
document.querySelectorAll('.card').forEach( item => {
    
    // for each item i.e. card, do this
    item.addEventListener('click', event => {
      
      // toggle class on card
      item.classList.toggle('flipped');
    })
  
})


randImg.src = imgArray[randNumTwo];


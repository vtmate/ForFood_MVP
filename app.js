function resetPage(){
    localStorage.setItem('points', 20);
    progress.style.width = 20 + '%';
    localStorage.setItem('cart', []);
}

function addToCart(){

    var cartstring = localStorage.getItem('cart') || JSON.stringify([]);
    var cart = JSON.parse(cartstring);
    cart.push(g);
    localStorage.setItem('cart', JSON.stringify(cart));

    var points = localStorage.getItem('points') || 20;
    points++;
    localStorage.setItem('points', points);
    progress.style.width = points + '%';
    
}


const progress = document.querySelector('.progress');
var points = localStorage.getItem('points') || 20;
progress.style.width = points + '%';


const content = document.querySelector('.content');
const reset = document.createElement('button');
reset.classList.add('reset');
reset.addEventListener("click", resetPage);
reset.innerText = "Reset";
content.append(reset);
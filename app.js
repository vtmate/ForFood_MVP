function resetPage(){
    localStorage.setItem('points', 20);
    localStorage.setItem('allpoints', 20)
    progress.style.width = 20 + '%';
    localStorage.setItem('cart', []);
    location.reload();
}

function addToCart(){

    var cartstring = localStorage.getItem('cart') || JSON.stringify([]);
    var cart = JSON.parse(cartstring);
    cart.push(g);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function buyItems(priceSum){
    var allpoints = localStorage.getItem('points') || 20;
    allpoints = parseInt(allpoints) + parseInt(priceSum);
    localStorage.setItem('allpoints', allpoints);

    var points = localStorage.getItem('points') || 20;
    points = parseInt(points) + parseInt(priceSum);
    localStorage.setItem('points', points);
    progress.style.width = points + '%';
}

const progress = document.querySelector('.progress');
var allpoints = localStorage.getItem('allpoints') || 20;
progress.style.width = allpoints + '%';


const content = document.querySelector('.content');
const reset = document.createElement('button');
reset.classList.add('reset');
reset.addEventListener("click", resetPage);
reset.innerText = "Reset";
content.append(reset);
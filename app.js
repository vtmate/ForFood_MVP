function resetPage(){
    localStorage.setItem('points', 40);
    localStorage.setItem('allpoints', 40)
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
    var allpoints = localStorage.getItem('points') || 40;
    allpoints = parseInt(allpoints) + parseInt(priceSum);
    localStorage.setItem('allpoints', allpoints);
    if(allpoints/2 > 100){
        progress.style.width = '100%';
    } else {
        progress.style.width = allpoints/2 + '%';
    }

    var points = localStorage.getItem('points') || 40;
    points = parseInt(points) + parseInt(priceSum);
    localStorage.setItem('points', points);
}

const progress = document.querySelector('.progress');
var allpoints = localStorage.getItem('allpoints') || 40;
if(allpoints/2 > 100){
    progress.style.width = '100%';
} else {
    progress.style.width = allpoints/2 + '%';
}


const content = document.querySelector('.content');
const reset = document.createElement('button');
reset.classList.add('reset');
reset.addEventListener("click", resetPage);
reset.innerText = "Reset";
content.append(reset);
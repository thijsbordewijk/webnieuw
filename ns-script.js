/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var hart = document.querySelectorAll('.hartje');
console.log(hart);

var filterButton = document.querySelector('.filter');
var filterIcon = document.querySelector('.fa-filter');
var i = 0;

function like(e) {
    var klikhartje = e.currentTarget;
    klikhartje.classList.toggle('far');
    klikhartje.classList.toggle('fas');
    klikhartje.classList.toggle('hartanimatie');
}

for (i = 0; i < hart.length; i++) {
    hart[i].addEventListener('click', like);
}


function button(e) {
    e.preventDefault();
}

function filter() {
    filterIcon.classList.add('filteranimatie');
    setTimeout(function () {
        filterIcon.classList.remove('filteranimatie');
    }, 1000);
}

filterButton.addEventListener('click', button);
filterButton.addEventListener('click', filter);

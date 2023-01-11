let color = '';

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = 'blue';
    } else if (event.key === 's') {
        color = 'red';
    }
    else if (event.key === 'd') {
        color = 'yellow';
    }
});

function pintar() {
    this.style.backgroundColor = color;
}

document.getElementById('div1').addEventListener('click', pintar);
document.getElementById('div2').addEventListener('click', pintar);
document.getElementById('div3').addEventListener('click', pintar);
document.getElementById('div4').addEventListener('click', pintar);
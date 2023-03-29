
document.querySelector('#buttons button.refresh').style.display = 'none';

function moveButton() {
    var button = document.querySelector('#buttons button.no');
    button.style.position = 'absolute';
    button.style.left = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth)) + 'px';
    button.style.top = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight)) + 'px';
}

function showRefresh() {
    document.querySelector('#buttons button.yes').style.display = 'none';
    document.querySelector('#buttons button.no').style.display = 'none';
    document.querySelector('#buttons button.refresh').style.display = '';
    document.querySelector('h1').innerHTML = 'Yeah, you\'re right!';
}

function refreshPage() {
    document.querySelector('#buttons button.refresh').style.display = 'none';
    location.reload();
}
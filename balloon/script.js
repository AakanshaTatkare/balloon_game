var currentScale = 1.0;

function inflateBalloon() {
    var balloon = document.getElementById('balloon');
    currentScale += 0.5;
    balloon.style.transform = 'scale(' + currentScale + ')';
}
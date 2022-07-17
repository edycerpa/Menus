function burguerWrapper () {
    document.querySelector('.burguer, .close, .nav').classList.toggle('active'); 
}
function buttonWrapper () {
    document.querySelector('.button').classList.toggle('dark');
    document.querySelector('body').classList.toggle('dark');
}
function estilo1 () {
    document.getElementById('style-1').classList.remove('hide')
    document.querySelector('#style-2').classList.add('hide')
    document.querySelector('#style-3').classList.add('hide')
    document.querySelector('#style-4').classList.add('hide')
}
function estilo2 () {
    document.getElementById('style-1').classList.add('hide')
    document.querySelector('#style-2').classList.remove('hide')
    document.querySelector('#style-3').classList.add('hide')
    document.querySelector('#style-4').classList.add('hide')
}
function estilo3 () {
    document.getElementById('style-1').classList.add('hide')
    document.querySelector('#style-2').classList.add('hide')
    document.querySelector('#style-3').classList.remove('hide')
    document.querySelector('#style-4').classList.add('hide')
}
function estilo4 () {
    document.getElementById('style-1').classList.add('hide')
    document.querySelector('#style-2').classList.add('hide')
    document.querySelector('#style-3').classList.add('hide')
    document.querySelector('#style-4').classList.remove('hide')
}
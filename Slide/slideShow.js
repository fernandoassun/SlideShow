'use strict'

const images = [
    { 'id': '1', 'url': './img/cowboy-bepop.jpg'},
    { 'id': '1', 'url': './img/dragon-ball-original-series.avif'},
    { 'id': '1', 'url': './img/one-piece.jpg'},
    { 'id': '1', 'url': './img/Os-Cavaleiros-do-Zodíaco.jpg'},
    { 'id': '1', 'url': './img/Trigun.jpg'},
    { 'id': '1', 'url': './img/yuyu-hakusho-ovas.jpg'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
        <div class='item'>
        <img src='${image.url}'
        </div>
        `
    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length -1];
    containerItems.insertBefore( lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
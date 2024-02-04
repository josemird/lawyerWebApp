/*Cuando hago click .button, .nav TOGGLE 'active'*/

const button = document.querySelector('.button');
const nav = document.querySelector('.nav');
const svg = document.getElementsByTagName('svg')
const svgClose = `
    <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
    </svg>`;
const svgOpen = `
    <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
    </svg>`;

button.addEventListener('click', () => {
        nav.classList.toggle('active');
        Array.from(svg).forEach((element) => {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
                element.innerHTML = svgClose;
            } else {
                element.classList.add('active');
                element.innerHTML = svgOpen;
            }
        });
});
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

async function cargarMapaAsync() {
    await new Promise(resolve => {
        document.addEventListener("DOMContentLoaded", resolve);
    });

    let mapContainer = document.querySelector(".secMapa");
    let mapIframe = document.createElement('iframe');
    mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.5068500595403!2d-4.567662822293242!3d36.662312775457174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e576912d1a6f%3A0xa3c56d8f4ca9f807!2sMartin%20Marin%20abgados!5e0!3m2!1ses!2ses!4v1708726537659!5m2!1ses!2ses";
    mapIframe.allowfullscreen = "";
    mapIframe.loading = "lazy";  
    mapIframe.referrerpolicy = "no-referrer-when-downgrade";
    mapContainer.appendChild(mapIframe);
}

cargarMapaAsync();
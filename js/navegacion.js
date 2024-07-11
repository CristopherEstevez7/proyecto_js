
const header= document.getElementById('header');
const navbar=document.createElement('navbar');
const nav=document.createElement('nav');
const ul=document.createElement('ul');
header.appendChild(navbar);
navbar.appendChild(nav);
nav.appendChild(ul);
header.className= 'nav-bar';


const links=["Index","Inversion","Contacto"];


for(const link of links){
    const li=document.createElement('li');
    li.innerHTML=`<a href="${link.toLocaleLowerCase()}.html">${link}</a>`;
    ul.appendChild(li);
}
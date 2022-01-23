document.querySelector('#lastmod').innerHTML= `Page last update ${document.lastModified}`;

const copyrightyear = document.getElementById("currentyear");
copyrightyear.textContent = new Date().getFullYear();

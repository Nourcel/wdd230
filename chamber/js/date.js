document.querySelector('#lastmod').innerHTML= ` last update ${document.lastModified}`;

const copyrightyear = document.getElementById("currentyear");
copyrightyear.textContent = new Date().getFullYear();
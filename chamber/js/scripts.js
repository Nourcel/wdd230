function togglemenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("humbugerbtn").classList.toggle("open");
}

const x = document.getElementById("humbugerbtn")
x.onclick = togglemenu;
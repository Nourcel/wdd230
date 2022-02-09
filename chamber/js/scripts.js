function togglemenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("humbugerbtn").classList.toggle("open");
}

const x = document.getElementById("humbugerbtn")
x.onclick = togglemenu;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
 
// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;

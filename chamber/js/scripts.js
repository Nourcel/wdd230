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

//----------------------------------------------------------------------------//
const requestURL = 'https://github.com/Nourcel/wdd230/blob/main/chamber/data/data.json';
const spotlights = document.querySelector('.spotlight-box');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.log(jsonObject); // temporary checking for valid response and data parsing
        let businesses = jsonObject['directory'];
        const originalarray = jsonObject['directory'];
        businesses.forEach(displaySpotlight);

        window.onresize = () => {
            if (window.innerWidth < 949) {
                spotlights.innerHTML = "";
                businesses = businesses.filter(business => (business.company != "Aberdeen & Rockfish Railroad"))
                businesses.forEach(displaySpotlight);
                console.log(businesses);

            } else if (window.innerWidth <= 949) {
                spotlights.innerHTML = "";
                businesses.forEach(displaySpotlight);
            } else if (window.innerWidth > 949) {
                window.innerWidth > 949
                spotlights.innerHTML = "";
                originalarray.forEach(displaySpotlight);
            }
        };
    })


function displaySpotlight(spolight) {

    console.log(spolight.company);
    // Create elements to add to the document
    let business = document.createElement('section');
    let h3 = document.createElement('h3');
    let logo = document.createElement('img');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');

    if (spolight.level === "Gold") {
        // Change the textContent property of the h2 element to contain the prophet's full name
        h3.textContent = spolight.company;
        p.textContent = spolight.website;
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        logo.setAttribute('src', spolight.imageurl);
        logo.setAttribute('alt', spolight.alt);
        logo.setAttribute('loading', 'lazy');
    } else {
        business.style.display = "none";
    }
    //setting classes names to the element created
    business.className = "spotlight-box1";
    // business3.className = "spotlight-box3";
    logo.className = "spotlightlogoimg";


    // Add/append the section(spotlight-box1)
    business.appendChild(logo);
    business.appendChild(h3);
    business.appendChild(p);

    // Add/append the existing HTML div with the cards class with the section(business)
    spotlights.append(business);

}


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
const requestURL = 'https://nourcel.github.io/wdd230/chamber/data/data.json';
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
//------------------------------------------------------------------------//

const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.log(jsonObject); // temporary checking for valid response and data parsing
        const directory = jsonObject['directory'];
        directory.forEach(displayGridDirectory);

        // Buttons from DOM
        const gridBtn = document.querySelector(".gridBtn");
        const listBtn = document.querySelector(".listBtn");


        gridBtn.addEventListener("click", () => {

            //This is the cards div, referenced at top
            cards.innerHTML = ''; //This will clear anything inside, preparing for new layout
            directory.forEach(displayGridDirectory);
        });


        listBtn.addEventListener("click", () => {

            //This is the cards div, referenced at top
            cards.innerHTML = ''; //This will clear anything inside, preparing for new layout
            directory.forEach(displayListDirectory);
        });
        // To solve the mid resizing issue with responsive class on
        window.onresize = () => {
            if (!cards.classList.contains('grid_layout')) { //if there is not a grid_layout added, so it's on list mode 
                if (window.innerWidth > 519) { //If the page is bigger than 519 pixels
                    cards.innerHTML = '';
                    directory.forEach(displayListDirectory);
                } else if (window.innerWidth <= 519) { //If the page is smaller than 519 pixels
                    cards.innerHTML = '';
                    directory.forEach(displayListDirectory);
                }
            }
        };

    });



function displayGridDirectory(business) {
    if (!cards.classList.contains('grid_layout')) {
        cards.classList.add('grid_layout');
    }

    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let logo = document.createElement('img');

    card.className = "card"
    h2.className = "company";
    p1.className = "para";
    p2.className = "para";
    p3.className = "para";
    logo.className = "directoryLogo";

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${business.company}`;
    p1.textContent = `${business.address}`;
    p2.textContent = `${business.phone}`;
    p3.textContent = `${business.website}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', business.imageurl);
    logo.setAttribute('alt', `${business.company} logo`);
    logo.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);

    // Add/append the existing HTML div with the cards class with the section(card)
    cards.append(card);
}


function displayListDirectory(business) {
    cards.classList.remove('grid_layout');

    if (window.innerWidth <= 519) {
        let card = document.createElement('tr');
        let td1 = document.createElement('td');

        card.className = "cardSmall";
        td1.className = "cellSmall";

        // Change the textContent property of the h2 element to contain the prophet's full name
        td1.innerHTML = `<span class="companynameSmall">${business.company}</span><br>
                           ${business.address}<br> 
                           ${business.website}<br> 
                           ${business.phone}`;

        // Add/append the section(card) with the h2 element
        card.appendChild(td1);

        // Add/append the existing HTML div with the cards class with the section(card)
        cards.appendChild(card);

    } else {
        // Create elements to add to the document
        let card = document.createElement('tr');
        let th = document.createElement('th');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        card.className = "card"
        th.className = "companyname";
        td1.className = "cell";
        td2.className = "cell";
        td3.className = "cell";

        // Change the textContent property of the h2 element to contain the prophet's full name
        th.textContent = `${business.company}`;
        td1.textContent = `${business.address}`;
        td2.textContent = `${business.phone}`;
        td3.textContent = `${business.website}`;


        // Add/append the section(card) with the h2 element
        card.appendChild(th);
        card.appendChild(td1);
        card.appendChild(td2);
        card.appendChild(td3);

        // Add/append the existing HTML div with the cards class with the section(card)
        cards.appendChild(card);
        // console.log(classlist);
    }
    window.addEventListener("load", () => {
        if (dayNum == 1 || dayNum == 2) {
          document.querySelector(".banner").style.display = "block";
        } else {
          document.querySelector(".banner").style.display = "none";
        }
      });
}


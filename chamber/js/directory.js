//const requestURL = 'https://nourcel.github.io/wdd230/chamber/data/data.json';
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

    });//



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
}
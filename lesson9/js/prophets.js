
  // set the JSON source URL
  const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json"
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      // console.table(jsonObject); // checking for response
      const prophets = jsonObject['prophets'];
      //select output location
      const cards = document.querySelector('.cards');
  
      prophets.forEach(prophet => {
          let card = document.createElement('section');
          let h2 = document.createElement('h2');
          let p = document.createElement('p');
          let pimg = document.createElement('img');
          //use templet Literals
          h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
          p.innerHTML = `Date of Birth: ${prophet.birthdate} <br> Place of Birth: ${prophet.birthplace}`;
          pimg.setAttribute('src', prophet.imageurl);
          pimg.setAttribute('alt', `${prophet.name} - ${prophet.order}`)
  
          card.append(h2);
          card.append(p);
          card.append(pimg);
          cards.append(card);
      });
  
  });
    
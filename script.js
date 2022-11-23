// And the below example is also an api application
// this time not dad jokes but chuck norris jokes are randomly created
// and this time we don't need to implement any headers
// fetching the url only is enough to get the response
// and when we turn our response into a json format this time
// there is no "joke" key and value, but "value" key and its value will work for us this time
// so we call value key of our data and we get the norris jokes as value of our value key of our data variable.

// same logic, minor differences:

// that's the basic logic of api applications and fetch() get() headers etc...

const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

/*// using .then method:

function getRandomDadJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      jokeEl.textContent = data.value;
    });
}

jokeBtn.addEventListener("click", getRandomDadJoke);

*/

// Same functionality by using an async function and await keyword:

async function getRandomDadJoke() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");

  const data = await response.json();

  jokeEl.textContent = data.value;
}

jokeBtn.addEventListener("click", getRandomDadJoke);

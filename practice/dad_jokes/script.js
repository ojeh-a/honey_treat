const jokeE1 = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const generateJoke = async () => {
    const config = {
        headers: { Accept: "application/json" },
    },
    const res = await fetch("https://icanhazdadjoke.com/", config);
    const data = await res.json();
    jokeE1.innerHTML = data.joke;

    // Fetching with .then()
    // fetch("https:icanhazdadjoke.com/", config)
    //      .then((res) => res.json())
    //      .then((data => (jokeE1.innerHTML = datajoke)));
};
generateJoke();

jokeBtn.addEventListener("click", () => generateJoke());

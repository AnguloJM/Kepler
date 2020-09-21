async function fetchData(userInput) {
  try {
    const url = `https://itunes.apple.com/search?media=music&term=${userInput}&limit=6`;
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

const form = document.querySelector("#search-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = document.querySelector("#search").value;
  document.querySelector("#search").value = "";
  fetchData(inputValue);
});

// async function topRated() {
//   "https://itunes.apple.com/search?media=music&attribute=ratingIndex&limit=6"
//   const container = document.s
// }

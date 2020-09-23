async function fetchTopResult() {
  try {
    const url = `https://itunes.apple.com/search?media=music&attribute=ratingIndex&limit=6`;
    const response = await axios.get(url);
    const data = response.data.results;
    console.log(response.data.results);
    showTopResult(data);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
fetchTopResult();

let resultDiv = document.querySelector("#top-searches");
function showTopResult(datas) {
  let results = datas.map((data) => {
    const newDiv = document.createElement("div");
    resultDiv.appendChild(newDiv);
    newDiv.classList = "top-rated-items";

    const image = document.createElement("img");
    image.setAttribute("src", data.artworkUrl100);
    newDiv.appendChild(image);

    const songName = document.createElement("h3");
    songName.innerHTML = `${data.collectionName}`;
    newDiv.appendChild(songName);

    const artist = document.createElement("p");
    artist.innerHTML = `${data.artistName}`;
    newDiv.appendChild(artist);

    const playSample = document.createElement("audio");
    const source = document.createElement("source");
    source.setAttribute("src", data.previewUrl);
    playSample.setAttribute("controls", data.previewUrl);
    playSample.appendChild(source);
    newDiv.appendChild(playSample);
  });

  return results;
}

async function fetchSearchData(userInput) {
  try {
    const url = `https://itunes.apple.com/search?media=music&term=${userInput}&limit=6`;
    const response = await axios.get(url);
    const data = response.data.results;
    showSearchResults(data);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

let resultList = document.querySelector("#top-searches");
function showSearchResults(datas) {
  let results = datas.map((data) => {
    const newDiv = document.createElement("div");
    resultList.appendChild(newDiv);
    newDiv.classList = "searched-data";

    const image = document.createElement("img");
    image.setAttribute("src", data.artworkUrl100);
    newDiv.appendChild(image);

    const songName = document.createElement("h3");
    songName.innerHTML = `${data.collectionName}`;
    newDiv.appendChild(songName);

    const artist = document.createElement("p");
    artist.innerHTML = `${data.artistName}`;
    newDiv.appendChild(artist);

    const playSample = document.createElement("audio");
    const source = document.createElement("source");
    source.setAttribute("src", data.previewUrl);
    playSample.setAttribute("controls", data.previewUrl);
    playSample.appendChild(source);
    newDiv.appendChild(playSample);
  });

  return results;
}

const form = document.querySelector("#search-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeResults();
  const inputValue = document.querySelector("#search").value;
  document.querySelector("#search").value = "";
  fetchSearchData(inputValue);
});

function removeResults() {
  const appendElement = document.querySelector("#top-searches");
  while (appendElement.lastChild) {
    appendElement.removeChild(appendElement.lastChild);
  }
}

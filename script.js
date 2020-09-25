// Grabs Top Rated Info and limits to 60 results
async function fetchTopResult() {
  try {
    const url = `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?media=music&attribute=ratingIndex&limit=60`;
    const response = await axios.get(url);
    const data = response.data.results;
    showTopResult(data);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
fetchTopResult();
// This function creates elements and displays the the info tanken from the api and pushed into the topRatedArray
let resultDiv = document.querySelector("#top-searches");
function showTopResult(datas) {
  moreTopRatedButton();
  topRatedArray.length = 0;
  topRatedCount = 1;
  let results = datas.map((data) => {
    const newDiv = document.createElement("div");
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

    topRatedArray.push(newDiv);
  });
  for (let i = 0; i < 6; i++) {
    resultDiv.appendChild(topRatedArray[i]);
  }

  return results;
}
// Grabs the info from api based on user input, limits to 60 results
async function fetchSearchData(userInput) {
  try {
    const url = `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?media=music&term=${userInput}&limit=60`;
    const response = await axios.get(url);
    const data = response.data.results;
    showSearchResults(data);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
// creates elements, passes api info into the elements and pushed into resultsArray
let resultList = document.querySelector("#top-searches");
function showSearchResults(datas) {
  moreSearchResultsButton();
  resultsArray.length = 0;
  count = 1;
  let results = datas.map((data) => {
    const newDiv = document.createElement("div");
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

    resultsArray.push(newDiv);
  });
  for (let i = 0; i < 6; i++) {
    resultList.appendChild(resultsArray[i]);
  }

  return results;
}
// creates search form passes user input
const form = document.querySelector("#search-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeResults();
  const inputValue = document.querySelector("#search").value;
  document.querySelector("#search").value = "";
  fetchSearchData(inputValue);
});
//removes current content on page
function removeResults() {
  const appendElement = document.querySelector("#top-searches");
  while (appendElement.lastChild) {
    appendElement.removeChild(appendElement.lastChild);
  }
}
// created more results button for searched info and passes info through the results array
let resultsArray = [];
let count = 1;
function moreSearchResultsButton() {
  let mainDiv = document.querySelector("#top-searches");
  const newDiv = document.createElement("div");
  mainDiv.appendChild(newDiv);
  newDiv.classList = "more-results-button";

  const button = document.createElement("button");
  button.innerHTML = "More results >>";
  newDiv.appendChild(button);
  button.addEventListener("click", (e) => {
    removeResults();
    moreSearchResultsButton();
    let loopInit = 6 * count;
    let loopEnd = 6 * (count + 1);
    if (loopEnd === 66) {
      mainDiv.innerHTML = "End of results. Search for something else.";
    } else {
      for (let i = loopInit; i < loopEnd; i++) {
        resultList.appendChild(resultsArray[i]);
      }
      count++;
    }
  });
}
// created more results button for topRated info and passes info through the topRatedArray
let topRatedArray = [];
let topRatedCount = 1;
function moreTopRatedButton() {
  let mainDiv = document.querySelector("#top-searches");
  const newDiv = document.createElement("div");
  mainDiv.appendChild(newDiv);
  newDiv.classList = "top-rated-home";

  const title = document.createElement("h2");
  title.innerText = "Top Rated:";

  const button = document.createElement("button");
  button.innerHTML = "More results >>";
  newDiv.appendChild(title);
  newDiv.appendChild(button);
  button.setAttribute("id", "more-toprated-button");
  button.addEventListener("click", (e) => {
    removeResults();
    moreTopRatedButton();
    let loopInit = 6 * topRatedCount;
    let loopEnd = 6 * (topRatedCount + 1);
    if (loopEnd === 66) {
      mainDiv.innerHTML = "End of results. Search for something else.";
    } else {
      for (let i = loopInit; i < loopEnd; i++) {
        resultDiv.appendChild(topRatedArray[i]);
      }
      topRatedCount++;
    }
  });
}

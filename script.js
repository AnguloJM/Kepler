async function fetchTopResult() {
  try {
    const url = `https://itunes.apple.com/search?media=music&attribute=ratingIndex&limit=60`;
    const response = await axios.get(url);
    const data = response.data.results;
    showTopResult(data);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
fetchTopResult();

let resultDiv = document.querySelector("#top-searches");
function showTopResult(datas) {
  moreTopRatedButton();
  topRatedArray.length = 0;
  topRatedCount = 1;
  let results = datas.map((data) => {
    const newDiv = document.createElement("div");
    // resultDiv.appendChild(newDiv);
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

async function fetchSearchData(userInput) {
  try {
    const url = `https://itunes.apple.com/search?media=music&term=${userInput}&limit=60`;
    const response = await axios.get(url);
    const data = response.data.results;
    showSearchResults(data);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

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

let topRatedArray = [];
let topRatedCount = 1;
function moreTopRatedButton() {
  let mainDiv = document.querySelector("#top-searches");
  const childDiv = document.querySelector("#display-top-rated");
  const button = document.querySelector("#more-toprated-button");
  mainDiv.appendChild(childDiv);
  childDiv.appendChild(button);
  button.addEventListener("click", (e) => {
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

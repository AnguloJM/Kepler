## Project Name

Kepler

## Project Description

Informative library that can retrieve data based on user input. Data can include albums, artist, music, and music samples. 

## API and Data Sample

I am using an API that allows me to place search fields on my website to search for content within the iTunes Store and Apple Books Store.
https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/

```
{
    "resultCount": 1,
    "results": [
        {
            "wrapperType": "track",
            "kind": "song",
            "artistId": 259760619,
            "collectionId": 359966550,
            "trackId": 359966562,
            "artistName": "Sean Kingston & Justin Bieber",
            "collectionName": "Eenie Meenie - Single",
            "trackName": "Eenie Meenie",
            "collectionCensoredName": "Eenie Meenie - Single",
            "trackCensoredName": "Eenie Meenie",
            "artistViewUrl": "https://music.apple.com/us/artist/sean-kingston/259760619?uo=4",
            "collectionViewUrl": "https://music.apple.com/us/album/eenie-meenie/359966550?i=359966562&uo=4",
            "trackViewUrl": "https://music.apple.com/us/album/eenie-meenie/359966550?i=359966562&uo=4",
            "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/Music/05/2f/d1/mzm.vlbwajpk.aac.p.m4a",
            "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/e8/10/17/e8101796-28e0-0da6-4579-781a50dc84f3/source/30x30bb.jpg",
            "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/e8/10/17/e8101796-28e0-0da6-4579-781a50dc84f3/source/60x60bb.jpg",
            "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/e8/10/17/e8101796-28e0-0da6-4579-781a50dc84f3/source/100x100bb.jpg",
            "collectionPrice": 1.29,
            "trackPrice": 1.29,
            "releaseDate": "2010-03-19T07:00:00Z",
            "collectionExplicitness": "notExplicit",
            "trackExplicitness": "notExplicit",
            "discCount": 1,
            "discNumber": 1,
            "trackCount": 1,
            "trackNumber": 1,
            "trackTimeMillis": 201880,
            "country": "USA",
            "currency": "USD",
            "primaryGenreName": "Pop",
            "isStreamable": true
        }
    ]
}
```

## Wireframes

https://github.com/AnguloJM/Kepler/issues/2

#### MVP 

- Fuctional home page where users can search for an artist, album, or song
- Display top rated searches on home page
- Have a button to hear sample music from results

#### PostMVP  

- Adjust app to also fit on mobile
- Add other search options
- create a "filter" button to help specify searches
- create a "recently searched" tab on home page

## Project Schedule  

|  Day | Deliverable | Status
|---|---| ---|
|Sept 21| Project plan/approval; Pseudocode functionality | Complete
|Sept 22| Core App structure (HTML, CSS, JS) | Complete
|Sept 23| Complete Webpage and Test/debug | Complete
|Sept 24| Post MVP/Styling | Incomplete
|Sept 25| Present | Incomplete

## Priority Matrix

https://github.com/AnguloJM/Kepler/issues/1

## Timeframes

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Pseudocode | H | 2hrs| 1hrs | 1hrs |
| CSS Styling | H | 12hrs| 10hrs | 10hrs |
| JS functionality | H | 08hrs| 14hrs | 14hrs |
| Post MVP work | H | 6hrs| 8hrs | 8hrs |
| API functionality | H | 10hrs| 3hrs | 3hrs |
| Debugging | H | 2hrs| 4hrs | 4hrs |
| Total | H | 40hrs| 40hrs | 40hrs |

## Code Snippet

```
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
```

## Change Log
 Had to change the wireframe layout. Eliminated second page and loaded search results on the homepage. Had to make this change due to time. Would not have enough time to style second page.

import React, { Component } from 'react'

// KEY:   AIzaSyAF7iiQYASbjm_nV0-mifHGmTERz86NKsM
// My Git Example: https://github.com/Edxael/ViralVideos/blob/master/views/js/app.js
// Code for gapi:  https://apis.google.com/js/client.js
// Developers Code: https://developers.google.com/youtube/v3/code_samples/javascript#search-by-keyword

// Example: https://stackoverflow.com/questions/26199933/youtube-api-3-0-search-videos-and-get-video-statistics-at-single-request
// Instructions: https://developers.google.com/youtube/v3/docs/videos/list#usage
// Good Example: https://ctrlq.org/code/19608-youtube-search-api

export default class extends Component {

  exe1 = async () => {
    let myUrl = "https://www.googleapis.com/youtube/v3/search?part=id&q=tuto&type=video&key={AIzaSyAF7iiQYASbjm_nV0-mifHGmTERz86NKsM}"
    const info = await fetch(myUrl, { method: "GET" } )
    const data = await info.json()
    console.log(data)
  }



  render() {
    return(
      <div>
        <div>Play-1 Component</div>


        <button onClick={ () => { this.exe1() } } >Click Here</button>
      </div>
    )
  }
}



// const info = await fetch("https://swapi.co/api/", { method: "GET" } )
// const data = await info.json()
// console.log(data)


// The auth.js
// https://developers.google.com/youtube/v3/code_samples/javascript

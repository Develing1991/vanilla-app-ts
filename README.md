## routes/Movie.js
```javascript
import { Component } from "../core/core";
import movieStore, { getMovieDetails } from "../store/movie";

export default class  Movie extends Component {
  async render(){
    await getMovieDetails(history.state.id)
    console.log(movieStore.state.movie);
    
    const {movie} = movieStore.state
    const bigPoster = movie.Poster.replace('SX300', 'SX700') //고해상도 이미지
    this.el.classList.add('container', 'the-movie')
    this.el.innerHTML = /*html*/`
      <div 
        style="background-image: url(${bigPoster})"  //고해상도 이미지
        class="poster">
      </div>
     ...(중략)
    `
  }
}
```


## components/Search.js (검색어 value="state")
```javascript
import { Component } from "../core/core";
import movieStore, { serachMovies } from "../store/movie";

export default class Search extends Component {
  render(){
    this.el.classList.add('search')
    this.el.innerHTML = /*html*/`
      <input placeholder="Enter th movie title to search!" value="${movieStore.state.searchText}"/>
      <button class="btn btn-primary">
        Search!
      </button>
    `

    ...(중략)
  }
}
```
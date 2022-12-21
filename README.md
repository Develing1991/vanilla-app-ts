## components/MovieListMore.js
```javascript
import { Component } from "../core/core";
import movieStore from "../store/movie";
import MovieItem from "./MovieItem";

export default class MovieList extends Component{
  constructor(){
    super()
    movieStore.subscribe('movies', () => {
      this.render()
    })
    movieStore.subscribe('loading', () => {
      this.render()
    })
    movieStore.subscribe('message', () => {
      this.render()
    })
  }
  render(){
    this.el.classList.add('movie-list')
    this.el.innerHTML = /*html*/`
      ${ movieStore.state.message 
          ? `<div class="message">${movieStore.state.message}</div>`
          : `<div class="movies"></div>`
        }
      <div class="the-loader hide"></div>
    `
    
    const moviesEl = this.el.querySelector('.movies')
    moviesEl?.append(
      ...movieStore.state.movies
        .map( movie => new MovieItem({ movie }).el)
    )

    const loaderEl = this.el.querySelector('.the-loader')
    movieStore.state.loading 
      ? loaderEl.classList.remove('hide') 
      : loaderEl.classList.add('hide') 
  }
}
```

## routes/Movie.js
```javascript
import { Component } from "../core/core";
import movieStore, { getMovieDetails } from "../store/movie";

export default class  Movie extends Component {
  async render(){
    await getMovieDetails(history.state.id)
    console.log(movieStore.state.movie);
  }
}
```

## routes/index.js
```javascript
import { createRouter } from "../core/core";
import Home from  './Home'
import Movie from  './Movie'
export default createRouter([
  { path:'#/', component: Home },
  { path:'#/movie', component: Movie },
])
```

## store/movie.js
```javascript
import { config } from 'dotenv';
config();
import { Store } from "../core/core";

const store = new Store({
  ...(중략)
  movie: {}, // 상세
})

export default store
export const serachMovies = async page => {
  ...(중략)
}

export const getMovieDetails = async id => {
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&i=${id}&plot=full`)
    store.state.movie = await res.json()
  } catch (error) {
    console.error('getMovieDetails error: ', error);
  }
}
```

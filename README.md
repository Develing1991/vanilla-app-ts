[코드펜 loading 예제](https://codepen.io/Develing1991/pen/MWBYraz)

## components/MovieLMovieLististMore.js
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
  }
  render(){
    this.el.classList.add('movie-list')
    this.el.innerHTML = /*html*/`
      <div class="movies"></div>
      <div class="the-loader hide"></div>
    `
    
    const moviesEl = this.el.querySelector('.movies')
    moviesEl.append(
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

## store/movie.js
```javascript
import { config } from 'dotenv';
config();
import { Store } from "../core/core";

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  loading: false,
})

export default store
export const serachMovies = async page => {
  store.state.loading = true
  store.state.page = page
  if( page === 1 ){
    store.state.movies = []
  }
  const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&s=${store.state.searchText}&page=${page}`)
  const { Search, totalResults } = await res.json()
  store.state.movies = [ 
    ...store.state.movies,
    ...Search
  ]
  store.state.pageMax = Math.ceil(Number(totalResults) / 10)
  store.state.loading = false
}
```

## main.css
```css
.the-loader{
  width: 30px;
  height: 30px;
  margin:30px auto;
  border: 4px solid var(--color-primary);
  border-top-color: transparent;
  border-radius: 50%;
  animation: loader 1s infinite linear;
}

.the-loader.hide{
  display: none;
}

@keyframes loader {
  0% { transform:rotate(0deg) }
  100% { transform:rotate(360deg) }
}
```
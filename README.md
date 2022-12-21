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

## components/MovieLMovieLististMore.js
```javascript
import { Component } from "../core/core";
import movieStore, { serachMovies } from "../store/movie";

export default class MovieListMore extends Component{
  constructor(){
    super({
      tagName: 'button'
    })
    movieStore.subscribe('pageMax', ()=> {
      const { page, pageMax} = movieStore.state
      pageMax > page 
        ? this.el.classList.remove('hide') 
        : this.el.classList.add('hide')
      
    })
  }
  render(){
    this.el.classList.add('btn', 'view-more', 'hide')
    this.el.textContent = 'View more...'
    this.el.addEventListener('click', async () => {
      this.el.classList.add('hide')
      await serachMovies(movieStore.state.page + 1)
    })
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
  message: 'Search for the movie title!'
})

export default store
export const serachMovies = async page => {
  store.state.loading = true
  store.state.page = page
  if( page === 1 ){
    store.state.movies = []
    store.state.message = ''
  }
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&s=${store.state.searchText}&page=${page}`)
    const { Search, totalResults, Response, Error } = await res.json()
    if(Response === 'True'){
      store.state.movies = [ 
        ...store.state.movies,
        ...Search
      ]
      store.state.pageMax = Math.ceil(Number(totalResults) / 10)
    }else{
      store.state.message = Error
    }
  } catch (error) {
    console.error('searchMovies error:', error);
  } finally {
    store.state.loading = false
  }
}
```

## main.css
```css
.movie-list .message {
  color: var(--color-primary);
  font-size: 20px;
  text-align: center;
}
```
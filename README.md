## components/MovieListMore.js
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
  movies: []
})

export default store
export const serachMovies = async page => {
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
}
```

## routes/Home.js
```javascript
import Headline from "../components/Headline";
import MovieList from "../components/MovieList";
import MovieListMore from "../components/MovieListMore";
import Search from "../components/Search";
import { Component } from "../core/core";

export default class Home extends Component {
  render(){
    const headline = new Headline().el
    const search = new Search().el
    const movielist = new MovieList().el
    const movielistmore = new MovieListMore().el

    this.el.classList.add('container')
    this.el.append(
      headline,
      search,
      movielist,
      movielistmore
    )
  }
}
```

## main.css
```css
.view-more {
  width: 100%;
  max-width: 300px;
  margin: 20px auto;
  display: block;
}
.view-more.hide{
  display: none;
}
```
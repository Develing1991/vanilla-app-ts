## dotenv 설치
```bash
& npm i dotenv
```
## .gitignore 설정 추가
```
...(중략)
.env
```


[OMDB API KEY 발급 링크](https://www.omdbapi.com/apikey.aspx)

## .evn파일 생성 및 작성
```plaintext
OMDB_KEY=YOUR_KEY
```


## store/movie.js
```javascript
import { config } from 'dotenv';
config();
import { Store } from "../core/core";

const store = new Store({
  searchText: '',
  page: 1,
  movies: []
})

export default store
export const serachMovies = async page => {
  if( page === 1 ){
    store.state.page = 1
    store.state.movies = []
  }
  const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&s=${store.state.searchText}&page=${page}`)
  const { Search } = await res.json()
  store.state.movies = [ 
    ...store.state.movies,
    ...Search
  ]
}
```

## components/MovieList.js
```javascript
import { Component } from "../core/core";
import movieStore from "../store/movie";

export default class MovieList extends Component{
  constructor(){
    super()
    movieStore.subscribe('movies', () => {
      this.render()
    })
  }
  render(){
    this.el.classList.add('movie-list')
    this.el.innerHTML = /*html*/`
      <div class="movies"></div>
    `
    const moviesEl = this.el.querySelector('.movies')
    moviesEl.append(
      movieStore.state.movies
        .map( movie => {
          return movie.Title
        })
    )
  }
}
```

## Home.js
```javascript
import Headline from "../components/Headline";
import MovieList from "../components/MovieList";
import Search from "../components/Search";
import { Component } from "../core/core";

export default class Home extends Component {
  render(){
    const headline = new Headline().el
    const search = new Search().el
    const movielist = new MovieList().el

    this.el.classList.add('container')
    this.el.append(
      headline,
      search,
      movielist
    )
  }
}
```
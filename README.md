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
  const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&s=${store.state.searchText}&page=${page}`)
  const json = await res.json()
  console.log(json);
}
```

## components/Search.js
```javascript
import { Component } from "../core/core";
import movieStore, { serachMovies } from "../store/movie";

export default class Search extends Component {
  render(){
    this.el.classList.add('search')
    this.el.innerHTML = /*html*/`
      <input placeholder="Enter th movie title to search!"/>
      <button class="btn btn-primary">
        Search!
      </button>
    `

    const inputEl = this.el.querySelector('input');
    inputEl.addEventListener('input', () => {
      movieStore.state.searchText = inputEl.value
    })
    inputEl.addEventListener('keydown', (event) => {
      if(event.key === 'Enter' && movieStore.state.searchText.trim()){
        serachMovies(1)
      }
    })
    const buttonEl = this.el.querySelector('button')
    buttonEl.addEventListener('click', () => {
      if(movieStore.state.searchText.trim()){
        serachMovies(1)
      }
    })
  }
}
```

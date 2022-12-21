## components/MovieList.js
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
  }
  render(){
    this.el.classList.add('movie-list')
    this.el.innerHTML = /*html*/`
      <div class="movies"></div>
    `
    
    const moviesEl = this.el.querySelector('.movies')
    moviesEl.append(
      ...movieStore.state.movies
        .map( movie => new MovieItem({ movie }).el)
    )
  }
}
```
## components/MovieList.js
```javascript
import { Component } from "../core/core";

export default class MovieItem extends Component{
  constructor(props){
    super({
      props,
      tageName: 'a'
    })

  }
  render(){
    const { movie } = this.props
    this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`)
    this.el.classList.add('movie')
    this.el.style.backgroundImage = `url(${movie.Poster})`
    this.el.innerHTML = /*html*/`
      <div class="info">
        <div class="year">
          ${movie.Year}
        </div>
        <div class="title">
          ${movie.Title}
        </div>
      </div>
    `
  }
}
```

## main.css
```css
.movie-list {
  padding: 20px;
  border-radius: 4px;
  background-color: var(--color-area);
}

.movie-list .movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.movies .movie {
  --width: 200px;
  width: var(--width);
  height: calc(var(--width) * 3 / 2);
  border-radius: 4px;
  background-color: var(--color-black);
  background-size: cover;
  overflow: hidden;
  position: relative;
}

.movies .movie:hover::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: 6px solid var(--color-primary);
} 

.movies .movie .info {
  width: 100%;
  padding: 14px;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: rgba(14, 17, 27, .3);
  backdrop-filter: blur(10px);
}

.movies .movie .info .year {
  color: var(--color-primary);
}

.movies .movie .info .title {
  color: var(--color-white);
}
```
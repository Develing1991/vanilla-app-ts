[skeleton ui 코드펜](https://codepen.io/Develing1991/pen/RwBNmPM?editors=1100)
## routes/Movie.js
```javascript
import { Component } from "../core/core";
import movieStore, { getMovieDetails } from "../store/movie";

export default class  Movie extends Component {
  async render(){
    // skeleton ui 구조 추가
    this.el.classList.add('container', 'the-movie')
    this.el.innerHTML = /*html*/`
      <div class="poster skeleton"></div>
      <div class="specs">
        <div class="title skeleton"></div>
        <div class="labels skeleton"></div>
        <div class="plot skeleton"></div>
      </div>
      <div class=""></div>
    `
    await getMovieDetails(history.state.id)
    console.log(movieStore.state.movie);
    
    const {movie} = movieStore.state
    const bigPoster = movie.Poster.replace('SX300', 'SX700')
    
    this.el.innerHTML = /*html*/`
      ...(중략)
    `
  }
}
```


## main.css
```css
.skeleton{
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background-color: var(--color-area);
}

.skeleton::after{
  content:"";
  width: 100%;
  height: 100%;
  position:absolute;
  top:0;
  left:0;
  background-image: linear-gradient(270deg,
    rgba(255,255,255, 0),
    rgba(255,255,255, .1),
    rgba(255,255,255, 0)
  );
  transform: translateX(-100%);
  animation: skeleton-loader 2s infinite;
}

@keyframes skeleton-loader {
  0% { transform: translate(-100%) }
  100% { transform: translate(100%) }
}

...

.the-movie .title.skeleton {
  height: 70px;
}

.the-movie .labels.skeleton {
  height: 30px;
}
.the-movie .plot.skeleton {
  width: 80%;
  height: 400px;
}

...
```
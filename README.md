## routes/index.js
```javascript
import { createRouter } from "../core/core";
import Home from  './Home'
import Movie from  './Movie'
import About from  './About'
import NotFound from './NotFound'

export default createRouter([
  { path:'#/', component: Home },
  { path:'#/movie', component: Movie },
  { path:'#/about', component: About },
  { path:'.*', component: NotFound },
  //{ path:'.{0,}', component: NotFound },
])
```

## routes/NotFound.js
```javascript
import { Component } from "../core/core";

export default class NotFound extends Component{
  render(){
    this.el.classList.add('container', 'not-found')
    this.el.innerHTML = /*html*/`
      <h1>
        Sorry.. <br>
        Page Not Found.
      </h1>
    `
  }
}
```

## store/about.js
```javascript
import { Store } from "../core/core";

export default new Store({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: 'Develing / LeeSuhan',
  email: 'dddd@naver.com',
  blog: 'https://velog.io/@completed1991',
  github: 'https://github.com/Develing1991',
  repository: 'https://github.com/Develing1991/vanilla-app'
})
```

## main.css
```css
.not-found h1 {
  font-size: 70px;
  font-weight: 700;
  color: var(--color-white-10);
  text-align: center;
}
```
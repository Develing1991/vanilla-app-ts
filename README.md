## components/TheFooter.js
```javascript
import { Component } from "../core/core";
import aboutStore from "../store/about";

export default class TheFooter extends Component {
  constructor(){
    super({
      tagName:'footer'
    })
  }
  render(){
    const { github, repository } = aboutStore.state;
    this.el.innerHTML = /*html*/`
      <div>
        <a href="${repository}">
          Github Repository
        </a>
      </div>
      <div>
        <a href="${github}">
          ${new Date().getFullYear()}
          Develing1991
        </a>
      </div>

    `
  }
}
```

## routes/About.js
```javascript
import { Component } from "../core/core";
import aboutStore from "../store/about";

export default class About extends Component{
  render(){
    const { photo, name, email, github, blog} = aboutStore.state
    this.el.classList.add('container', 'about')
    this.el.innerHTML = /*html*/`
      <div style="background-image:url(${photo})"class="photo"></div>
      <p class="name">${name}</p>
      <p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}" 
          target="_black">${email}</a>
      </p>
      <p><a href="${github}" target="_black">GitHub</a></p>
      <p><a href="${blog}" target="_black">Blog</a></p>
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

## App.js
```javascript
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import { Component } from "./core/core";

export default class App extends Component {
  render(){
    const theHeader = new TheHeader().el
    const theFooter = new TheFooter().el
    const routerView = document.createElement('router-view')
    this.el.append( 
      theHeader,
      routerView,
      theFooter
    )
  }
}
```


## main.css
```css
.about .photo{
  width: 230px;
  height: 230px;
  margin: 0 auto 20px;
  border-radius: 20px;
  background-size: cover;
}
.about .name{
  font-size: 40px;
  font-family: "Oswald", "sans-serif";
  margin-bottom: 20px;
}
.about p{
  line-height: 1.5;
  text-align: center;
  margin-bottom: 4px;
}
.about a{
  color: var(--color-primary);
  text-decoration: none;
}
.about a:hover{
  text-decoration: underline;
}
```
## components/TheFooter.js
```javascript
import { Component } from "../core/core";

export default class TheFooter extends Component {
  constructor(){
    super({
      tagName:'footer'
    })
  }
  render(){
    this.el.innerHTML = /*html*/`
      <div>
        <a href="https://github.com/Develing1991/vanilla-app">
          Github Repository
        </a>
      </div>
      <div>
        <a href="https://github.com/Develing1991/">
          ${new Date().getFullYear()}
          Develing1991
        </a>
      </div>

    `
  }
}
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
footer {
  padding: 40px 40px 60px;
  text-align: center;
}

footer a {
  color: var(--color-white-20);
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}
```
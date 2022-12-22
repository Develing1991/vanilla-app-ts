## components/TheHeader.js
```javascript
import { Component } from "../core/core";
export default class TheHeader extends Component{
  constructor(){
    super({
      tagName: 'header',
      state: {
        menus: [
          { name: 'Search', href: '#/' },
          { name: 'Movie', href: '#/movie?id=tt4520988' },
          { name: 'About', href: '#/about' },
        ]
      }
    })
  }
  
  render(){
    this.el.innerHTML = /*html*/`
      <a href="#/" class="logo">
        <span>OMDbAPI</span>.COM
      </a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
            return /*html*/`
              <li>
                <a href="${menu.href}">${menu.name}</a>
              </li>
            `
          }).join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://heropy.blog/css/images/logo.png" alt="User">
      </a>
    `
  }
}
```

## App.js
```javascript
import TheHeader from "./components/TheHeader";
import { Component } from "./core/core";

export default class App extends Component {
  render(){
    const theHeader = new TheHeader().el
    const routerView = document.createElement('router-view')
    this.el.append( 
      theHeader,
      routerView 
    )
  }
}
```


## main.css
```css
header {
  padding: 20px 40px;
  background-color: rgba(14, 17, 27, .9);
  position: sticky;
  top: 0;
  z-index: 9;
  display: flex;
  align-items: flex-end;
  gap: 40px;
}

header .logo{
  font-size: 20px;
  font-family: "Oswald" , "sans-serif";
  color: var(--color-white-50);
  text-decoration: none;
}
header .logo span{
  color: var(--color-primary);
}
header nav ul{
  display: flex;
  gap: 14px;
}
header nav ul li a{
  font-size: 14px;
  font-weight: 700;
  color: var(--color-white-50);
  text-decoration: none;
}
header nav ul li a:active{
  color: var(--color-primary);
}
header .user{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-area);
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 40px;
  margin: auto;
  transition: .3s;
}
header .user:hover{
  transform: scale(1.2);
}
header .user img{
  width: 100%;
}
```
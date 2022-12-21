## routes/Home.js
```javascript
import Headline from "../components/Headline";
import Search from "../components/Search"; // 추가
import { Component } from "../core/core";

export default class Home extends Component {
  render(){
    const headline = new Headline().el
    const search = new Search().el // 추가

    this.el.classList.add('container')
    this.el.append(
      headline,
      search // 추가
    )
  }
}
```

## components/Search.js
```javascript
import { Component } from "../core/core";

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
      //
    })
    inputEl.addEventListener('keydown', (event) => {
      if(event.key === 'Enter'){

      }
    })
    const buttonEl = this.el.querySelector('button')
    buttonEl.addEventListener('click', () => {
      //
    })
  }
}
```

## main.css
```css
html {
  --color-black: #0E111B;
  --color-white: #FFF;
  --color-white-50: rgba(255, 255, 255, .5);
  --color-white-30: rgba(255, 255, 255, .3);
  --color-white-20: rgba(255, 255, 255, .2);
  --color-white-10: rgba(255, 255, 255, .1);
  --color-white-5: rgba(255, 255, 255, .0.5);
  --color-primary: #fdc000;
  --color-hover: #f86a05;
  --color-area: #1c212e;
}

...

.btn {
  height: 50px;
  padding: 0 20px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-white);
  background-color: var(--color-area);
  cursor: pointer;
  transition: .3s;
}

.btn:hover{
  background-color: var(--color-hover);
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-black)
}

.btn-primary:hover {
  background-color: var(--color-hover);
  color: var(--color-white)
}

...

.search {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.search input{
  flex-grow: 1;
  height: 50px;
  padding: 0 20px;
  border: none;
  outline: none;
  font-size: 14px;
  color: var(--color-white);
  background-color: var(--color-area);
}

.search input::placeholder {
  color: var(--color-white-30);
}

.search .btn {
  flex-grow: 1;
  max-width: 150px;
}
```

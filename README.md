## routes/Home.js
```javascript
import { Component } from "../core/core";

export default class Home extends Component {
  render(){
    this.el.innerHTML = /*html*/`
      <h1>Home</h1>
    `
  }
}
```

## routes/index.js
```javascript
import { createRouter } from "../core/core";
import Home from  './Home'
export default createRouter([
  { path:'#/', component: Home },
])
```

## App.js
```javascript
import { Component } from "./core/core";

export default class App extends Component {
  render(){
    const routerView = document.createElement('router-view')
    this.el.append( routerView )
  }
}
```

## main.js
```javascript
import App from "./App";
import router from './routes/index'

const root = document.querySelector('#root')
root.append( new App().el)
router()
```
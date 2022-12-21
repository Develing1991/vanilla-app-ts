## routes/Home.js
```javascript
import Headline from "../components/Headline";
import { Component } from "../core/core";

export default class Home extends Component {
  render(){
    const headline = new Headline().el
    this.el.classList.add('container')
    this.el.append(
      headline
    )
  }
}
```

## components/Headline.js
```javascript
import { Component } from "../core/core";

export default class Headline extends Component {
  render(){
    this.el.classList.add('headline')
    this.el.innerHTML = /*html*/`
      <h1>
        <span>OBDb API</span><br>
        THE OPEN<br>
        MOVIE DATABASE
      </h1>
      <p>
        The OMDb API is a RESTful web service to obtain movie information, 
        all content and images on the site are contributed and maintained by our users.
        If you find this service useful, please consider making a one-time donation or become a patron.
      </p>
    `
  }
}
```

## main.css
```css
.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 0;
}

.headline {
  margin-bottom: 40px;
}

.headline h1 {
  font-family: 'Oswald', sans-serif;
  font-size: 80px;
  line-height: 1;
  margin-bottom: 40px;
}

.headline h1 span {
  color: var(--color-primary);
}

.headline p {
  color: var(--color-white-30);
}
```

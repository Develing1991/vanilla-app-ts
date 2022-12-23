import { Component } from "../core/core";
interface State {
  [key: string]: unknown
  menus: {
    name: string
    href: string
  }[]
}
export default class TheHeader extends Component{
  // public state = {} as State // 이렇게 단언하면 다음 렌더시 빈 객체가 되어버리니까..
  public state!: State // 할당 단언으로 ! 해줌 타입핑은 해줘야하고 ({}로 초기화는 안하게 되니까)
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
    window.addEventListener('popstate', () => {
      this.render()
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
            const href = menu.href.split('?')[0]
            const hash = location.hash.split('?')[0]
            const isActive = href === hash
            return /* html */ `
              <li>
                <a
                  class="${isActive ? 'active' : ''}"
                  href="${menu.href}">
                  ${menu.name}
                </a>
              </li>`
          }).join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://heropy.blog/css/images/logo.png" alt="User">
      </a>
    `
  }
}
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
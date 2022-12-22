import { Component } from "../core/core";
import movieStore, { serachMovies } from "../store/movie";

export default class Search extends Component {
  render(){
    this.el.classList.add('search')
    this.el.innerHTML = /*html*/`
      <input placeholder="Enter th movie title to search!" value="${movieStore.state.searchText}"/>
      <button class="btn btn-primary">
        Search!
      </button>
    `

    const inputEl = this.el.querySelector('input');
    inputEl.addEventListener('input', () => {
      movieStore.state.searchText = inputEl.value
    })
    inputEl.addEventListener('keydown', (event) => {
      if(event.key === 'Enter' && movieStore.state.searchText.trim()){
        serachMovies(1)
      }
    })
    const buttonEl = this.el.querySelector('button')
    buttonEl.addEventListener('click', () => {
      if(movieStore.state.searchText.trim()){
        serachMovies(1)
      }
    })
  }
}
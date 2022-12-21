import { Component } from "../core/core";
import movieStore, { serachMovies } from "../store/movie";

export default class MovieListMore extends Component{
  constructor(){
    super({
      tagName: 'button'
    })
    movieStore.subscribe('pageMax', ()=> {
      const { page, pageMax} = movieStore.state
      pageMax > page 
        ? this.el.classList.remove('hide') 
        : this.el.classList.add('hide')
      
    })
  }
  render(){
    this.el.classList.add('btn', 'view-more', 'hide')
    this.el.textContent = 'View more...'
    this.el.addEventListener('click', async () => {
      await serachMovies(movieStore.state.page + 1)
    })
  }
}
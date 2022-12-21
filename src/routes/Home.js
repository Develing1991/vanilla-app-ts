import Headline from "../components/Headline";
import MovieList from "../components/MovieList";
import MovieListMore from "../components/MovieListMore";
import Search from "../components/Search";
import { Component } from "../core/core";

export default class Home extends Component {
  render(){
    const headline = new Headline().el
    const search = new Search().el
    const movielist = new MovieList().el
    const movielistmore = new MovieListMore().el

    this.el.classList.add('container')
    this.el.append(
      headline,
      search,
      movielist,
      movielistmore
    )
  }
}
import { Component } from "../core/core";
import movieStore, { getMovieDetails } from "../store/movie";

export default class  Movie extends Component {
  async render(){
    await getMovieDetails(history.state.id)
    console.log(movieStore.state.movie);
  }
}
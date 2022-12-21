import { config } from 'dotenv';
config();
import { Store } from "../core/core";

const store = new Store({
  searchText: '',
  page: 1,
  movies: []
})

export default store
export const serachMovies = async page => {
  if( page === 1 ){
    store.state.page = 1
    store.state.movies = []
  }
  const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&s=${store.state.searchText}&page=${page}`)
  const { Search } = await res.json()
  store.state.movies = [ 
    ...store.state.movies,
    ...Search
  ]
}
import { Store } from "../core/core";

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {}, // 상세
  loading: false,
  message: 'Search for the movie title!'
})

export default store
export const serachMovies = async page => {
  store.state.loading = true
  store.state.page = page
  if( page === 1 ){
    store.state.movies = []
    store.state.message = ''
  }
  try {
    // 서버리스 함수로 대체
    const res = await fetch(`/api/movie`, {
      method: 'POST',
      body: JSON.stringify({
        title: store.state.searchText,
        page
      })
    })
    const { Search, totalResults, Response, Error } = await res.json()
    if(Response === 'True'){
      store.state.movies = [ 
        ...store.state.movies,
        ...Search
      ]
      store.state.pageMax = Math.ceil(Number(totalResults) / 10)
    }else{
      store.state.message = Error
    }
  } catch (error) {
    console.error('searchMovies error:', error);
  } finally {
    store.state.loading = false
  }
}

export const getMovieDetails = async id => {
  try {
    // 서버리스 함수로 대체
    const res = await fetch(`/api/movie`, {
      method: 'POST',
      body: JSON.stringify({
        id,
      })
    })
    store.state.movie = await res.json()
  } catch (error) {
    console.error('getMovieDetails error: ', error);
  }
}
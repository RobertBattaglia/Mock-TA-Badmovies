import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import Movies from './components/Movies.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favorites: [],
      showFaves: false
    };
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
  }

  getFavorites() {
    axios.get('/movie').then(({ data }) => {
      this.setState({ favorites: data });
    });
  }

  getMovies(genreId) {
    axios.get(`/search/${genreId}`).then(({ data }) => {
      this.setState({ movies: data });
    });
  }

  saveMovie(m) {
    var movie = {
      id: m.id,
      title: m.title,
      poster_path: m.poster_path,
      release_date: m.release_date,
      popularity: m.popularity
    };
    axios
      .post('/movie', { movie })
      .then(({ data }) => {
        this.setState({ favorites: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteMovie(id) {
    // same as above but do something diff
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  componentDidMount() {
    this.getFavorites();
  }
  render() {
    return (
      <div className="app">
        <header className="navbar">
          <h1>Bad Movies</h1>
        </header>

        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            getMovies={this.getMovies}
          />
          <Movies
            movies={
              this.state.showFaves ? this.state.favorites : this.state.movies
            }
            saveMovie={this.saveMovie}
            showFaves={this.state.showFaves}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

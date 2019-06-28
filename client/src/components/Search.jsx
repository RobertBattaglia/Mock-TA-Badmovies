import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      selectedGenre: null
    };
    this.handleChangeFavorite = this.handleChangeFavorite.bind(this);
    this.handleMovieSearch = this.handleMovieSearch.bind(this);
  }

  getGenres() {
    axios.get('/genres').then(genres => {
      genres = genres.data.genres;
      this.setState({ genres }, () => {
        this.setState({ selectedGenre: this.state.genres[0].id });
      });
    });
  }

  handleChangeFavorite(e) {
    this.setState({ selectedGenre: e.target.value });
  }

  handleMovieSearch() {
    this.props.getMovies(this.state.selectedGenre.toString());
  }

  componentDidMount() {
    this.getGenres();
  }

  render() {
    return (
      <div className="search">
        <button
          onClick={() => {
            this.props.swapFavorites();
          }}
        >
          {this.props.showFaves ? 'Show Results' : 'Show Favorites'}
        </button>
        <br />
        <br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select onChange={this.handleChangeFavorite}>
          {this.state.genres.map(genre => {
            return (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            );
          })}
        </select>
        <br />
        <br />

        <button onClick={this.handleMovieSearch}>Search</button>
      </div>
    );
  }
}

export default Search;

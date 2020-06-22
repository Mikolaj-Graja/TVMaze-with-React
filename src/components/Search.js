import React from 'react';
import { Button, TextField } from '@material-ui/core';
class Search extends React.Component {
  state = {
    tvName: '',
    tvList: [],
  };

  handleInput = (event) => {
    this.setState({ tvName: event.target.value });
  };
  handleSubmit = (e) => {
    fetch(`http://api.tvmaze.com/search/shows?q=${this.state.tvName}`)
      .then((respone) => respone.json())
      .then((data) => {
        this.setState({ tvList: data });
        this.props.updateTVList(this.state.tvList);
      })
      .catch((err) => console.log(`fetch error ${err}`));
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <TextField
          id='outlined-basic'
          label='TV Show'
          variant='outlined'
          onChange={this.handleInput}
        />
        <Button variant='contained' color='primary' onClick={this.handleSubmit}>
          Search
        </Button>
      </div>
    );
  }
}

export default Search;

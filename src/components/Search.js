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
    fetch(`https://api.tvmaze.com/search/shows?q=${this.state.tvName}`)
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
      <form action='submit' onSubmit={this.handleSubmit}>
        <TextField
          id='outlined-basic'
          label='TV Show'
          variant='outlined'
          onChange={this.handleInput}
          value={this.state.tvName}
        />
        <div className='btn-container'>
          <Button
            className='btn'
            variant='outlined'
            color='primary'
            onClick={this.handleSubmit}>
            Search
          </Button>
        </div>
      </form>
    );
  }
}

export default Search;

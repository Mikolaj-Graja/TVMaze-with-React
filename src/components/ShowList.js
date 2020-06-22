import React from 'react';
import Search from './Search';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@material-ui/core';
class ShowList extends React.Component {
  state = {
    tvList: [],
  };
  updateTVList = (newList) => {
    this.setState({ tvList: newList });
  };
  render() {
    return (
      <div>
        <Search updateTVList={this.updateTVList} />
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Score</TableCell>
                <TableCell align='right'>Title</TableCell>
                <TableCell align='right'>Genres</TableCell>
                <TableCell align='right'>Date of premiere</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.tvList.map((series) => (
                <TableRow key={series.show.id}>
                  <TableCell component='th' scope='row'>
                    {series.score}
                  </TableCell>
                  <TableCell align='right'>{series.show.name}</TableCell>
                  <TableCell align='right'>
                    {series.show.genres.map((genre) => `${genre},`)}
                  </TableCell>
                  <TableCell align='right'>{series.show.premiered}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default ShowList;

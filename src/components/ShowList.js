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
  Button,
  ButtonGroup,
} from '@material-ui/core';

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
class ShowList extends React.Component {
  state = {
    tvList: [],
    filteredSeries: [],
  };
  updateTVList = (newList) => {
    this.setState({ tvList: newList, filteredSeries: newList });
  };

  filterDay = (day) => {
    console.log(day);

    const filtered = this.state.tvList.filter((el) => {
      return !el.show.schedule.days.indexOf(day);
    });
    console.log(filtered);

    this.setState({
      filteredSeries: [...filtered],
    });
  };

  render() {
    return (
      <div>
        <Search updateTVList={this.updateTVList} />
        <ButtonGroup
          variant='contained'
          color='primary'
          aria-label='contained primary button group'>
          {weekDays.map((day) => (
            <Button key={day} onClick={() => this.filterDay(day)}>
              {day}
            </Button>
          ))}
        </ButtonGroup>

        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Score</TableCell>
                <TableCell align='right'>Title</TableCell>
                <TableCell align='right'>Genres</TableCell>
                <TableCell align='right'>Date of premiere</TableCell>
                <TableCell align='right'>Schedule - days</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.filteredSeries.map((series) => (
                <TableRow key={series.show.id}>
                  <TableCell component='th' scope='row'>
                    <a href='/moreInfo'>{series.score}</a>
                  </TableCell>
                  <TableCell align='right'>
                    <a href='/moreInfo'>{series.show.name}</a>
                  </TableCell>
                  <TableCell align='right'>
                    <a href='/moreInfo'>
                      {series.show.genres.map((genre) => `${genre}, `)}
                    </a>
                  </TableCell>
                  <TableCell align='right'>
                    <a href='/moreInfo'>{series.show.premiered}</a>
                  </TableCell>
                  <TableCell align='right'>
                    <a href='/moreInfo'>
                      {series.show.schedule.days.map((day) => `${day}, `)}
                    </a>
                  </TableCell>
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

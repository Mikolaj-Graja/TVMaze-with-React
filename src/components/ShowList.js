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
  };
  updateTVList = (newList) => {
    this.setState({ tvList: newList });
  };
  handleDay = (day) => {
    console.log(day);
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
            <Button key={day} onClick={() => this.handleDay(day)}>
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
              {this.state.tvList.map((series) => (
                <TableRow key={series.show.id}>
                  <TableCell component='th' scope='row'>
                    {series.score}
                  </TableCell>
                  <TableCell align='right'>{series.show.name}</TableCell>
                  <TableCell align='right'>
                    {series.show.genres.map((genre) => `${genre}, `)}
                  </TableCell>
                  <TableCell align='right'>{series.show.premiered}</TableCell>
                  <TableCell align='right'>
                    {series.show.schedule.days.map((day) => `${day}, `)}
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

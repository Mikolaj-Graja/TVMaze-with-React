import React from 'react';
import Search from './Search';
import MoreDetails from './MoreDetails';
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
    infoActive: false,
    series: {},
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
  moreInfo = (series) => {
    this.setState({ infoActive: true, series: series });
  };
  closeDetails = () => {
    this.setState({ infoActive: false });
  };

  render() {
    return (
      <div>
        <MoreDetails
          infoActive={this.state.infoActive}
          series={this.state.series}
          handleClosing={this.closeDetails}
        />
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
                <TableRow
                  className='pointer'
                  key={series.show.id}
                  onClick={() => this.moreInfo(series)}>
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

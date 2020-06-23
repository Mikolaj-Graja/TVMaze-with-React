import React from 'react';

class MoreDetails extends React.Component {
  state = {};
  render() {
    if (this.props.infoActive) {
      return (
        <div className='modal'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h2 className='modal-title'>{this.props.series.show.name}</h2>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
                onClick={this.props.handleClosing}>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <div className='img-container'>
                <img
                  className='poster'
                  src={this.props.series.show.image.medium}
                  alt='seriesPoster`'
                />
              </div>
              <div className='info'>
                <ul>
                  <li>
                    <h4>Overview</h4>
                    <p>{this.props.series.show.summary}</p>
                  </li>
                  <li>
                    <h4>Genres</h4>
                    <p>
                      {this.props.series.show.genres.map((el) => {
                        return <span key={el}>{el} </span>;
                      })}{' '}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='modal-footer'></div>
          </div>
        </div>
      );
    } else return <div></div>;
    //   console.log(props);
    //   return <div>cos</div>;
  }
}

export default MoreDetails;

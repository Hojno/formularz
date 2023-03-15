import React from 'react';



class FormReviewOne extends React.Component {
    render() {
      return (
        <div className="FormReviewOne">
          <div className="FormReviewTitle">
            {this.props.name}
          </div>
          <div className="FormReviewOneDatas"></div>
        </div>
      );
    }
  }

export default FormReviewOne
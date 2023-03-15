import React from 'react';




class FormReviewTwo extends React.Component {
    render() {
      return (
        <div className="FormReviewTwo">
        <div className="FormReviewData">
            <div className="FormReviewTitle">
                {this.props.nameOne}
            </div>
            <div className="FormReviewTwoDatas"></div>
          </div>
          <div className="FormReviewData">
            <div className="FormReviewTitle">
                {this.props.nameTwo}
            </div>
            <div className="FormReviewTwoDatas"></div>
          </div>
        </div>
      );
    }
  }

export default FormReviewTwo
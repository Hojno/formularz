import React from 'react';

import { TextField } from '@mui/material';


class FormInput extends React.Component {
    render() {
      return (
        <div className="FormInput">
          <TextField className="TextField" label={this.props.label} variant={this.props.varian} />

        </div>
      );
    }
  }

export default FormInput
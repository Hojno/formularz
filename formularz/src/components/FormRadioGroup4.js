import React from 'react';

import Radio from '@mui/material/Radio';
import { RadioGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

import FormLabel from '@mui/material/FormLabel';

class FormRadioGroup4 extends React.Component {
    render() {
      return (
        <div className="FormRadioGroup3">
              <FormLabel id="demo-row-radio-buttons-group-label">{this.props.name}</FormLabel>
                <RadioGroup className="RadioGroup"
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="radio-buttons-group"
                  
                >
                  <FormControlLabel value={this.props.valueOne} control={<Radio />} label={this.props.labelOne} />
                  <FormControlLabel value={this.props.valueTwo} control={<Radio />} label={this.props.labelTwo} />
                  <FormControlLabel value={this.props.valueThree} control={<Radio />} label={this.props.labelThree} />
                  <FormControlLabel value={this.props.valueFour} control={<Radio />} label={this.props.labelFour} />
                </RadioGroup>
        </div>
      );
    }
  }

export default FormRadioGroup4
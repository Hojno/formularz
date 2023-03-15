import React from 'react';

import Radio from '@mui/material/Radio';
import { RadioGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

import FormLabel from '@mui/material/FormLabel';

class FormRadioGroup3 extends React.Component {
    render() {
      return (
        <div className="FormRadioGroup3">
              <FormLabel id="demo-row-radio-buttons-group-label">{this.props.name}</FormLabel>
                <RadioGroup className="RadioGroup"
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  defaultValue="😭"
                  name="radio-buttons-group"
                  
                >
                  <FormControlLabel value={this.props.valueOne} control={<Radio />} label={this.props.labelOne} />
                  <FormControlLabel value={this.props.valueTwo} control={<Radio />} label={this.props.labelTwo} />
                  <FormControlLabel value={this.props.valueThree} control={<Radio />} label={this.props.labelThree} />
                </RadioGroup>
        </div>
      );
    }
  }

export default FormRadioGroup3
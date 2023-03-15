import React from 'react';

import { TextField } from '@mui/material';


class FormInputMultiline extends React.Component {
    render() {
      return (
        <div className="FormInputMultiple">
          <TextField
        className="FormInputMultipleField"
          label="Put the content of your abstract here"
          multiline
          rows={25}

          maxRows={4}
            />

        </div>
      );
    }
  }

export default FormInputMultiline
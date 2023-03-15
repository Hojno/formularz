import React from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#6699CC',
        darker: '#6699CC',
      },
   
    },
  });

class FormButton extends React.Component {
    icon() {
        if(this.props.icon === "add") {
            return <AddIcon/>
        } else if(this.props.icon === "remove") {
            return <RemoveIcon/>
        } else {
            return;
        }
    }
    render() {
      return (
        <div  className="button">
            <Stack direction="row" spacing={2}>
            <ThemeProvider theme={theme}>
                <Button variant="contained" size="large" color="primary" startIcon={this.icon()}>
                    {this.props.name} 
                </Button>
            </ThemeProvider>
            </Stack>
        </div>
      );
    }
  }

export default FormButton
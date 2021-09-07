import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const CoaForm = () => {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-textarea"
            label="BBD"
            placeholder="BBD"
            multiline
            variant="outlined"
          />

          <TextField
            id="outlined-textarea"
            label="Lot"
            placeholder="Lot"
            multiline
            variant="outlined"
          />
        </div>
      </form>
    </div>
  );
};

export default CoaForm;

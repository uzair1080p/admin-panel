import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Active Users</Title>
      <Typography component="p" variant="h4">
        3024
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on July 16, 2020
      </Typography>

    </React.Fragment>
  );
}
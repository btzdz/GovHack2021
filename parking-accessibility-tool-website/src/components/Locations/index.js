import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import React from 'react';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2em 1em 0em 1em',
    display: 'flex',
    justifyContent: 'center',
  },
  tab: {
    width: '20em'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  reportContainer:{
    display: 'flex'
  },
  map: {
      padding: '2em 1em 2em 2em',
      width: '100%',
  },
  report: {
    padding: '2em 2em 2em 1em',
    width: '100%'
  }
}));

function Locations() {
    const classes = useStyles();
    const history = useHistory();
    const [i, setI] = useState(0);
    const max = 4;


    const handleKeyUp = (e) => {
      if (e.key === "Enter") {
          history.push('/locations/chatswood')
      }
    }
    const goNext = () => {
        setI((i+1)%max);
    }

  return (
    <Container size="lg" onClick={goNext}>
    <div className={classes.root}>
        <div className={classes.tab}>
                <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>  
                <InputBase
                placeholder="Search by location..."
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onKeyUp={handleKeyUp}
                />
            </div>
        </div>
    </div>
    <div className={classes.reportContainer}>
        <div className={classes.map}>
        <img src={`1.${i}.png`} alt="mapperino" width="100%" height="auto"/>
        </div>
    </div>
</Container>
  );
}

export default Locations;

/* eslint-disable no-use-before-define */
import React ,{useState} from 'react';
//import PrimarySelectBox from '../ui/PrimarySelectBox'
import SearchResultContainer from './SearchResultContainer'
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Paper } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme=>({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },

  },
  inputRoot: {
    color: "purple",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#b0c4de"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#add8e6"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#48d1cc"
    }
  },
  search: {
    position: 'relative',
    display:'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  root:{
    display:'flex', 
    paddingLeft: 9, paddingRight: 9, paddingTop: 3, paddingBottom: 3
  }
}));

export default function AriaSelectBox() {
  const classes = useStyles();
  const [inputText, setInputText] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };


  return (
    <div className={classes.root}>
      <Paper style={{width:'100%'}}>
        <div style={{display:'flex', flexGrow: 1, width: '100%'}}>
          <IconButton disabled>
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={inputText}
            onChange={onChange}
            className={classes.inputRoot}
            style={{flexGrow: 1, width:'100%'}}
          />
          {inputText.length > 0 ? (
            <IconButton onClick={()=>setInputText("")}>
              <ClearIcon />
            </IconButton>
            ) : (
              <></>
            )
          }
        </div>
        <div style={{maxHeight: 300, overflow:'auto', }}>
          <SearchResultContainer searchPlace={inputText} />
        </div>
      </Paper>
      
      
    </div>
  );
}
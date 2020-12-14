/* eslint-disable no-use-before-define */
import React ,{useState} from 'react';
//import PrimarySelectBox from '../ui/PrimarySelectBox'
import SearchResultContainer from './SearchResultContainer'
import TextField from '@material-ui/core/TextField';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

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
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  root:{
    display: 'flex',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:24,
    paddingBottom: 24,
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
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={onChange}
        />
      </div>
      <SearchResultContainer searchPlace={inputText} />
    </div>
  );
}
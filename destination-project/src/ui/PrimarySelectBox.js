/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
  root:{
    display: 'flex',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:24,
    paddingBottom: 24,
  }
}));

const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  { code: 'AE', label: 'United Arab Emirates', phone: '971' },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'AM', label: 'Armenia', phone: '374' },
  { code: 'AO', label: 'Angola', phone: '244' },
  { code: 'AQ', label: 'Antarctica', phone: '672' },
  { code: 'AR', label: 'Argentina', phone: '54' },
]

export default function PrimarySelectBox() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Autocomplete  className={classes.inputRoot}
      id="country-select-demo"
      style={{ width: 800 }}
      options={countries}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(option) => (
        /**         <React.Fragment>
          <span>{countryToFlag(option.code)}</span>
          {option.label} ({option.code}) +{option.phone}
        </React.Fragment>*/
        <React.Fragment>
          <LocationOnIcon/>
          {option.label}
        </React.Fragment>
        
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="happy choice"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
    </div>
  );
}
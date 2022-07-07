import React from 'react';
export const themes = {
  dark:{
    color:'white',
    backgroundColor:'black',
  },
  light:{
    color:'black',
    backgroundColor:'white',
  }
};

const ThemeContext = React.createContext(themes.dark);
export default ThemeContext;
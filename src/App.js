import './App.css';
import Layout from './Components/Layout/layout';
import ThemeContext, {themes} from './Components/Context/themeContext';
import { useState } from "react";
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';

function App() {
  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () =>{ theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark) }
  return (
    <ThemeContext.Provider value={theme}>
      <Header />
      <Layout />
      <button onClick={toggleTheme} style={{marginLeft:'50%', marginRight:'50%', width:'auto'}}>change theme</button>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;

import React, {useEffect} from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider} from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './Home';
import Header from './ui/Header';
import Elite from './Elite';
import Predator from './Predator';
import Titan from './Titan';
import Apex from './Apex';
import EliteConfigurator from './EliteConfigurator'
import TitanConfigurator from './TitanConfigurator'
import ApexConfigurator from './ApexConfigurator'

 function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);
  const theme = React.useMemo(() =>
      createTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
        },
        typography: {
          fontSize: 18,
          fontFamily: 'Poppins'
        },
      }), [darkMode]
  );
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

return (
<ThemeProvider theme={theme}> 
<BrowserRouter >
    <CssBaseline/>
  <Header id="back-to-top-anchor">
  </Header>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Elite" component={Elite}/>
    <Route exact path="/Predator" component={Predator}/>
    <Route exact path="/Titan" component={Titan}/>
    <Route exact path="/Apex" component={Apex}/>
    <Route exact path="/EliteConfigurator" component={EliteConfigurator}/>
    <Route exact path="/TitanConfigurator" component={TitanConfigurator}/>
    <Route exact path="/ApexConfigurator" component={ApexConfigurator}/>
  </Switch>
</BrowserRouter>
</ThemeProvider>
  );
}
export default App;



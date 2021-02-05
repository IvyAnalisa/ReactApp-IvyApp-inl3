import React from 'react';

import {Routing} from './routes/Routing'
import {NavigationBar} from'./components/navigationBar/NavigationBar'
import {UserProvider} from './shared/global/provider/UserProvider'
import './shared/global/css/Global.css'


function App () {
  return (
  <UserProvider>
  <Routing>
     <NavigationBar/>
     
   </Routing>
   </UserProvider>
  );
}

export default App;

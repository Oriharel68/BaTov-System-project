import React from 'react'
// import Main from './Main page/Main'
import RouterServer from './Router/RouterServer'
import 'normalize.css';

import { initializeApp } from 'firebase/app';
import firebaseConfig from './FireBase/auth';

initializeApp(firebaseConfig);

function App() {
  return (
    <div>
      <RouterServer/>
      {/* <Main/> */}
      {/* need to conatin the main router component that connect all the components */}
    </div>
  )
}

export default App
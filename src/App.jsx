
import React, {useContext, useEffect} from 'react';
import Routing from './Pages/Router.jsx';
import { Type } from './Utility/action.type.js';
import { DataContext } from './Components/DataProvider/DataProvider.jsx';
import { auth } from './Utility/firebase.js';

function App() {



  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });
  }, []);








  return (
    <Routing/>
   
  );
}

export default App;
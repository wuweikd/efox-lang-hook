import React from 'react';
import Test from './Test'
import useEfoxLang, { EfoxContext } from './useEfoxLang/index.js'

function App() {
  const pathName =  'm_girgir/voice_friend_gir'
  const [state, dispatch] = useEfoxLang(pathName)

  return (
    <EfoxContext.Provider value={{state, dispatch}}>
      <Test />
    </EfoxContext.Provider>
  );
}

export default App;

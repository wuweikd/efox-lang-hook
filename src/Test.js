import React, {useContext} from 'react';
import { EfoxContext } from './useEfoxLang/index.js'

function Test(props) {
  const message = useContext(EfoxContext);
  return (
    <div>
      {message.state.myLikes}
    </div>
  );
}

export default Test

import React, {useContext} from 'react';
import useEfoxLang, { EfoxContext } from './i18n/useEfoxLang'

function Test(props) {
  const message = useContext(EfoxContext);
  return (
    <div>
      {message.state.myLikes}
    </div>
  );
}

export default Test

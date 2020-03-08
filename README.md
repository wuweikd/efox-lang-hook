# efoxlang

## 介绍：
hook 版本多语言
## npm下载：
xxx

## 用法

```js
// App.js
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


```

```js
// Test.js
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



```
未完待续...

测试自动化构建1

import React, {useReducer, useEffect} from 'react'
import { getMessages } from './http.js'

function Index(pathName) {
  const [state, dispatch] = useReducer(reducer, {})

  function reducer(state, reducer) {
    console.log('state, reducer--->', state, reducer)
    return reducer
  }

  useEffect(() => {
    async function getData() {
      let initState= await getMessages(pathName)
      console.log('initState---->', initState)
      dispatch(initState)
    }
    getData()
  }, [pathName])
  return [state, dispatch]
}

const EfoxContext = React.createContext(null)
export { EfoxContext }
export default Index

import { useState } from 'react'
import { Provider } from 'react-redux'
import appStore from './store/appStore'
import TodoForm from './Components/TodoForm'
import TodoItems from './Components/TodoItems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={appStore}>
      <div className='text-white'>
        <TodoForm/>
        <TodoItems/>
      </div>
    </Provider>
  )
}

export default App

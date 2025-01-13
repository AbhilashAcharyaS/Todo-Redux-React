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
        <h1 className='text-center text-4xl font-extrabold my-4 mt-16 sm:my-8'>Todo using Redux Store, Local Storage</h1>
        <div className='flex flex-col sm:flex-row'>
        <TodoForm/>
        </div>
        <TodoItems/>
      </div>
    </Provider>
  )
}

export default App

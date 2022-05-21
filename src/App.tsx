import './App.css'
import useLocalStorageHooks from './localStorageHooks'

function App() {
  const [item, setItem] = useLocalStorageHooks('abu', 'xxx')
  const handleClick = () => {
    setItem('ddd')
  }
  const handleClicktoM = () => {
    setItem('mmm')
  }
  return (
    <div className="App">
      hello
      <button onClick={handleClick} >click</button>
      <button onClick={handleClicktoM} >click</button>
      {item}
    </div>
  )
}

export default App

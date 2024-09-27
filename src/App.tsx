import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
    <main>
        <h3>ToDo Application using React & Typescript</h3>
        <Addtodo/>
        <Todos/>
    </main>
    </>
  )
}

export default App

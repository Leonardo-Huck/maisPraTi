import Form from './components/Form'
import './App.css'
import GetUser from './components/GetUser'
import PutUser from './components/PutUser'
import DeleteUser from './components/DeleteUser'

function App() {

  return (
    <>
      <GetUser />
      <Form />
      <PutUser />
      <DeleteUser />
    </>
  )
}

export default App

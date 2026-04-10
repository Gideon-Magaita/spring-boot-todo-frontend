// import reactLogo from './assets/react.svg'
// import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layout from './components/pages/Layout'
import Home from './components/pages/Home'
import TodoListComponent from './components/pages/TodoListComponent'
import AddTodoComponent from './components/pages/AddTodoComponent'
//React toast imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <Router>
        <Routes>

           <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path="/todos" element={<TodoListComponent/>}/>
           <Route path="/add-todo" element={<AddTodoComponent/>}/>
           <Route path="/edit/:id" element={<AddTodoComponent />} />
           </Route>
        </Routes>
    </Router>

    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App

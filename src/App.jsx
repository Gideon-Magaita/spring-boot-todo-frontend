// import reactLogo from './assets/react.svg'
// import './App.css'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import Layout from './components/pages/Layout'
import Home from './components/pages/Home'
import TodoListComponent from './components/pages/TodoListComponent'
import AddTodoComponent from './components/pages/AddTodoComponent'
import RegisterComponent from './components/pages/RegisterComponent'
import LoginComponent from './components/pages/LoginComponent'
//React toast imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Children } from 'react'
import { isUserLoggedIn } from './components/services/AuthService'


function App() {
  //function to secure routes
  function AuthenticatedRoute({children}){
   const isAuth = isUserLoggedIn();

   if(isAuth){

    return children;
    
   }else{

    return<Navigate to="/login"/>

   }

  }
  //function ends here
  
  return (
    <>
    <Router>
        <Routes>
                      
           <Route path="/" element={<Layout/>}>
           <Route index element={<RegisterComponent/>}/>
           <Route path="/todos" element={
            <AuthenticatedRoute>
            <TodoListComponent/>
            </AuthenticatedRoute>
            }/>
           <Route path="/add-todo" element={
            <AuthenticatedRoute>
            <AddTodoComponent/>
            </AuthenticatedRoute>
            }/>
           <Route path="/edit/:id" element={
            <AuthenticatedRoute>
            <AddTodoComponent />
            </AuthenticatedRoute>
            } />
           <Route path='/register' element={<RegisterComponent/>}/>
           <Route path='/login' element={<LoginComponent/>}/>
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

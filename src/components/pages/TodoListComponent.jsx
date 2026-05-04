import React,{useState,useEffect} from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import { getAllTodos,deleteTodo,completeTodo,incompleteTodo } from '../services/TodoService';
import { toast } from 'react-toastify';
import { isAdminUser } from '../services/AuthService';

const TodoListComponent = () => {

    const navigate  = useNavigate();
    const { id } = useParams();

    const [todos,setTodos] = useState([]);
    
    //check if the user is admin
    const isAdmin = isAdminUser();

    useEffect(()=>{
        ListTodos();
    },[])

    function ListTodos(){
        getAllTodos().then((response)=>{
            setTodos(response.data);
        }).catch(error=>{
            console.error(error);
        })
    }

    //delete todos
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this todo?")) {
          deleteTodo(id)
            .then(() => {
              setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
              toast.warning("Todo deleted successfully!");
            })
            .catch((error) => {
              console.error(error);
            });
        }
      };

      //compete todo function
      function markCompleteTodo(id) {
        completeTodo(id)
          .then(() => {
            ListTodos();
            toast.success("Todo marked as completed!");
          })
          .catch((error) => console.error(error));
      }

    //incomplete todo function
      function  markIncompleteTodo(id) {
        incompleteTodo(id)
          .then(() => {
            ListTodos();
            toast.success("Todo marked as incomplete!");
          })
          .catch((error) => console.error(error));
      }
  
  return (
    <div className="container mt-5">
      <div className="row">
          <div className="col-md-12">
              <div className="card">
                  <div className="card-header" style={{ display: "flex", justifyContent: "space-between" }}>
                      <h2>List of Todos</h2>
                      {
                        isAdmin && <Link className="btn btn-primary" to="/add-todo">Add Todos</Link>
                      }
                      
                  </div>
                  <div className="card-body">
                  <table className="table table-striped table-responsive">
                        <thead>
                            <tr>
                                <th>#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map(todo=>
                                <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.completed?"Completed":"Pending"}</td>
                                <td style={{ display: "flex", justifyContent: "space-between" }}>
                                
                                {
                                  isAdmin && <button
                                              className="btn btn-warning"
                                              onClick={() => navigate(`/edit/${todo.id}`)}
                                              >
                                              Edit
                                              </button>
                                }
                                
                                {
                                  isAdmin && <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(todo.id)}
                                            >
                                            Delete
                                            </button>
                                }
                                
                                <button
                                    className="btn btn-success"
                                    disabled={todo.completed}
                                    onClick={() => markCompleteTodo(todo.id)}
                                    >
                                    {todo.completed ? "Done" : "Complete"}
                                </button>

                                <button
                                className="btn btn-secondary"
                                onClick={() => markIncompleteTodo(todo.id)}
                                >
                                Incomplete
                                </button>
                                </td>
                                
                                </tr>
                                )
                            }
  
                        </tbody>
                    </table>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default TodoListComponent

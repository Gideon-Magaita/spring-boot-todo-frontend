import React, { useEffect, useState } from 'react';
import { createTodos, updateTodo, getTodoById } from '../services/TodoService';
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const AddTodoComponent = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams(); // get ID from URL

  // Load data if editing
  useEffect(() => {
    if (id) {
      getTodoById(id)
        .then((res) => {
          const data = res.data;
          setTitle(data.title);
          setDescription(data.description);
          setCompleted(data.completed);
        })
        .catch(err => console.error(err));
    }
  }, [id]);

  //Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      title,
      description,
      completed
    };

    
    if (id) {
        // UPDATE
        updateTodo(id, todo)
          .then(() => {
            toast.info("Todo updated successfully!"); // show toast
            setTimeout(() => navigate("/todos"), 500);
            navigate("/todos"); // then navigate
          })
          .catch((err) => {
            toast.error("Failed to update todo");
            console.error(err);
          });
      } else {
        // CREATE
        createTodos(todo)
          .then(() => {
            toast.success("Todo added successfully!"); // show toast
            setTimeout(() => navigate("/todos"), 500);
            navigate("/todos"); // then navigate
          })
          .catch((err) => {
            toast.error("Failed to add todo");
            console.error(err);
          });
      }
    };

  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-6">
          <div className="card">

            <div className="card-header">
              <h2>{id ? "Edit Todo" : "Add Todo"}</h2>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label>Title</label>
                  <input
                    type="text"
                    placeholder="Enter todo title"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label>Description</label>
                  <input
                    type="text"
                    placeholder="Enter todo description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label>Status</label>
                  <select
                    className="form-control"
                    value={completed}
                    onChange={(e) => setCompleted(e.target.value === "true")}
                  >
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
                  </select>
                </div>

                <button className="btn btn-primary w-100">
                  {id ? "Update Todo" : "Add Todo"}
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodoComponent;
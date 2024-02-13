import { useState } from 'react';
import Navbar from './Navbar';

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function addNewItem(e) {
    e.preventDefault()
    setTodos((currentTodo) => {
      return [
        ...currentTodo,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        }
      ]
    })
    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodo => {
      return currentTodo.map(todos => {
        if (todos.id === id) {
          todos.completed = completed
          return { ...todos, completed }
        }
        return todos
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      {/* create web component and import */}
      <Navbar />

      <div className="container mt-5">
        <h1 className='text-center'>React TODO Website</h1>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={addNewItem}>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="">New Item</label>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-4">Add</button>
            </form>
            <ul className="list-group list-group-light">
              {todos.length === 0 && "No todos"}
                {todos.map(todos => {
                  return <li key={todos.id} className="list-group-item">
                    <label htmlFor="">
                      <input type="checkbox"
                        className="form-check-input"
                        id=""
                        checked={todos.completed}
                        onChange={e => toggleTodo(todos.id, e.target.checked)} />
                      {todos.title}
                      <button onClick={() => deleteTodo(todos.id)} className="btn btn-danger">Delete</button>
                    </label>
                  </li>
                })}
            </ul>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
}
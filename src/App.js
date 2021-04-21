import {useState} from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodo] = useState( 
    [
    {
        id: 1,
        title: 'play music',
        desc: 'Play a nice music and have a nice time',
        time: new Date(),
        completed: false 
    },
    {
        id: 2,
        title: 'Eat Food',
        desc: 'Cook rice and stew and eat chicken',
        time: new Date(),
        completed: false 
    },
    {
        id: 3,
        title: 'program',
        desc: 'Learn react basics',
        time: new Date(),
        completed: false 
    },
])

//remove todo
const removeTodo = (id) => {
  setTodo((todos.filter((todo) => todo.id !== id)))
  console.log('cliked', id)
}

//check completed 
const checkComplete = (id, complete) => {
  setTodo(todos.map((todo) => todo.id === id ? {...todo, completed : !todo.completed} : todo))
  console.log('completed', id, complete)
}

  return (
    <div className="container">
      <Header />
      {
        todos.length > 0 ?
          <TodoList todo={todos} onDelete={removeTodo} onChange={checkComplete}/>
          : 'No task to show'
      }
    </div>
  );
}


export default App;

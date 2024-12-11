import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, index, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Add your Todo!</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index = {index} deleteTodo={deleteTodo}/>
      ))}
    </div>
  )
}

export default TodoList

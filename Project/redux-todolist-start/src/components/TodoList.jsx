import { useSelector } from 'react-redux';

const TodoList = () => {
  // [5] useSelector 사용
  const todos = useSelector(state => state.todos);
  console.log('todos =>', todos);
  return (
    <div>
      {
        todos.map(todo => {
          return (
            <div key={todo.id}>
              {todo.title}
            </div>
          )
        })
      }
    </div>
  )
}

export default TodoList

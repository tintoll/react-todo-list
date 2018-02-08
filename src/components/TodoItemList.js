import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

  // 컴포넌트 최적화
  // 기본은 무조건 true여서 todos가 변경되면  리렌더링 되도록 변경 
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map( ({id, text, checked}) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
        />
      )  
    );
    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;
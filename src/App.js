import React, { Component } from 'react';
import './App.css';

import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3;
  state = {
    input : '',
    todos :[
      {id:0, text:'이아아아아', checked:false},
      {id:1, text:'aksksksk', checked:false},
      {id:2, text:'파파차타타아아', checked:false},
    ]
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos : todos.filter(todo => todo.id !== id)
    });
  }

  handleToggle = (id) =>{
    const { todos } = this.state;
    // 파라미터로 받은 id를 가지고 몇번째 아이템이닞 찾는다.
    const index = todos.findIndex(todo => todo.id === id) ;
    const selected = todos[index];

    const nextTodos = [...todos]; // 배열을 복사
    nextTodos[index] = {
      ...selected,
      checked : !selected.checked
    };
    
    this.setState({
      todos : nextTodos
    });

  }

  handleChange = (e) => {
    this.setState({
      input : e.target.value
    });
  }
  handleCreate = () => {
    const { input, todos} = this.state;
    this.setState({
      input : '',
      // concat을 사용해서 배열에 추가 
      todos : todos.concat({
        id : this.id++,
        text : input,
        checked : false
      })
    });
  }
  handleKeyPress = (e) => {
    // 눌려진 키가 Enter이면 
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={(
        <Form value={input}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              onCreate={handleCreate} />
      )}>
        <TodoItemList todos={todos} 
                      onRemove={handleRemove}
                      onToggle={handleToggle}/>
      </TodoListTemplate>
    );
  }
}

export default App;

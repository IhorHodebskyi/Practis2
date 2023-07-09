import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';
const KEY = 'todos';

export class Todos extends Component {
  state = { todos: [] };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem(KEY));
    if (todos) {
      this.setState({ todos });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem(KEY, JSON.stringify(this.state.todos));
    }
  }

  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
    };

    this.setState(prev => {
      return { todos: [...prev.todos, todo] };
    });
  };

  deleteTodo = id => {
    this.setState(prev => {
      return { todos: prev.todos.filter(todo => todo.id !== id) };
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.addTodo} />
        <Grid>
          {todos.map(({ id, text }, index) => {
            return (
              <GridItem key={id}>
                <Todo
                  text={text}
                  counter={index + 1}
                  id={id}
                  onDelete={this.deleteTodo}
                />
              </GridItem>
            );
          })}
        </Grid>
      </>
    );
  }
}

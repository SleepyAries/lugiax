/**
 *
 * create by ligx
 *
 * @flow
 */
import React from 'react';
import InputTask from './components/InputTask';
import List from './components/List';
import { bindTo, connect, } from '@lugia/lugiax';
import todo from './models/todo';

const TodoList = connect(
  todo,
  state => {
    return { data: state.todo.get('tasks'), };
  },
  mutations => {
    const { todo, } = mutations;
    return { delItem: todo.delTask, };
  }
)(List);

const fieldPath = ['formData', 'task',];
const fieldName = fieldPath.join('.');

const TodoInput = bindTo(
  todo,
  {
    [fieldName]: 'value',
    label: 'label',
  },
  {
    onChange: {
      [fieldName](v) {
        const split = v.split('-');
        return 'hello-' + (split[1] || split[0]);
      },
      label(v) {
        return v;
      },
    },
  },
  {
    onEnter() {
      todo.mutations.addTask();
    },
  }
)(InputTask);

export default () => {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
};

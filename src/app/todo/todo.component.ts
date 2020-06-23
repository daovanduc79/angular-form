import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Content } from '@angular/compiler/src/render3/r3_ast';

interface ITodo {
  id: number;
  content: string;
  complete: boolean;
}

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  userInput = new FormControl();

  todos: Array<ITodo> = [];

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    const { value } = this.userInput;
    console.log(this.todos)
    if (value) {
      const todo: ITodo = {
        id: _id++,
        content: value,
        complete: false,
      }

      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }

  toggleTodo(i: any) {
    this.todos[i].complete = !this.todos[i].complete
  }
}

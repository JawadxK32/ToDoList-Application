angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'Custom filter', description:'Prevent user adding duplicate tasks',done:true, delete:false},
      {text:'Duplicate notify', description:'Notify user upon entering duplicate tasks',done:false, delete:false},
      {text:'Default file', done:false, description: 'Default Json file',delete:false},
      {text:'Completed tasks list', description: 'Seperate list for compeleted tasks',done:true, delete: false},
      {text:'Some styling', description: 'Perform some styling, embeddable minimal styling, minor responsiveness',done:true, delete: false},
      {text:'Submit CPS630 Lab4', description:'Submission of lab to d2l',done:true, delete: false}
    ];

    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.delete = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.delete) todoList.todos.push(todo);
      });
    };

    todoList.filter = function(){
      var i = 0;
      angular.forEach(todoList.todos, function(todo){
        if(todo.text == todoList.todoText) i=1;
      });
      if(i == 0 ){
        todoList.todos.push({text:todoList.todoText, done:false, description:todoList.todoDesc,delete:false});
        todoList.todoText = '';
        todoList.todoDesc = '';
      };
    };
  });

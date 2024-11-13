// Define AngularJS application
var app = angular.module('todoApp', []);

// Define the controller for the to-do list
app.controller('TodoController', function($scope) {
    $scope.todos = [];  // Array to hold the tasks

    // Add a new task with due date and time
    $scope.addTodo = function() {
        if ($scope.newTodo && $scope.dueDate && $scope.dueTime) {
            $scope.todos.push({
                text: $scope.newTodo,
                completed: false,
                dueDate: $scope.dueDate,
                dueTime: $scope.dueTime
            });
            // Clear input fields after adding the task
            $scope.newTodo = '';
            $scope.dueDate = '';
            $scope.dueTime = '';
        }
    };

    // Remove a task
    $scope.removeTodo = function(index) {
        $scope.todos.splice(index, 1);
    };

    // Toggle completed status of a task
    $scope.toggleCompleted = function(todo) {
        todo.completed = !todo.completed;
    };
});

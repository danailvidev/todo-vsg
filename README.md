# todo
## To Do app specification 

 

Using the API deployed at https://auto.loanvantage360.com/fps/todo/index.html develop an Angular SPA for a ToDo application. The terms “Task” and “ToDo” are used interchangeably. An important part of the API is the tokens which it requires. Tokens are given when the task is given and should be unique and kept secret. If you have some issues with your token contact your recruiter. Included in the end of the document is an example get query which you can run from postman with your token to create your first ToDo. 

 

Required functionalities are: 

 

### 1. Create ToDo 
``` 
  - A ToDo create object has the following properties: 

  - Name – string up to 100 elements 

  - Description – string up to 500 elements 

  - DueIn – the remaining time to complete the task in hours. 
```

 
### 2. List all tasks 

 

```
  - When listing all tasks, we want a visible indication on the status of the task. The possible statuses are not strictly defined, but rather have properties. The definition of     the statuses and the visible indication is left in the hands of the author. The properties are as follows: 

  - A task that has more than 12h remaining and is not completed 

  - A task that is not completed and has less than 12h to be completed 

  - A task that is past its due date 

  - A completed task
```

 

### 3. Complete task 

```
  - A task that is not overdue should have the ability to be completed. Since the server allows for tasks to always be completed, we need front end validation to plug this hole.     If you are having trouble finding the right endpoint, keep in mind that completing a task is an update request. 
```

 

### 4. Delete task 

 
``` A task that is not yet completed and not past the due date should be able to be deleted.  ```

 

```
  Example request 

  post https://auto.loanvantage360.com/fps/todo/api/ToDos?token={{token}} 

  body: 

  { 

      "Name":"Example todo", 

      "Description": "Created by calling the API", 

      "DueIn":12 

  }
``` 
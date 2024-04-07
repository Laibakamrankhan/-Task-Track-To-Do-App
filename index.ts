#! /usr/bin/env node
import inquirer from "inquirer";

let todos: string[] = [];
let condition = true;
while(condition)
{
    let answer = await inquirer.prompt(
    [

      {
         name:"select",
         type:"list",
         message:"Pick From The Following",
         choices: ["Add", "Update", "ViewList","Delete" , "Exit"]

      },

     
    ]
 );
  if (answer.select === "Add")
    {
      let addTodo = await inquirer.prompt(
        {
             name:"todo",
             type: "input",
             message: "Add Items To Your List"

        }  

      )
  
     todos.push(addTodo.todo);
     console.log(todos)
    }
 if (answer.select === "Update")
    { 
        let updateTodo = await inquirer.prompt(
            {
                name:"todo",
                type:"list",
                message:"Update List",
                choices: todos.map(item => item)
            }
        )
        let addTodo = await inquirer.prompt
          (
            {
                 name:"todo",
                 type: "input",
                 message: "Add Items To Your List"
    
            }  
    
          )
          let newTodo = todos.filter(val => val !== updateTodo.todo);
          todos= [...newTodo,addTodo.todo]
          console.log(todos);
    }
 if (answer.select === "ViewList")
    {
        console.log("*TO-DO LISt*");
        console.log(todos);

    }
if (answer.select === "Delete")
    {
        let deleteTodo = await inquirer.prompt(
            {
                name:"todo",
                type:"list",
                message:"Select Items TO Delete",
                choices: todos.map(item => item)
            }
        )
        let newTodo = todos.filter(val => val !== deleteTodo.todo);
          todos= [...newTodo];
          console.log(todos)
    }
 if (answer.select === "Exit")
    {
        console.log("The End..!!");
        condition = false;
    }
  
};



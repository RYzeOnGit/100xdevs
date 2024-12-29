const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

const filepath = "./todos.json";
program.command('mark')
  .description('Marks task as done in the todo list and updates the todos.json file, make sure to use quotes with task with spaces')
  .argument('<task>', 'task to mark as done')
  .action((task) => {
    task = task.trim().toLowerCase();
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      }
      let todos = [];
      try {
        todos = JSON.parse(data);
      } catch (err) {
        todos = [];
      }
    let found = false;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].title.trim().toLowerCase() === task) {
          todos[i].done = true;
          found = true;
          break;
        }
      }
      if (!found){
        console.log('Task not found');  
      }
      fs.writeFile(filepath, JSON.stringify(todos), (err) => {
        if (err) {
          console.log(err);
        } else {
          if (found){
          console.log(`Task marked: ${task}`);
          }
        }
      });
    });
  });
program.command("add")
  .description("Adds tasks to the todo list and stores them in todos.json, make sure to use quotes for task with spaces")
  .argument("<task>", "task to add")
  .action((task) => {
      fs.readFile(filepath, "utf8", (err, data) => {
          if (err) {
              console.log(err);
          }
          let todos = [];
          try {
              todos = JSON.parse(data);
          } catch (err) {
              todos = [];
          }
          todos.push({ title: task, done: false });
          fs.writeFile(filepath, JSON.stringify(todos), (err) => {
              if (err) {
                  console.log(err);
              } else {
                  console.log(`Task added: ${task}`);
              }
          });
      });
  });
program.command('delete')
  .description('Deletes task from the todo list and updates the todos.json file, make sure to use quotes with task with spaces')
  .argument('<task>', 'task to delete')
  .action((task) => {
    task = task.trim().toLowerCase();
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      }
      let todos = [];
      try {
        todos = JSON.parse(data);
      } catch (err) {
        todos = [];
      }
      let found = false;
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].title.trim().toLowerCase() === task) {
          todos.splice(i, 1);
          found = true;
          break;
        }
      }
      if (!found){
        console.log('Task not found');  
      }
      fs.writeFile(filepath, JSON.stringify(todos), (err) => {
        if (err) {
          console.log(err);
        } else {
          if (found){
          console.log(`Task deleted: ${task}`);
          }
        }
      });
    });
  });
function main() {
  program.parse();
}
main();
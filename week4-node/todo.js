const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

const filepath = "./todos.json";
program.command("add")
  .description("CLI to do file-based tasks")
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
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });
  program.command('mark')
function main() {
  program.parse();
}
main();
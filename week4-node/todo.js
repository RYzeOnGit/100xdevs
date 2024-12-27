const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

const FILE_PATH = 'tasks.json';

// Helper to read tasks from the file
function readTasks() {
  try {
    const data = fs.readFileSync(FILE_PATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    // Return an empty array if file doesn't exist
    return [];
  }
}

// Helper to write tasks to the file
function writeTasks(tasks) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
}

// Command: Add a new task
program
  .command('add')
  .description('Add a new task to the to-do list')
  .argument('<task>', 'Task description')
  .action((task) => {
    const tasks = readTasks();
    tasks.push({ id: tasks.length + 1, task, done: false });
    writeTasks(tasks);
    console.log(`Task added: "${task}"`);
  });

// Command: List all tasks
program
  .command('list')
  .description('List all tasks')
  .action(() => {
    const tasks = readTasks();
    if (tasks.length === 0) {
      console.log('No tasks found.');
    } else {
      console.log('Your tasks:');
      tasks.forEach((t) => {
        console.log(`[${t.done ? 'x' : ' '}] ${t.id}: ${t.task}`);
      });
    }
  });

// Command: Mark a task as done
program
  .command('done')
  .description('Mark a task as done')
  .argument('<id>', 'Task ID')
  .action((id) => {
    const tasks = readTasks();
    const task = tasks.find((t) => t.id === parseInt(id, 10));
    if (!task) {
      console.log(`Task with ID ${id} not found.`);
    } else {
      task.done = true;
      writeTasks(tasks);
      console.log(`Task "${task.task}" marked as done.`);
    }
  });

// Command: Remove a task
program
  .command('remove')
  .description('Remove a task by its ID')
  .argument('<id>', 'Task ID')
  .action((id) => {
    let tasks = readTasks();
    const taskIndex = tasks.findIndex((t) => t.id === parseInt(id, 10));
    if (taskIndex === -1) {
      console.log(`Task with ID ${id} not found.`);
    } else {
      const removedTask = tasks.splice(taskIndex, 1);
      writeTasks(tasks);
      console.log(`Task removed: "${removedTask[0].task}"`);
    }
  });

// Command: Clear all tasks
program
  .command('clear')
  .description('Clear all tasks')
  .action(() => {
    writeTasks([]);
    console.log('All tasks cleared.');
  });

// Parse the command-line arguments
program.parse();

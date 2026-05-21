import {validateTitle,validatePriority,validateDueDate} from './validator.js';
//iii. app.js - Main application
                  // TODO: Import task functions

                  // import { ... } from './task.js';
                  import {validateTitle,validatePriority,validateDueDate} from './validator.js';
                  // Test your module system
                  console.log("Task Validator Module Imported Successfully");
                  // 1. Add some tasks
                  const tasks = [];
                  function addTask(title, priority, dueDate) {
                    if (!validateTitle(title)) {
                      console.log("Invalid Title");
                      return;
                    }
                    if (!validatePriority(priority)) {
                      console.log("Invalid Priority");
                      return;
                    }
                    if (!validateDueDate(dueDate)) {
                      console.log("Invalid Due Date");
                      return;
                    }
                    const task = { title, priority, dueDate, completed: false };
                    tasks.push(task);
                    console.log("Task Added:", task);
                  }
                  // 2. Display all tasks
                  function displayTasks() {
                    console.log("All Tasks:");
                    tasks.forEach((task, index) => {
                      console.log(`${index + 1}. ${task.title} - Priority: ${task.priority} - Due: ${task.dueDate} - Completed: ${task.completed}`);
                    });
                  }
                  // Example usage:
                  addTask("Finish project", "high", "2024-12-01");
                  addTask("Buy groceries", "medium", "2024-11-15");
                  displayTasks();

                  // 3. Complete a task
                  function completeTask(index) {
                    if (index < 0 || index >= tasks.length) {
                      console.log("Invalid Task Index");
                      return;
                    }
                    tasks[index].completed = true;
                    console.log("Task Completed:", tasks[index]);
                  }
                  completeTask(0);
                  displayTasks();
                  // 4. Display all tasks again
                  displayTasks();

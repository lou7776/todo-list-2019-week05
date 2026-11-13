# To-Do List

A simple to-do list app built with HTML, CSS, and vanilla JavaScript. Add tasks, check them off, and delete them one at a time or all at once.

## Features

- Add a task with the input box and the **Add** button
- Alert if you try to add an empty task
- Check a task to cross it out, uncheck it to bring it back
- Delete a single task with the **x** button
- **Delete All** button clears the whole list
- **Delete All** hides itself when the list is empty

## Built With

- HTML
- CSS
- JavaScript (no frameworks or libraries)

## Getting Started

1. Clone the repo or download the files.
2. Open `index.html` in your browser.

No install or build step needed.

## How It Works

- `addTask()` reads the input, creates a new `<li>` with a checkbox, the task text, and an **x** button, then adds it to the list.
- Each checkbox toggles a `strike-through` class on its task text.
- Each **x** button removes its own `<li>`.
- `deleteButton()` clears the entire list.
- `updateDeleteButtonVisibility()` shows or hides **Delete All** depending on whether the list has any tasks. It runs after every add and delete, and once on page load.

## Future Improvements

- Save tasks with `localStorage`
- Add the ability to edit a task
- Let the Enter key add a task

// Imports
import { Form, useLoaderData } from "react-router-dom";
import styles from "styles/task/taskList.module.css";
import TaskCard from "./TaskCard";

// Component
const TaskList = () => {
  const { tasks } = useLoaderData();
  return (
    <section className={styles.sectionTask}>
      <header>
        <h2>Tasks List</h2>
      </header>
      <Form
        method="post"
        action={"create"}
        id="formTask"
        className={styles.formTask}
        onSubmit={() => {}}
      >
        <input className={styles.inputTask} name="title" />
        <button type="submit" className={styles.addButton}>
          Add Task
        </button>
      </Form>
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>
    </section>
  );
};

// Exports
export default TaskList;

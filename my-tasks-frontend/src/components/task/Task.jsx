// Imports
import { Link, useLoaderData } from "react-router-dom";
import styles from "styles/task/task.module.css";
import TaskCard from "./TaskCard";

// Component
const Task = () => {
  const { task } = useLoaderData();
  return (
    <section className={styles.sectionTask}>
      <TaskCard key={task.id} {...task} />
      <Link to={"/tasks"}>
        <button className={styles.returnButton}>Return</button>
      </Link>
    </section>
  );
};

// Exports
export default Task;

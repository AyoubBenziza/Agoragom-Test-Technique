// Imports
import { Form, Link } from "react-router-dom";
import styles from "@/styles/task/taskCard.module.css";
import Task from "@/interfaces/Task";

// Component
const TaskCard = ({ id, title }: Task) => {
  return (
    <article className={styles.card}>
      <Link to={`/tasks/${id}`}>
        <h3 className={styles.title}>{title}</h3>
      </Link>
      <ul className={styles.buttonList}>
        <Link to={`/tasks/${id}/edit`}>
          <button className={styles.editButton}>Edit</button>
        </Link>
        <Form method="post" action={`/tasks/${id}/destroy`}>
          <button type="submit" className={styles.deleteButton}>
            Delete
          </button>
        </Form>
      </ul>
    </article>
  );
};

// Exports
export default TaskCard;

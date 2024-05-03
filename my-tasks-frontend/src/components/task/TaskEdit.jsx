// Imports
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import styles from "styles/task/taskEdit.module.css";

// Component
const TaskEdit = () => {
  const { task } = useLoaderData();
  const navigate = useNavigate();
  return (
    <section className={styles.sectionEdit}>
      <h1>Edit</h1>
      <Form
        method="post"
        id="formTask"
        className={styles.formTask}
        onSubmit={() => {}}
      >
        <input
          className={styles.inputTask}
          name="title"
          defaultValue={task.title}
        />
        <button type="submit" className={styles.editButton}>
          Edit
        </button>
      </Form>
      <button className={styles.cancelButton} onClick={() => navigate(-1)}>
        Cancel
      </button>
    </section>
  );
};

// Exports
export default TaskEdit;

// Imports
import styles from "styles/task/taskCard.module.css";
import { Form } from "react-router-dom";

// Component
// eslint-disable-next-line react/prop-types
const TaskCard = ({ id, title }) => (
  <article className={styles.card}>
    <h3 className={styles.title}>{title}</h3>
    <ul className={styles.buttonList}>
      {/* <Link to="/edit"> */}
      <button className={styles.editButton}>Edit</button>
      {/* </Link> */}
      <Form
        method="post"
        action={id + "/destroy"}
        onSubmit={() => {
          // if (!confirm("Please confirm you want to delete this record.")) {
          //   event.preventDefault();
          // }
        }}
      >
        <button type="submit" className={styles.deleteButton}>
          Delete
        </button>
      </Form>
    </ul>
  </article>
);

// Exports
export default TaskCard;

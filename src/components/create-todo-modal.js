import "styles/create-todo-modal.css";

const CreateTodoModal = (props) => {
  return (
    <div
      className={`create-todo-modal ${
        props.isActive ? "create-todo-modal-active" : ""
      }`}
    >
      <div className="create-todo-modal-background" onClick={props.closeModal}></div>
      <div className="create-todo-modal-form">
        {props.children}
      </div>
    </div>
  );
};

export default CreateTodoModal;

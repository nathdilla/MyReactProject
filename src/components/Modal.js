function Modal(props) {
  function cancelCanceller() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelCanceller}>
        cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        confirm
      </button>
    </div>
  );
}

export default Modal;

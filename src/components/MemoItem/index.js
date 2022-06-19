import "./index.css";
function MemoItem({ children, onClickItem, onClicDelete, isSelected }) {
  return (
    <div
      className={"MemoItem" + (isSelected ? " selected" : "")}
      onClick={onClickItem}
    >
      {children}
      <button className="MemoItem__delete-button" onClick={onClicDelete}>
        X
      </button>
    </div>
  );
}

export default MemoItem;

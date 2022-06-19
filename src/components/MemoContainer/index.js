import "./index.css";
function MemoContainer({ memo, setMemo }) {
  if (memo === undefined) {
    return (
      <div>
        <h1>메모가 없습니다.</h1>
        <h2>새로운 메모를 추가해주세요.</h2>
      </div>
    );
  }
  return (
    <div className="MemoContainer">
      <div>
        <input
          value={memo.title}
          type="text"
          className="MemoContainer__title"
          onChange={(e) => {
            setMemo({
              ...memo,
              title: e.target.value,
              updatedAt: new Date().getTime,
            });
          }}
        ></input>
      </div>
      <div>
        <textarea
          value={memo.content}
          className="MemoContainer__content"
          onChange={(e) => {
            setMemo({
              ...memo,
              content: e.target.value,
              updatedAt: new Date().getTime,
            });
          }}
        />
      </div>
    </div>
  );
}

export default MemoContainer;

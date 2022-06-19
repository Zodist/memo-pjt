import "./index.css";
import MemoList from "../MemoList";
import SideBarHeader from "../SideBarHeader";
import SideBarFooter from "../SideBarFooter";
function SideBar({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
  addMemo,
  deleteMemo,
}) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
        memos={memos}
      />
      <SideBarFooter onClick={addMemo} />
    </div>
  );
}

export default SideBar;

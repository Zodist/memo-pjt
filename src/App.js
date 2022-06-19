import { useCallback, useState } from "react";
import "./App.css";
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";
import { getItem, setItem } from "./lib/storage";
import debounce from "lodash.debounce";

const debouncedSetItem = debounce(setItem, 5000);
function App() {
  // const [memos, setMemos] = useState([
  //   {
  //     title: "Memo 1",
  //     content: "This is memo 1",
  //     createdAt: 0, // 시간 값
  //     updatedAt: 0, // 시간 값
  //   },
  //   {
  //     title: "Memo 2",
  //     content: "This is memo 2",
  //     createdAt: 0, // 시간 값
  //     updatedAt: 0, // 시간 값
  //   },
  // ]);
  const [memos, setMemos] = useState(getItem("memos") || []);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = useCallback(
    (newMemo) => {
      const newMemos = [...memos];
      newMemos[selectedMemoIndex] = newMemo;
      setMemos(newMemos);
      debouncedSetItem("memos", newMemos);
    },
    [memos, selectedMemoIndex]
  );

  const addMemo = useCallback(() => {
    const now = new Date().getTime();
    const newMemos = [
      ...memos,
      {
        title: "Untitled",
        content: "",
        createdAt: now, // 시간 값
        updatedAt: now, // 시간 값
      },
    ];
    setMemos(newMemos);
    setSelectedMemoIndex(memos.length);
    debouncedSetItem("memos", newMemos);
  }, [memos]);

  const deleteMemo = useCallback(
    (index) => {
      const newMemos = [...memos];
      newMemos.splice(index, 1);
      setMemos(newMemos);
      if (index === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      }
      debouncedSetItem("memos", newMemos);
    },
    [memos, selectedMemoIndex]
  );

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        addMemo={addMemo}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;

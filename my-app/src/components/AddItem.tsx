"use client";

import { useState } from "react";
import ShowTask from "./ShowTask";

const AddItem = () => {
  const [newPriority, setNewPriority] = useState("medium");
  const [task, setTask] = useState<any>([]);
  const [text, setText] = useState("");

  const handleAddTask = () => {
    if (text == "") {
      alert("please insert text");
    } else {
      const newitem = {
        id: Math.floor(Math.random() * 1000),
        value: text,
        priority: newPriority,
      };
      setTask([...task, newitem]);
      setText("");
    }
  };
  return (
    <div className="flex flex-col items-center  gap-4">
      <div className=" mx-auto w-[300px] flex gap-1">
        <input
          className=" p-2 text-sm rounded bg-slate-100 border
           border-gray-900 outline-none  focus:border-orange-500"
          type="text"
          placeholder="Enter item here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <select
          className="border border-black rounded"
          onChange={(e) => setNewPriority(e.target.value)}
          value={newPriority}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          onClick={() => {
            handleAddTask();
          }}
          className=" border  border-orange-500 hover:bg-transparent hover:text-black
           bg-orange-500 text-white px-2 py-2 rounded transition-colors"
        >
          Add
        </button>
      </div>
      <div className="w-[400px]">
        <ShowTask task={task} setTask={setTask} />
      </div>
    </div>
  );
};

export default AddItem;

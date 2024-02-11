import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImCheckboxUnchecked } from "react-icons/im";
import { IoCheckbox } from "react-icons/io5";

type ShowtaskType = {
  task: any;
  setTask: any;
};

const getLocalCheckedData = () => {
  const data = localStorage.getItem("checkedStatus") || "{}";
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error("Error parsing local storage data for checkedStatus:", error);
    return {};
  }
};

const ShowTask: React.FC<ShowtaskType> = ({ task, setTask }) => {
  const [checkedTasks, setCheckedTasks] = useState<{
    [taskId: string]: boolean;
  }>(getLocalCheckedData());

  useEffect(() => {
    localStorage.setItem("checkedStatus", JSON.stringify(checkedTasks));
  }, [checkedTasks]);

  const handleDelete = (taskId: string) => {
    const updatedTasks = task.filter((item: any) => item.id !== taskId);
    setTask(updatedTasks);
  };

  const handleChange = (taskId: string) => {
    setCheckedTasks((prevCheckedTasks) => ({
      ...prevCheckedTasks,
      [taskId]: !prevCheckedTasks[taskId] || false,
    }));
  };

  const checkedCount = Object.values(checkedTasks).filter(
    (isChecked) => isChecked
  ).length;

  return (
    <div className="flex flex-col gap-3">
      <ul className="flex flex-col  gap-2 px-2">
        {task.map((item: any) => (
          <li
            className="p-1 border rounded hover:border-orange-500
          flex items-center justify-between px-1 "
            key={item.id}
          >
            <div
              onClick={() => handleChange(item.id)}
              className="flex gap-1 items-center"
            >
              {checkedTasks[item.id] ? (
                <div className="text-orange-500">
                  <IoCheckbox />
                </div>
              ) : (
                <div className="text-orange-500">
                  <ImCheckboxUnchecked />
                </div>
              )}
              <p>{item.value}</p>
              <p>{item.priority}</p>
            </div>
            <div className="text-red-500  flex items-center gap-2">
              <div className="hover:text-orange-300 ">
                <FaEdit />
              </div>
              <div
                onClick={() => handleDelete(item.id)}
                className="hover:text-orange-300"
              >
                <MdDelete />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex gap-x-2 border border-gray-400">
        <p>Total Task: {task.length}</p>
        <p>Complete Task: {checkedCount}</p>
        <p>Incomplete Task: {task.length - checkedCount}</p>
      </div>
    </div>
  );
};

export default ShowTask;

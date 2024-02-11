import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

type ShowtaskType = {
  task: any;
  setTask: any;
};

const ShowTask: React.FC<ShowtaskType> = ({ task, setTask }) => {
  const handleDelete = (taskId: string) => {
    const updatedTasks = task.filter((item: any) => item.id !== taskId);
    setTask(updatedTasks);
  };
  return (
    <div className="flex flex-col gap-3">
      <ul className="flex flex-col  gap-2 px-2">
        {task.map((item: any) => (
          <li
            className="p-1 border rounded hover:border-orange-500
          flex items-center justify-between px-1 "
            key={item.id}
          >
            <div className="flex gap-1">
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
    </div>
  );
};

export default ShowTask;

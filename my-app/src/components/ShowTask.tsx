type ShowtaskType = {
  task: any;
  setTask: any;
};
const ShowTask: React.FC<ShowtaskType> = ({ task, setTask }) => {
  return (
    <div className="flex flex-col gap-3">
      <ul className="flex flex-col  gap-2 px-2">
        {task.map((item: any) => (
          <li className="flex items-center justify-between px-1 " key={item.id}>
            {item.value}
            {item.priority}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTask;

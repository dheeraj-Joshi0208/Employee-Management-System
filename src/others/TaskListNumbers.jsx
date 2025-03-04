const tasks = [
  {
    id: 1,
    title: "New Task",
    count: 0,
    bgColor: "#B7B1F2 ",
  },
  {
    id: 2,
    title: "In Progress",
    count: 2,
    bgColor: "#FDB7EA",
  },
  {
    id: 3,
    title: "Completed",
    count: 5,
    bgColor: "#FFDCCC",
  },
  {
    id: 4,
    title: "Pending",
    count: 3,
    bgColor: "#FBF3B9",
  },
];
export default function TaskList() {
  return (
    <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`rounded-lg p-6`}
          style={{ backgroundColor: task.bgColor }}
        >
          <div className="flex flex-col">
            <span className="mb-2 text-4xl font-bold">{task.count}</span>
            <span className="text-xl">{task.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

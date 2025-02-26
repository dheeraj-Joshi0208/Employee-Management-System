const tasks = [
  { id: 1, title: "New Task", count: 0, bgColor: "bg-red-400" },
  { id: 2, title: "In Progress", count: 2, bgColor: "bg-blue-400" },
  { id: 3, title: "Completed", count: 5, bgColor: "bg-green-400" },
  { id: 4, title: "Pending", count: 3, bgColor: "bg-yellow-400" },
];

export default function TaskList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`${task.className} p-6 rounded-lg transition-transform hover:scale-102 ${task.bgColor}`}
        >
          <div className="flex flex-col text-white">
            <span className="text-4xl font-bold mb-2">{task.count}</span>
            <span className="text-xl">{task.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const TaskList = () => {
  const tasks = [
    {
      button: "Girl",
      date: "2101-11-14",
      heading: "Make a YouTube video.",
      paragraph:
        "Frequently guess worth holding, especially when the queen's goose spends time buried.",
      bgColor: "bg-red-400",
    },
    {
      button: "Boy",
      date: "2102-05-21",
      heading: "Write a blog post.",
      paragraph:
        "The writer carefully crafted each sentence, ensuring clarity and engagement.",
      bgColor: "bg-blue-400",
    },
    {
      button: "Student",
      date: "2103-08-30",
      heading: "Complete the project report.",
      paragraph:
        "Gather all research data, analyze findings, and compile them into a structured report.",
      bgColor: "bg-green-400",
    },
    {
      button: "Developer",
      date: "2104-12-10",
      heading: "Fix bugs in the application.",
      paragraph:
        "Identify reported issues, debug the code, and implement necessary fixes.",
      bgColor: "bg-yellow-400",
    },
  ];

  return (
    <div className="mt-10 flex max-h-74 flex-wrap gap-6 overflow-y-auto p-6">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`w-7xl rounded-lg border p-4 shadow-md ${task.bgColor}`}
        >
          <div className="flex items-center justify-between">
            <button className="mb-4 rounded-full bg-red-500 px-6 py-1">
              {task.button}
            </button>
            <div className="mb-4 text-sm">{task.date}</div>
          </div>
          <h3 className="mb-4 text-2xl font-semibold">{task.heading}</h3>
          <p className="text-md">{task.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

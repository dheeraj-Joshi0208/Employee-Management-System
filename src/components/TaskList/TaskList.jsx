import Button from "../Button/Button";

const TaskList = () => {
  const tasks = [
    {
      id: 1,
      role: "Content Creator",
      date: "2024-03-10",
      heading: "Make a YouTube video.",
      paragraph:
        "Plan, script, and record a video on tech trends for your channel.",
    },
    {
      id: 2,
      role: "Writer",
      date: "2024-03-12",
      heading: "Write a blog post.",
      paragraph:
        "Research, draft, and publish an informative blog post on web development.",
    },
    {
      id: 3,
      role: "Student",
      date: "2024-03-15",
      heading: "Complete the project report.",
      paragraph:
        "Compile research findings and structure them into a formal project report.",
    },
    {
      id: 4,
      role: "Developer",
      date: "2024-03-18",
      heading: "Fix bugs in the application.",
      paragraph:
        "Identify and resolve reported issues to enhance application stability.",
    },
  ];

  return (
    <div className="mt-10 flex max-h-74 flex-wrap items-center justify-center gap-6 overflow-y-auto p-6">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`w-7xl rounded-lg border border-gray-300 p-4 shadow-md`}
        >
          <div className="flex items-center justify-between">
            <Button text={`${task.role}`} className="rounded-4xl" />
            <div className="text-sm">{task.date}</div>
          </div>
          <h3 className="mt-2 text-2xl font-semibold">{task.heading}</h3>
          <p className="text-lg">{task.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

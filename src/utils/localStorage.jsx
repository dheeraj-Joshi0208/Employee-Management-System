const employees = [
  {
    id: 1,
    firstName: "Amit Sharma",
    email: "amit.sharma@company.com",
    password: "securePass123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Website Redesign",
        taskDescription: "Revamp the company's homepage layout.",
        taskDate: "2024-10-12",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss requirements with ABC Corp.",
        taskDate: "2024-10-10",
        category: "Business",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Resolve critical bugs reported in Issue Tracker.",
        taskDate: "2024-10-14",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    firstName: "Sneha Kapoor",
    email: "sneha.kapoor@company.com",
    password: "strongPass789",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Optimization",
        taskDescription: "Optimize database queries for faster performance.",
        taskDate: "2024-10-11",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "UI Design Draft",
        taskDescription: "Create wireframes for the new dashboard.",
        taskDate: "2024-10-09",
        category: "Design",
      },
    ],
  },
  {
    id: 3,
    firstName: "Ravi Verma",
    email: "ravi.verma@company.com",
    password: "passSecure567",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Project Presentation",
        taskDescription: "Prepare slides for upcoming project pitch.",
        taskDate: "2024-10-13",
        category: "Presentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review and refactor backend API code.",
        taskDate: "2024-10-12",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Software Testing",
        taskDescription: "Test new features before release.",
        taskDate: "2024-10-08",
        category: "QA",
      },
    ],
  },
  {
    id: 4,
    firstName: "Priya Malhotra",
    email: "priya.malhotra@company.com",
    password: "admin12345",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Update the API documentation.",
        taskDate: "2024-10-13",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Set Up CI/CD",
        taskDescription: "Implement an automated CI/CD pipeline.",
        taskDate: "2024-10-11",
        category: "DevOps",
      },
    ],
  },
  {
    id: 5,
    firstName: "Karan Mehta",
    email: "karan.mehta@company.com",
    password: "secureLogin!123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI/UX Enhancement",
        taskDescription: "Improve the design of the dashboard.",
        taskDate: "2024-10-14",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server Deployment",
        taskDescription: "Deploy the latest build on production.",
        taskDate: "2024-10-09",
        category: "DevOps",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Customer Feedback Analysis",
        taskDescription: "Analyze customer feedback to improve UX.",
        taskDate: "2024-10-12",
        category: "Support",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@company.com",
    password: "SuperSecureAdmin@456",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  console.log(employees);
  console.log(admin);


  return { employees, admin };
};

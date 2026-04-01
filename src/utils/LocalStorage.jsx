const employees = [
  {
    id: 101,
    name: "Amit",
    email: "alice.johnson@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Prepare slides for the project kickoff meeting.",
        date: "2025-10-12",
        category: "Meetings",
        priority:"High"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fix",
        taskDescription: "Resolved the login issue on the mobile app.",
        date: "2025-10-10",
        category: "Development",
        priority:"High"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Migration",
        taskDescription: "Migrate database to the new AWS instance.",
        date: "2025-10-11",
        category: "Infrastructure",
        priority:"High"
      },
    ],
  },
  {
    id: 102,
    name: "Rohit",
    email: "bob.smith@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Write the API docs for the new endpoint.",
        date: "2025-10-13",
        category: "Documentation",
        priority:"High"
        
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review PRs for the authentication module.",
        date: "2025-10-12",
        category: "Development",
                priority:"Medium"

      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Sync",
        taskDescription: "Weekly sync with the design team.",
        date: "2025-10-09",
        category: "Meetings",
                priority:"low"

      },
    ],
  },
  {
    id: 103,
    name: "Neha",
    email: "charlie.davis@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Prototype",
        taskDescription: "Create High-fidelity wireframes for the dashboard.",
        date: "2025-10-14",
        category: "Design",
        priority:"High"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "UI Audit",
        taskDescription: "Check all buttons for contrast accessibility.",
        date: "2025-10-08",
        category: "Design",
        priority:"low"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Video Edit",
        taskDescription: "Render the promo video for the product launch.",
        date: "2025-10-07",
        category: "Marketing",
        priority:"Medium"
      },
    ],
  },
  {
    id: 104,
    name: "Priya",
    email: "diana.prince@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Security Audit",
        taskDescription: "Perform vulnerability scan on production servers.",
        date: "2025-10-15",
        category: "Security",
        priority:"low"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Firewall Config",
        taskDescription: "Update inbound rules for the staging environment.",
        date: "2025-10-14",
        category: "Security",
        priority:"High"
      },
      {
        active: false,
        newTask: true,
        completed: true,
        failed: false,
        taskTitle: "SSL Renewal",
        taskDescription: "Renew certificates for company subdomains.",
        date: "2025-10-05",
        category: "Infrastructure",
        priority:"Medium"
      },
    ],
  },
  {
    id: 105,
    name: "Arjun",
    email: "ethan.hunt@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Market Research",
        taskDescription: "Analyze competitor pricing for the Q4 report.",
        date: "2025-10-16",
        category: "Research",
        priority:"High"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Data Cleaning",
        taskDescription: "Remove duplicates from the CRM lead list.",
        date: "2025-10-04",
        category: "Data",
        priority:"low"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Campaign",
        taskDescription: "Send out the monthly newsletter to all subscribers.",
        date: "2025-10-02",
        category: "Marketing",
        priority:"Medium"
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    name: "Suresh",
    email: "admin@company.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employe", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin)); //set property and there values
};

export const setAuthUser = (role) => {
  localStorage.setItem("authUser", JSON.stringify(role));
};

export const getAuthUser = () => {
  return JSON.parse(localStorage.getItem("authUser"));
};

export const clearAuthUser = () => {
  localStorage.removeItem("authUser");
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employe"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  // console.log(employees, admin);

  return { employees, admin };
};

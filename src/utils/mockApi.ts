/** Simulates network latency for mock data fetches during development. */
export function mockDelay<T>(data: T, ms = 600): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

export interface MetricSummary {
  id: string;
  label: string;
  value: number;
  change: number; // percentage, can be negative
  format: "currency" | "number" | "percent";
}

export interface TaskRow {
  id: string;
  title: string;
  assignee: string;
  status: "todo" | "in-progress" | "done" | "blocked";
  dueDate: string;
}

export async function fetchMetrics(): Promise<MetricSummary[]> {
  return mockDelay([
    { id: "revenue", label: "Revenue", value: 84210, change: 12.4, format: "currency" },
    { id: "active-users", label: "Active Users", value: 3204, change: 4.1, format: "number" },
    { id: "conversion", label: "Conversion Rate", value: 3.8, change: -0.6, format: "percent" },
    { id: "tasks-done", label: "Tasks Completed", value: 128, change: 22.9, format: "number" },
  ]);
}

export async function fetchTasks(): Promise<TaskRow[]> {
  return mockDelay([
    { id: "1", title: "Redesign onboarding flow", assignee: "Ada Lovelace", status: "in-progress", dueDate: "2026-08-15" },
    { id: "2", title: "Fix billing webhook retries", assignee: "Grace Hopper", status: "todo", dueDate: "2026-08-18" },
    { id: "3", title: "Ship dark mode toggle", assignee: "Alan Turing", status: "done", dueDate: "2026-08-10" },
    { id: "4", title: "Investigate churn spike", assignee: "Katherine Johnson", status: "blocked", dueDate: "2026-08-20" },
    { id: "5", title: "Q3 roadmap review", assignee: "Ada Lovelace", status: "todo", dueDate: "2026-08-22" },
  ]);
}
defmodule TasktrackrspaWeb.TaskView do
  use TasktrackrspaWeb, :view
  alias TasktrackrspaWeb.TaskView
  alias TasktrackrspaWeb.UserView

  def render("index.json", %{tasks: tasks}) do
    %{data: render_many(tasks, TaskView, "task.json")}
  end

  def render("show.json", %{task: task}) do
    %{data: render_one(task, TaskView, "task.json")}
  end

  def render("task.json", %{task: task}) do
    %{id: task.id,
      title: task.title,
      body: task.body,
      completed: task.completed,
      time_taken: task.time_taken,
      user: render_one(task.user, UserView, "user.json"),
      assigned: render_one(task.assigned, UserView, "user.json")}
  end
end

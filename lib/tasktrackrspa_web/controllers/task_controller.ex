defmodule TasktrackrspaWeb.TaskController do
  use TasktrackrspaWeb, :controller

  alias Tasktrackrspa.Work
  alias Tasktrackrspa.Work.Task

  action_fallback TasktrackrspaWeb.FallbackController

  def index(conn, _params) do
    tasks = Work.list_tasks()
    render(conn, "index.json", tasks: tasks)
  end

  def create(conn, %{"tasks" => task_params}) do
    token = task_params["token"]
    {:ok, user_id} = Phoenix.Token.verify(conn, "auth token", token, max_age: 86400)
    if String.to_integer(task_params["user_id"]) != user_id do
      IO.inspect({:bad_match, task_params["user_id"], user_id})
      raise "hax!"
    end

    with {:ok, %Task{} = task} <- Work.create_task(task_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", task_path(conn, :show, task))
      |> render("show.json", task: task)
    end
  end

  def show(conn, %{"id" => id}) do
    task = Work.get_task!(id)
    render(conn, "show.json", task: task)
  end

  def update(conn, %{"id" => id, "tasks" => task_params}) do
    task = Work.get_task!(id)

    with {:ok, %Task{} = task} <- Work.update_task(task, task_params) do
      render(conn, "show.json", task: task)
    end
  end

  def delete(conn, %{"id" => id}) do
    task = Work.get_task!(id)
    with {:ok, %Task{}} <- Work.delete_task(task) do
      send_resp(conn, :no_content, "")
    end
  end
end

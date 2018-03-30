defmodule TasktrackrspaWeb.PageController do
  use TasktrackrspaWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end

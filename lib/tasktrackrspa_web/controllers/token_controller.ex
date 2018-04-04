defmodule TasktrackrspaWeb.TokenController do
  use TasktrackrspaWeb, :controller
  alias Tasktrackrspa.Accounts.User

  action_fallback TasktrackrspaWeb.FallbackController

  def create(conn, %{"name" => name, "pass" => pass}) do
    with {:ok, %User{} = user} <- Tasktrackrspa.Accounts.get_and_auth_user(name, pass) do
      token = Phoenix.Token.sign(conn, "auth token", user.id)
      conn
      |> put_status(:created)
      |> render("token.json", user: user, token: token)
    end
  end


end

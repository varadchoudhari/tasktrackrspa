defmodule TasktrackrspaWeb.Router do
  use TasktrackrspaWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", TasktrackrspaWeb do
    pipe_through :browser # Use the default browser stack
    get "/users", PageController, :index
    get "/byme", PageController, :index
    get "/assigned", PageController, :index
    get "/new", PageController, :index
    get "/tasks", PageController, :index
    get "/users/:id", PageController, :index

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api/v1", TasktrackrspaWeb do
     pipe_through :api
     post "/token", TokenController, :create
     resources "/tasks", TaskController, except: [:new, :edit]
     resources "/users", UserController, except: [:new, :edit]
  end
end

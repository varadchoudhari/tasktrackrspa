# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :tasktrackrspa,
  ecto_repos: [Tasktrackrspa.Repo]

# Configures the endpoint
config :tasktrackrspa, TasktrackrspaWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "SJtLWswBFYGpa1zkbsaO0hSaREL+32lqVhioURCL+emGz1HwlriHZGsiNwj5XM5V",
  render_errors: [view: TasktrackrspaWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Tasktrackrspa.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

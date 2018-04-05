defmodule Tasktrackrspa.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset


  schema "users" do
    field :name, :string
    field :password_hash, :string

    field :password, :string, virtual: true

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    name = nil
    password = nil
    if attrs["name"] != "" and attrs["pass"] != "" do
      name = attrs["name"]
      password = Comeonin.Argon2.hashpwsalt(attrs["pass"])
    end
    toSend = %{"name" => name, "password_hash" => password}
    IO.inspect toSend, label: "TO SEND"
    user
    |> cast(toSend, [:name, :password_hash])
    |> validate_required([:name, :password_hash])
  end
end

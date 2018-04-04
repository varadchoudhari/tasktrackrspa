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
    user
    |> cast(attrs, [:name, :password_hash])
    |> validate_required([:name])
  end
end

defmodule Tasktrackrspa.Work.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :body, :string
    field :completed, :boolean, default: false
    field :time_taken, :integer
    field :title, :string
    belongs_to :user, Tasktrackrspa.Accounts.User, foreign_key: :user_id
    belongs_to :assigned, Tasktrackrspa.Accounts.User, foreign_key: :assigned_id

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :body, :completed, :time_taken, :user_id, :assigned_id])
    |> validate_required([:title, :body, :completed, :time_taken, :user_id, :assigned_id])
    |> validate_change(:time_taken, fn :time_taken, time ->
      if rem(time, 15) != 0 do
        [time_taken: "Invalid time"]
      else
        []
      end
    end
      )
  end
end

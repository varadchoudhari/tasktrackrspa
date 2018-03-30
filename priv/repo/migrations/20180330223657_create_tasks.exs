defmodule Tasktrackrspa.Repo.Migrations.CreateTasks do
  use Ecto.Migration

  def change do
    create table(:tasks) do
      add :title, :text, null: false
      add :body, :text, null: false
      add :completed, :boolean, default: false, null: false
      add :time_taken, :integer
      add :user_id, references(:users, on_delete: :delete_all), null: false
      add :assigned_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:tasks, [:user_id])
    create index(:tasks, [:assigned_id])
  end
end

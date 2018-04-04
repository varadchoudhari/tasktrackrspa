defmodule Seeds do
  alias Tasktrackrspa.Repo
  alias Tasktrackrspa.Accounts.User
  alias Tasktrackrspa.Work.Task

  def run do
    p = Comeonin.Argon2.hashpwsalt("password1")
    Repo.delete_all(User)
    a = Repo.insert!(%User{ name: "alice" , password_hash: p})
    b = Repo.insert!(%User{ name: "bob" , password_hash: p})
    c = Repo.insert!(%User{ name: "carol" , password_hash: p})
    d = Repo.insert!(%User{ name: "dave" , password_hash: p})

    Repo.delete_all(Task)
    Repo.insert!(%Task{ user_id: a.id, title: "Task1", body: "Hi, I'm Alice", assigned_id: a.id, time_taken: 15 })
    Repo.insert!(%Task{ user_id: b.id, title: "Task2", body: "Hi, I'm Bob", assigned_id: b.id, time_taken: 15 })
    Repo.insert!(%Task{ user_id: b.id, title: "Task3", body: "Hi, I'm Bob Again", assigned_id: b.id, time_taken: 15 })
    Repo.insert!(%Task{ user_id: c.id, title: "Task4", body: "Hi, I'm Carol", assigned_id: c.id, time_taken: 15 })
    Repo.insert!(%Task{ user_id: d.id, title: "Task5", body: "Hi, I'm Dave", assigned_id: d.id, time_taken: 15 })
  end
end

Seeds.run

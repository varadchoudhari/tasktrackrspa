import store from './store';

class TheServer {
  requestTasks() {
    $.ajax("/api/v1/tasks", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        store.dispatch({
          type: "TASKS_LIST",
          tasks: resp.data,
        });
      }
    });
  }

  submitTasks(data) {
    $.ajax("/api/v1/tasks", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({ tasks: data}),
      success: (resp) => {
        store.dispatch({
          type: "ADD_TASK",
          task: resp.data,
        });
      }
    });
  }

  requestUsers() {
    $.ajax("/api/v1/users", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        store.dispatch({
          type: "USERS_LIST",
          users: resp.data,
        });
      }
    });
  }
};

export default new TheServer();

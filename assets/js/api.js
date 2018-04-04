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

  submitTasks(data, token) {
    let newData = {user_id: ""+token, title: data.title, body: data.body, assigned_id: data.assigned_id, completed: data.completed, time_taken: data.time_taken, token: data.token}

    $.ajax("/api/v1/tasks", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({ tasks: newData}),
      success: (resp) => {
        store.dispatch({
          type: "ADD_TASK",
          task: resp.data,
        });
      }
    });
  }

  updateTasks(data, id) {
    $.ajax("/api/v1/tasks/"+id, {
      method: "put",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({ tasks: data}),
      success: (resp) => {
        console.log("TODO: updated!!")
        // store.dispatch({
        //   type: "ADD_TASK",
        //   task: resp.data,
        // });
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

submitLogin(data) {
  $.ajax("/api/v1/token", {
    method: "post",
    dataType: "json",
    contentType: "application/json; charset=UTF-8",
    data: JSON.stringify(data),
    success: (resp) => {
      store.dispatch({
        type: "SET_TOKEN",
        token: resp,
      });
    },
    // error: (msg) => {
    //   store.dispatch({
    //     type: 'SET_LOGIN_ERROR',
    //     error: msg,
    //   });
    // }
  });
}
};

export default new TheServer();

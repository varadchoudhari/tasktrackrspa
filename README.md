# Tasktrackrspa

## Design Decisions

**1. Unique users**   
The application uses username to login and I have enforced uniqueness constraint so that multiple users with same username are not registered. 

**2. The Feed**  
The "/feed" page will show all the tasks created by all the users of this application. All the information about a task is shown in the feed. There is an ability to EDIT and DELETE the task right from the feed.

**3. Tasks can be EDITED only by the owner and the assignee**   
Since the feed lists all the tasks across the system, to enforce security, I have given the authorization EDIT a task only to the owner of the task and the assignee.

**4. Enter TITLE, BODY, and ASSIGNEE while creating new task**   
While creating a new task, the user needs to enter only the task TITLE, BODY, and the ASSIGNEE name. Time taken field is set to 0 by default, and completed status is set to false by default. To edit time taken and completed status, the owner/assignee needs to EDIT the task.

**7. "Created Tasks" list**   
I have kept a separate index that shows a list of tasks created by the user that is currently logged in.

**8. "Assigned Tasks" list**   
I have kept a separate index that shows a list of tasks that are assigned to the user that is currently logged in.

**10. 15-minute increments**
I have used stepper at the front-end to set time in 15-minute increments. In addition to that, I have also validated it (whether the entered time is in 15-minute increments) at the server side before storing it in the database. If a random number is entered, then it will be rounded to nearest 15th minute interval.

import React, { Component } from 'react';
import TaskButton from './Components/TaskButton';
import TimeDisplay from './Components/TimeDisplay';
import StopTimer from './Components/StopTimer';
import ConfirmButton from './Components/ConfirmButton';
import CancelButton from './Components/CancelButton';
import Login from './Components/Login';
import AddTaskModal from './Components/AddTaskModal';
import './App.css';
import config from './Config';
import { UserAgentApplication } from 'msal';
import { getUserDetails, postEvent } from './GraphService';

class App extends Component {
  constructor(props) {
    super(props);

    this.UserAgentApplication = new UserAgentApplication({
      auth: {
        clientId: config.appId,
        redirectUri: 'http://localhost:3000/'
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: true
      }
    });

    var user = this.UserAgentApplication.getAccount();

    this.state = {
      tasks: [
        'Homework',
        'Work',
        'Exercise',
        'Netflix',
        'Art',
        'Pet dog',
        'Music',
        'Internet',
        'Podcast',
        'Obey cat',
        'Take out trash'
      ],
      selectedTask: '',
      startDateTime: '',
      endDateTime: '',
      displayTime: '00:00:00',
      timeRecorded: 0,
      isRecording: false,
      intervalId: null,
      isAuthenticated: false,
      user: {},
      showAddTaskModal: false,
      newTaskInput: ''
    };
  }

  componentWillUnmount() {
    this.stopTimer();
    this.UserAgentApplication.logout();
  }

  login = async () => {
    try {
      await this.UserAgentApplication.loginPopup({
        scopes: config.scopes,
        prompt: 'select_account'
      });
      await this.getUserProfile();
    } catch (err) {
      console.log(err);
    }
  };

  getUserProfile = async () => {
    try {
      var accessToken = await this.UserAgentApplication.acquireTokenSilent({
        scopes: config.scopes
      });

      if (accessToken) {
        var user = await getUserDetails(accessToken);
        console.log(user);
        this.setState({
          isAuthenticated: true,
          user: {
            displayName: user.displayName,
            email: user.mail || user.userPrincipalName
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  startTimer = () => {
    const intervalId = setInterval(this.timer, 1000);
    this.setState({
      intervalId,
      isRecording: true,
      startDateTime: new Date(Date.now()).toISOString()
    });
  };

  timer = () => {
    let time = this.state.timeRecorded + 1;

    this.setState({
      timeRecorded: time,
      displayTime: new Date(time * 1000).toISOString().substr(11, 8)
    });
  };

  stopTimer = () => {
    clearInterval(this.state.intervalId);
    this.setState({
      isRecording: false,
      endDateTime: new Date(Date.now()).toISOString()
    });
  };

  deleteEntry = () => {
    this.stopTimer();
    this.setState({
      selectedTask: '',
      displayTime: '00:00:00',
      timeRecorded: 0,
      intervalId: null
    });
  };

  saveEntry = async () => {
    var accessToken = await window.msal.acquireTokenSilent({
      scopes: config.scopes
    });

    const entry = {
      subject: this.state.selectedTask,
      start: {
        dateTime: this.state.startDateTime,
        timeZone: 'UTC'
      },
      end: {
        dateTime: this.state.endDateTime,
        timeZone: 'UTC'
      }
    };

    postEvent(accessToken, entry);

    this.setState({ timeRecorded: 0, isRecording: false, intervalId: null });
  };

  setTask = task => {
    this.setState({ selectedTask: task });
    this.startTimer();
  };

  toggleTaskModal = () => {
    this.setState({ showAddTaskModal: !this.state.showAddTaskModal });
  };

  cancelAddTask = () => {
    this.setState({
      newTaskInput: '',
      showAddTaskModal: !this.state.showAddTaskModal
    });
  };

  saveNewTask = () => {
    this.setState({
      tasks: [...this.state.tasks, this.state.newTaskInput],
      showAddTaskModal: !this.state.showAddTaskModal,
      newTaskInput: ''
    });
  };

  addNewTaskInput = val => {
    this.setState({
      newTaskInput: val
    });
  };

  render() {
    return (
      <div>
        <AddTaskModal
          display={
            this.state.showAddTaskModal ? 'showTaskModal' : 'hideTaskModal'
          }
          cancelAddTask={this.cancelAddTask}
          addNewTask={this.saveNewTask}
          addNewTaskInput={this.addNewTaskInput}
        />
        <div className='flexDisplay appContainer'>
          {!this.state.isAuthenticated ? (
            <Login login={this.login} />
          ) : (
            <>
              <p className='taskDisplay'>{this.state.selectedTask}</p>
              <TimeDisplay time={this.state.displayTime} />
              {this.state.selectedTask && this.state.intervalId ? (
                <div className='flexDisplay actionButtonContainer'>
                  {this.state.isRecording ? (
                    <StopTimer stopTimer={this.stopTimer} />
                  ) : (
                    <>
                      <ConfirmButton
                        text={'save'}
                        clickFunction={this.saveEntry}
                      />
                      <CancelButton
                        text={'delete'}
                        clickFunction={this.deleteEntry}
                      />
                    </>
                  )}
                </div>
              ) : null}
              <div className='fade_rule' />
              {this.state.isRecording || this.state.intervalId ? null : (
                <div>
                  <div className='taskButtonContainer'>
                    {this.state.tasks.map((task, index) => (
                      <TaskButton
                        key={task}
                        backgroundColour={
                          index % 2 === 0 ? 'backgroundOne' : 'backgroundTwo'
                        }
                        task={task}
                        setTask={this.setTask}
                      />
                    ))}
                  </div>
                  <ConfirmButton
                    text={'Add Task'}
                    clickFunction={this.toggleTaskModal}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;

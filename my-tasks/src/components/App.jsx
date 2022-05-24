import React, { Component } from 'react';
import { connect } from 'react-redux';
/* import { bindActionCreators } from 'redux'; */
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder(){
        this.props.addReminder(this.state.text);
    }
    deleteReminder(){
        this.props.deleteReminder(id);
    }

    renderReminder(){
        const { reminders } = this.props;
        return(
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div className="list-item">
                                    <div>{reminder.text}</div>
                                    <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                                    {/* <div>{reminder.dueDate}</div> */}
                                </div>
                                <div className="list-item delete-button" onClick={this.deleteReminder(reminder,id)}></div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render(){
        return(
            <div className="App">
                <div className="title">My-Tasks</div>
                <div className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={event => this.setState({text: event.target.value})} />
                        {/* <input type="datetime-local" className="form-control" onChange={event => this.setState({ dueDate: })} /> */}
                    </div>
                    <button type="button" className="btn btn-success" onClick={() => this.addReminder()}>+</button>
                </div>
                { this.renderReminder() }
                <div className="btn btn-danger" onClick={() => this.props.clearReminders()}>
                    Clear
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addReminder}, dispatch);
}

export default connect(null, { addReminder, deleteReminder, clearReminders },App);
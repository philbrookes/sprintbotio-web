import React, {Component} from 'react'
import {ListGroup, ListGroupItem, Panel} from "react-bootstrap";

class Features extends Component {
    render() {
        return (<Panel>
            <Panel.Heading>Some key features</Panel.Heading>
            <Panel.Body>
                <ListGroup>
                    <ListGroupItem header="Monitors backlog">Watches the backlog and arranges backlog meetings at a suitable time for all attendees - as well as sending invites.</ListGroupItem>
                    <ListGroupItem header="Automated Pointing Poker">SprintBot asks for votes and aggregates averages.</ListGroupItem>
                    <ListGroupItem header="Automated Daily Standup">Tell the SprintBot your status for the day, and flag if you are blocked or not.</ListGroupItem>
                    <ListGroupItem header="Find Next Task">SprintBot tracks all work in the sprint and can suggest next actions when a user is idle.</ListGroupItem>
                    <ListGroupItem header="Status Report">SprintBot is constantly gauging the progress of the sprint and can be queried for estimated delivery dates</ListGroupItem>

                    <ListGroupItem header="Integrates with your existing tools">Currently available integrations: Jira, Slack, Google Calendar, Google Chat</ListGroupItem>
                </ListGroup>
            </Panel.Body>
        </Panel>)
    }
}

export default Features;
import React, { Component } from "react";

class Messages extends Component {
    renderMessage(message, index) {
        const { member, text } = message;
        const { currentMember } = this.props;
        const messageFromMe = member && member.id === currentMember.id;

        const backgroundColor = member && member.clientData && member.clientData.color ? member.clientData.color : 'transparent';
        const username = member && member.clientData ? member.clientData.username : 'Unknown User';

        const className = messageFromMe
            ? "Messages-message currentMember"
            : "Messages-message";

        return (
            <li className={className} key={index}>
                <span
                    className="avatar"
                    style={{ backgroundColor }}
                />
                <div className="Message-content">
                    <div className="username">{username}</div>
                    <div className="text">{text}</div>
                </div>
            </li>
        );
    }

    render() {
        const { messages } = this.props;

        return (
            <ul className="Messages-list">
                {messages.map((m, index) => this.renderMessage(m, index))}
            </ul>
        );
    }
}

export default Messages;







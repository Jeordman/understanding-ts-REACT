import React, { useState } from 'react';

import { RouteComponentProps } from 'react-router-dom';

/* Connect Redux */
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../store/index.model';

import { practice, addMessage } from '../store/todo/actions'

const mapStateToProps = (state: RootState) => ({
    practice: state.todo.practice,
    messages: state.todo.messages,
})

const mapDispatchToProps = {
    practice,
    addMessage,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & RouteComponentProps ; //can add other props as well
/* --------------- */

const Side: React.FC<Props> = (props: Props) => {

    const [message, changeMessage] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message) {
            props.addMessage({
                user: 'default',
                message
            }) 
            // props.history.push("/");
            return changeMessage('')
        }

        alert('Make sure you have a value entered!')
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
            placeholder='Enter new message' 
            value={message} name="message" 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeMessage(event.target.value)} 
            />
        </form>
    )
}


export default connector(Side);
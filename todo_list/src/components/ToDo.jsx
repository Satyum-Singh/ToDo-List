import React from 'react'
import { FontAwesomeIcon } from '~@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDo = ({ task }) => {
    return (
        <div className="Todo">
            <p>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
                <FontAwesomeIcon icon={faTrash} className="trash-icon" />
            </div>
        </div>
    )
}
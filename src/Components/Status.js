import React from 'react'

function Status(props) {

    const {issueCount} = props

    return (
        <div>
            {issueCount} issues open
        </div>
    )
}

export default Status

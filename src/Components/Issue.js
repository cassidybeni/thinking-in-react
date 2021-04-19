import React from 'react'

function Issue(props) {

    const {title, issue, date, author} = props

    return (
        <div>
            <h2>{title}</h2>
            <p>{issue} opened on {date} by {author}</p>
        </div>
    )
}

export default Issue

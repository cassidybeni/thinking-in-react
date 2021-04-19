
import React from 'react'
import Issue from "./Issue"
import Status from "./Status"

function Issues(props) {
    let allIssues = props.displayIssues.map((issue, i) => {
        return ( 
            <Issue 
                key = {i}
                title={issue.title} 
                issue={issue.issue} 
                author={issue.author} 
                date={issue.date} 
            />
        )
    })
    return (
        <div>
            <Status issueCount={props.displayIssues.length}/>
            {allIssues}  
        </div>
    )
}

export default Issues



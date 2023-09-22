import React from "react";

function App(){

    const comments=[
        {id:1,text:"first comment"},
        {id:2,text:"second comment"},
        {id:3,text:"third comment"}
    ]
    const title='blog post'
    const body='this is my blogpost'

    const isCommented=true;
    const commentBlock=(<div className="Comments">
    <h3>comments ({comments.length})</h3>
    <ul>
       {
        comments.map((comment,index)=>
            <li key={index}>{comment.text}</li>
        )
       }
    </ul>
</div>)
    return (
      <div className="container">
        <h1>{title.toLocaleUpperCase()}</h1>
        <p>{body}</p>
        {Math.random()*5*5}
       {isCommented ? commentBlock : null}
        
      </div>
        
    )
}

export default App;
import React from 'react';

function UserForm (props) {
    return (
        <div className="container">
            <h2>Welcome back,</h2>
            {props.users.map(user => {
                return (
                    <div className="content">
                       <h1>name: {user.name}</h1>     
                    </div>    
                )
            })}
        </div>
    )
}

export default UserForm;
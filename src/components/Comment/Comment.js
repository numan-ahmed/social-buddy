import React from 'react';

const Comment = (props) => {
    const {name, email} = props.comment;
    return (
        <div>
            <p><strong>Name: </strong>{name}</p>
            <p><strong>Email: </strong>{email}</p>            
        </div>
    );
};

export default Comment;
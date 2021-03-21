import React from 'react';
import { useHistory } from 'react-router';
import PostDetails from '../PostDetails/PostDetails';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const showComment = id =>{
        const url = `post/${id}`;
        history.push(url);

    }

    return (
        <div>
            <h3> <strong>Id: {id}</strong> {title}</h3>
            <p>{body}</p>
            <button onClick={() => showComment(id)}>Show detail
            </button>
            
        </div>
    );
};

export default Post;
import React from 'react';
import { ListGroup} from 'reactstrap';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onDelite, onToggleLiked, onToggleImportant}) => {
    return(
        <ListGroup className="app-list list-group">
            {posts.map(element =>  {
                return(
                        <li key={element.id} className="list-group-item">
                            <PostListItem label={element.label} importent={element.importent}
                            like={element.like}
                            onDelite={() => onDelite(element.id)}
                            onToggleImportant={() => onToggleImportant(element.id)}
                            onToggleLiked={() => onToggleLiked(element.id)}/>
                        </li>
                    )
                }
            )}
        </ListGroup>
    )
}

export default PostList;
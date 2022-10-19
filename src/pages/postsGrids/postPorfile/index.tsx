import { PostProfileArea, PostProfileTitleArea, PostProfileContainer } from './styles';
import { useContext } from 'react';

import { PostsContext } from '../../../contexts/PostsContext';
import { NavLink } from 'react-router-dom';



export function PostProfile() {

    const { posts } = useContext(PostsContext)


    return (
        <PostProfileContainer>

            {posts.map(post => {
                return (
                    <div>
                        <PostProfileArea>
                            <PostProfileTitleArea>
                                <NavLink to={'/post/' + post.number} >
                                    <h2>{post.title}</h2>
                                </NavLink>
                                <span>{post.newDate}</span>
                            </PostProfileTitleArea>
                            <p>{post.body}</p>
                        </PostProfileArea>
                    </div>
                )
            })}

        </PostProfileContainer>
    );
}
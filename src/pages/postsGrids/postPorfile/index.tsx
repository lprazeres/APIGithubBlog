import { PostProfileArea, PostProfileTitleArea, PostProfileContainer } from './styles';
import {useContext } from 'react';

import { PostsContext } from '../../../contexts/PostsContext';

export function PostProfile() {

   const {posts} = useContext(PostsContext)

    return (
        <PostProfileContainer>

            {posts.map(post => {
                return (
                    <div>
                        <PostProfileArea>
                            <PostProfileTitleArea>
                                <h2>{post.title}</h2>
                                <span>{post.updated_at}</span>
                            </PostProfileTitleArea>
                            <p>{post.body}</p>
                        </PostProfileArea>
                    </div>
                )
            })}

        </PostProfileContainer>
    );
}
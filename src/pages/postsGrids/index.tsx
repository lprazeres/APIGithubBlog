import { PostsGridContainer, PostsGridArea } from "./styles";
import { UserProfile } from '../postsGrids/userProfile/index';
import { SearchButton } from "./searchButton";
import { PostProfile } from "./postPorfile";


export function PostsGrids() {
    return (
        <PostsGridContainer>
            <UserProfile />
            <SearchButton />
            <PostProfile />
        </PostsGridContainer>
    )
}
import { PostProfileArea } from './styles';
import {PostProfileTitleArea} from './styles';

export function PostProfile() {
    return (
        <PostProfileArea>
            <PostProfileTitleArea>
                <h2>TITLE</h2>
                <span>Data</span>
            </PostProfileTitleArea>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...</p>
        </PostProfileArea>
    );
}
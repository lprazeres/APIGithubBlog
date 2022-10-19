import { UserProfileContainer, UserProfileArea, UserProfileTextArea, UserProfileTitleArea, UserProfileIconsAreaSpace, UserProfileIconsArea } from './styles';
import { GithubLogo, Users, Smiley } from 'phosphor-react';
import {useContext } from 'react';
import { PostsContext } from '../../../contexts/PostsContext';


export function UserProfile() {

    const { profiles } = useContext(PostsContext)

    return (
        <UserProfileContainer>
            <UserProfileArea>
                <img src={profiles.avatar_url} />
                <UserProfileTextArea>

                    <UserProfileTitleArea>
                        <h1>{profiles.name}</h1>
                        <i>
                            <Smiley size={32} />
                        </i>

                    </UserProfileTitleArea>

                    <p>{profiles.bio}</p>

                    <UserProfileIconsAreaSpace>
                        <UserProfileIconsArea>
                            <a href='https://github.com/lprazeres'>
                                <i><GithubLogo size={32} /></i>
                            </a>
                            <span>-</span>
                            <span>{profiles.login}</span>
                        </UserProfileIconsArea >
                        <UserProfileIconsArea >
                            <i><Users size={32} /></i>
                            <span>-</span>
                            <span>{profiles.followers}</span>
                        </UserProfileIconsArea >
                    </UserProfileIconsAreaSpace>

                </UserProfileTextArea>

            </UserProfileArea>
        </UserProfileContainer >
    );
}
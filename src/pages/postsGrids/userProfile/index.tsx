import { UserProfileContainer, UserProfileArea, UserProfileTextArea, UserProfileTitleArea, UserProfileIconsAreaSpace, UserProfileIconsArea } from './styles';
import { GithubLogo, Users, Smiley } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export function UserProfile() {

    interface profiles {
        name: string,
        bio: string,
        login: string,
        followers: number,
    }

    const [profiles, setProfile] = useState({} as profiles);

    async function loadProfile() {
        const response = await fetch('https://api.github.com/users/lprazeres')
        const data = await response.json()

        setProfile(data)

    }

    useEffect(() => {
        loadProfile();
    }, []);

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
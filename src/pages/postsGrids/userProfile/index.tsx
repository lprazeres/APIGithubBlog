import { UserProfileContainer, UserProfileArea, UserProfileTextArea, UserProfileTitleArea, UserProfileIconsAreaSpace, UserProfileIconsArea } from './styles';
import ProfilePhoto from '../../../assets/Foto_Lucas_Silveira_Prazeres.jpeg';
import { GithubLogo, Users, Smiley } from 'phosphor-react';

export function UserProfile() {
    return (
        <UserProfileContainer>

            <UserProfileArea>
                <img src={ProfilePhoto} />

                <UserProfileTextArea>

                    <UserProfileTitleArea>
                        <h1>CAMERON WILLAN</h1>
                        <i>
                            <Smiley size={32} />
                        </i>

                    </UserProfileTitleArea>

                    <p>Sou formado em Engenharia de Materiais, e como grande entusiasta de tecnologia e inovação.</p>

                    <UserProfileIconsAreaSpace>
                        <UserProfileIconsArea>
                            <i><GithubLogo size={32} /></i>
                            <span>-</span>
                            <span>lprazeres</span>
                        </UserProfileIconsArea >
                        <UserProfileIconsArea >
                            <i><Users size={32} /></i>
                            <span>-</span>
                            <span>Seguidores</span>
                        </UserProfileIconsArea >
                    </UserProfileIconsAreaSpace>

                </UserProfileTextArea>

            </UserProfileArea>

        </UserProfileContainer>
    );
}
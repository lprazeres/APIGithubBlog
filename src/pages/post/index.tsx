import { TitlePostContainer, TitlePostArea, UserProfileIconsAreaSpace, UserProfileIconsArea, SetGithubArea } from './styles';
import { GithubLogo, Users, ArrowLeft, ChatDots} from 'phosphor-react';
import { NavLink } from 'react-router-dom';

export function Post() {

    return (
        <TitlePostContainer>
            <TitlePostArea>
                <SetGithubArea>
                    <UserProfileIconsArea>
                        <NavLink to='/' title='Menu'>
                        <ArrowLeft size={22} color="#3294F8" />
                        </NavLink>
                        <span>Voltar</span>
                    </UserProfileIconsArea>
                    <UserProfileIconsArea>
                        <span>Ver no GitHub</span>
                    </UserProfileIconsArea>
                </SetGithubArea>
                <h1>JavaScript data types and data structures</h1>

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
                    <UserProfileIconsArea >
                        <i><ChatDots size={32} /></i>
                        <span>-</span>
                        <span>Seguidores</span>
                    </UserProfileIconsArea >
                </UserProfileIconsAreaSpace>
            </TitlePostArea>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


        </TitlePostContainer>
    );
}
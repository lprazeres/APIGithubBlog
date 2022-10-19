import { useState, useEffect, useContext } from "react"
import { TitlePostContainer, TitlePostArea, UserProfileIconsAreaSpace, UserProfileIconsArea, SetGithubArea } from './styles';
import { GithubLogo, Users, ArrowLeft, ChatDots } from 'phosphor-react';
import { NavLink, useParams } from 'react-router-dom';
import { PostsContext } from "../../contexts/PostsContext";


export function Post() {


    const { profiles } = useContext(PostsContext)

    const { id } = useParams()
    const [post, setPost] = useState([]);

    useEffect(() => {
        loadRoute();
    }, []);

    async function loadRoute() {
        const response = await fetch(`https://api.github.com/repos/lprazeres/APIGithubBlog/issues/${id}`)
        const data = await response.json()
        setPost(data);
    }

    return (
        <TitlePostContainer>
            <TitlePostArea>
                <SetGithubArea>
                    <UserProfileIconsArea>
                        <NavLink to='/' title='Menu'>
                            <ArrowLeft size={22} color="#3294F8" />
                        </NavLink>
                    </UserProfileIconsArea>
                    <a href='https://github.com/lprazeres'>
                        <i><GithubLogo size={32} /></i>
                    </a>
                </SetGithubArea>
                <h1>{post.title}</h1>

                <UserProfileIconsAreaSpace>
                    <UserProfileIconsArea>
                        <i><GithubLogo size={32} /></i>
                        <span>-</span>
                        <span>{profiles.login}</span>
                    </UserProfileIconsArea >
                    <UserProfileIconsArea >
                        <i><Users size={32} /></i>
                        <span>-</span>
                        <span>{profiles.followers}</span>
                    </UserProfileIconsArea >
                    <UserProfileIconsArea >
                        <i><ChatDots size={32} /></i>
                        <span>-</span>
                        <span>Comentários</span>
                    </UserProfileIconsArea >
                </UserProfileIconsAreaSpace>
            </TitlePostArea>

            <p>{post.body}</p>


        </TitlePostContainer>
    );
}
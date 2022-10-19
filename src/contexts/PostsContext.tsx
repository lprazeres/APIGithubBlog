import { createContext, useState, useEffect } from "react"
import { useForm } from 'react-hook-form';
import { parseISO, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { NavLink, useParams } from 'react-router-dom';



interface Post {
    id: number;
    title: string;
    updated_at: string;
    parsedDate: Date;
    body: string;
    newDate?: string;
    number: string;
}

export const PostsContext = createContext({});


export function PostsProvider({ children }: any) {


    const [posts, setPosts] = useState([] as Post[]);
    const { register, handleSubmit } = useForm({});

    useEffect(() => {
        loadPost();
    }, []);

    async function loadPost() {
        const response = await fetch('https://api.github.com/repos/lprazeres/APIGithubBlog/issues')
        const data = await response.json()


        const updatedDatePosts: Post[] = data.map(post => {
            const updatedDatePost = {
                ...post,
                newDate: formatDate(post.updated_at)
            }
            return updatedDatePost;
        });

        setPosts(updatedDatePosts);
    }
    function formatDate(date: any) {
        const parsedDate = parseISO(date)

        const publishedDateRelativeNow = formatDistanceToNow(parsedDate, {
            locale: ptBR,
            addSuffix: true,
        })

        return publishedDateRelativeNow;

    }

    async function handleSearchPosts(data: any) {
        const searchTerm = data.query.toLowerCase();
        const response = await fetch(`https://api.github.com/search/issues?q=${searchTerm}user:lprazeres%20repo:API`)
        const searchedPosts = await response.json();
        if (searchedPosts.items) {
            setPosts(searchedPosts.items);
        }
    }

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
        <PostsContext.Provider
            value={{
                posts,
                handleSearchPosts,
                register,
                handleSubmit,
                profiles,
            }}
        >
            {children}
        </PostsContext.Provider>
    )
}
import { createContext, useState, useEffect } from "react"
import { useForm } from 'react-hook-form';
import { parseISO, format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';


interface Post {
    id: number,
    title: string,
    updated_at: string,
    parsedDate: Date,
    body: string,
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
        setPosts(data);
    }

    async function handleSearchPosts(data: any) {
        const searchTerm = data.query.toLowerCase();
        const response = await fetch(`https://api.github.com/search/issues?q=${searchTerm}user:lprazeres%20repo:API`)
        const searchedPosts = await response.json();
        if (searchedPosts.items) {
            setPosts(searchedPosts.items);
        }
    }

    

    return (
        <PostsContext.Provider
            value={{
                posts,
                handleSearchPosts,
                register,
                handleSubmit,
            }}
        >
            {children}
        </PostsContext.Provider>
    )
}
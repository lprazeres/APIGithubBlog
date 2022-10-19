import { SearchButtonContainer, CountPublicationArea, SearchFormArea } from './styles';
import {useContext } from 'react';
import { PostsContext } from '../../../contexts/PostsContext';

export function SearchButton() {

    const {handleSubmit, handleSearchPosts, register, posts} = useContext(PostsContext)

  

    return (

        <SearchButtonContainer>
            <CountPublicationArea>
                <p>Publicações:</p>
                <span>{posts.length} publicações</span>
            </CountPublicationArea>

            <SearchFormArea onChange={handleSubmit(handleSearchPosts)}>
                <input type='text' placeholder='Busque uma postagem...' {...register('query')} />
            </SearchFormArea>

        </SearchButtonContainer>


    );
}
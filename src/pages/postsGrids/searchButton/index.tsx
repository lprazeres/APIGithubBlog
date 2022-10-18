import { SearchButtonContainer, CountPublicationArea, SearchFormArea } from './styles';

export function SearchButton() {
    return (

        <SearchButtonContainer>
            <CountPublicationArea>
                <p>Publicações:</p>
                <span>6 publicações</span>
            </CountPublicationArea>

            <SearchFormArea>
                <input type='text' placeholder='Busque uma postagem...' />
            </SearchFormArea>

        </SearchButtonContainer>


    );
}
import styled from 'styled-components';

export const SearchButtonContainer = styled.div`
margin-top: 2.5rem;
display: flex;
flex-direction: column;
gap: 1.5rem;
div{
    margin: 0 auto;
}
p{
    color: ${props => props.theme['base-title']};
}
span{
    color: ${props => props.theme['blue']};
}
`;
export const CountPublicationArea = styled.span`
display: flex;
justify-content: space-between;

`;
export const SearchFormArea = styled.form`
display: flex;
  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${props => props.theme['base-input']};
    color: ${props => props.theme['blue']};
    padding: 1rem;
    &::placeholder {
        color: ${props => props.theme['white']};
    }
  }
`;
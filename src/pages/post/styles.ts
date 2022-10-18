import styled from 'styled-components';

export const TitlePostContainer = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 3rem;

p{
  width: 100%;
  max-width: 1120px;
  margin: auto 0;
  padding: 0 1.5rem;
}
`;

export const TitlePostArea = styled.div`
margin-top: -4rem;
background-color: ${props => props.theme['base-profile']};
padding: 1.5rem;
border-radius: 2rem;
display: flex;
flex-direction: column;
gap: 2rem;
justify-content: center;

h1{
    color: ${props => props.theme['base-title']};
    &:hover {
    color: ${props => props.theme['blue']};
    transition: background-color 0.2s;
   
}
}
i, span{
    color: ${props => props.theme['blue']};
    
    &:hover {
    color: ${props => props.theme['white']};
    transition: background-color 0.2s;
    border-bottom: 1px solid ${props => props.theme['white']};
}
}
`;

export const SetGithubArea = styled.div`
display: flex;
justify-content: space-between;
`;

export const UserProfileIconsArea = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
`;
export const UserProfileIconsAreaSpace = styled.div`
display: flex;
gap: 3.5rem;
align-items: center;
`;

import styled from 'styled-components';

export const UserProfileContainer = styled.div`
margin-top: -4rem;
`;

export const UserProfileArea = styled.div`
background-color: ${props => props.theme['base-profile']};
padding: 1.5rem;
border-radius: 2rem;


display: flex;
gap: 2rem;
align-items: center;

h1{
    color: ${props => props.theme['base-title']};
    &:hover {
    color: ${props => props.theme['blue']};
    transition: background-color 0.2s;
    border-bottom: 1px solid ${props => props.theme['blue']};
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
img{
    width: 10rem;
    height: 10rem;
    border-radius: 8px;
}
`;
export const UserProfileTextArea = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`;
export const UserProfileTitleArea = styled.div`
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

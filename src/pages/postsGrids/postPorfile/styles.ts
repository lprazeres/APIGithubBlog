import styled from 'styled-components';

export const PostProfileArea = styled.div`
width: 300px;
max-width: 350px;
display: flex;
flex-direction: column;
gap: 1.5rem;
padding: 2rem;
border-radius: 8px;

background-color: ${props => props.theme['base-post']};

h2{
color: ${props => props.theme['base-title']};
&:hover{
color: ${props => props.theme['blue']};
border-bottom: 1px solid ${props => props.theme['blue']};
}
}
span{
    font-size: 0.9rem;
}
`;

export const PostProfileTitleArea = styled.div`
display: flex;
justify-content: space-between;
`;
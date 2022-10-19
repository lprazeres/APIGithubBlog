import styled from 'styled-components';

export const PostProfileArea = styled.div`
width: 300px;
max-width: 350px;
height: 300px;
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
}
}
span{
    font-size: 0.9rem;
}
p {
   overflow: hidden;
   display: -webkit-box;
   -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
`;

export const PostProfileContainer = styled.div`
margin-top: 4rem;
display: grid;
margin-left: 10%;
grid-template-columns: repeat(2, 1fr);
justify-content: center;
gap: 2rem;
`;

export const PostProfileTitleArea = styled.div`
display: flex;
justify-content: space-between;
`;
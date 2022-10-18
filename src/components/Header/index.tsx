import { HeaderContainer, HeaderContent } from "./styles";
import Logo from '../../assets/Logo.png'


export function Header (){
    return(
        <HeaderContainer>
            <HeaderContent>
            <img src={Logo}></img>
            </HeaderContent>
        </HeaderContainer>
    );
}
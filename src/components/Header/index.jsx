import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { navLinks } from '../../constants'
import { ReactComponent as LogoSrc } from '../../assets/logo.svg'
import { colors, device, BaseContainer } from '../../styles/global'

const Container = styled(BaseContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    gap: 40px;

    @media ${device.medium} {
        margin-top: 40px;
    }
`

const Logo = styled(LogoSrc)`
    height: 48px;
    color: ${colors.primary};
    flex: 1;

    @media ${device.medium} {
        height: 68px;
    }
`

const Nav = styled.nav`
    display: flex;
    gap: 1rem;
    white-space: nowrap;

    @media ${device.medium} {
        gap: 3.5rem;
    }
`

const NavLink = styled(Link)`
    color: ${colors.primary};
    &:hover {
        text-decoration: underline;
    }

    @media ${device.medium} {
        font-size: 24px;
    }
`

export default function Header() {
    return (
        <Container largeWidth>
            <Link to="/">
                <Logo role="img" title="Logo de Kasa" />
            </Link>
            <Nav>
                {navLinks.map((item, index) => (
                    <NavLink to={item.to} key={`${item.name}-${index}`}>
                        {item.name}
                    </NavLink>
                ))}
            </Nav>
        </Container>
    )
}

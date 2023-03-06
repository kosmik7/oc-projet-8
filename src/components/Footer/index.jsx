import styled from 'styled-components'
import { ReactComponent as LogoSrc } from '../../assets/logo.svg'
import { device, BaseContainer } from '../../styles/global'

const Wrapper = styled.div`
    width: 100%;
    margin-top: 20px;
    background-color: #000;

    @media ${device.medium} {
        margin-top: 40px;
    }
`

const Container = styled(BaseContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    padding: 60px 0;
    color: #fff;

    @media ${device.medium} {
        gap: 25px;
    }
`

const Logo = styled(LogoSrc)`
    height: 40px;
`

const Text = styled.p`
    margin: 0;
`

export default function Footer() {
    return (
        <Wrapper>
            <Container>
                <Logo role="img" title="Logo de Kasa" />
                <Text>
                    © {new Date().getFullYear()} Kasa. All rights reserved
                </Text>
            </Container>
        </Wrapper>
    )
}

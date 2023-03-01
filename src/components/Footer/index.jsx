import styled from 'styled-components'
import { ReactComponent as LogoSrc } from '../../assets/logo.svg'
import { device } from '../../styles/global'

const Wrapper = styled.div`
    background-color: #000;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    margin-top: 20px;
    padding: 60px 0;
    color: #fff;

    @media ${device.medium} {
        gap: 25px;
        margin-top: 40px;
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

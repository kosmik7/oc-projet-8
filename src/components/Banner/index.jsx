import styled from 'styled-components'
import { device, flexCenter, BaseContainer } from '../../styles/global'

const Container = styled(BaseContainer)`
    position: relative;

    border-radius: 10px;
    overflow: hidden;
    margin-top: 18px;

    ${flexCenter}
    justify-content: flex-start;

    @media ${device.medium} {
        border-radius: 25px;
        margin-top: 48px;
        justify-content: center;
    }
`

const Image = styled.img`
    height: 112px;
    width: 100%;
    object-fit: cover;
    filter: brightness(70%);

    @media ${device.medium} {
        height: 224px;
    }
`

const Text = styled.p`
    position: absolute;
    color: #fff;
    font-size: 24px;
    padding: 20px;

    @media ${device.medium} {
        font-size: 48px;
    }
`

export default function Banner({ image, imageAlt, text }) {
    return (
        <Container largeWidth>
            <Image src={image} alt={imageAlt} />
            {text && <Text>{text}</Text>}
        </Container>
    )
}

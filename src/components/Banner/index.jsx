import styled from 'styled-components'
import bannerImage from '../../assets/banner-home.jpg'
import { device, flexCenter, BaseContainer } from '../../styles/global'

const Container = styled(BaseContainer)`
    position: relative;

    border-radius: 10px;
    overflow: hidden;
    margin-top: 16px;

    ${flexCenter}
    justify-content: flex-start;

    @media ${device.medium} {
        border-radius: 25px;
        margin-top: 62px;
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

export default function Banner() {
    return (
        <Container largeWidth>
            <Image
                src={bannerImage}
                alt="Un paysage de falaises en bord de mer"
            />
            <Text>Chez vous, partout et ailleurs</Text>
        </Container>
    )
}

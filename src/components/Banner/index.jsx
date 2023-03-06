import styled from 'styled-components'
import PropTypes from 'prop-types'

import { device, flexCenter, BaseContainer } from '../../styles/global'

const Container = styled(BaseContainer)`
    position: relative;
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
    border-radius: 10px;
    overflow: hidden;
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

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    text: PropTypes.string,
}

export default function Banner({ image, imageAlt, text }) {
    return (
        <Container>
            <Image src={image} alt={imageAlt} />
            {text && <Text>{text}</Text>}
        </Container>
    )
}

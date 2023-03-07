import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Container = styled(Link)`
    position: relative;
    aspect-ratio: 1/1;

    border-radius: 10px;
    overflow: hidden;

    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(#fff, #000);
        opacity: 0.5;
    }
`

const Image = styled.img`
    object-fit: cover;
    height: 100%;
`

const Text = styled.p`
    position: absolute;
    padding: 20px;
    color: #fff;
    font-size: 18px;
    z-index: 10;
`

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default function Card({ title, cover, id }) {
    return (
        <Container to={`/logement/${id}`} state={{ from: 'occupation' }}>
            <Image src={cover} alt="photo" />
            <Text>{title}</Text>
        </Container>
    )
}

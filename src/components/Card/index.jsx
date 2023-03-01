import styled from 'styled-components'

const Container = styled.div`
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

export default function Card({ title, cover }) {
    return (
        <Container>
            <Image src={cover} alt="photo" />
            <Text>{title}</Text>
        </Container>
    )
}

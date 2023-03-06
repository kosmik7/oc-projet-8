import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, BaseContainer, flexCenter } from '../../styles/global'

const WrapperCentered = styled(BaseContainer)`
    height: 100%;
    ${flexCenter}
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15vh;
    color: ${colors.primary};
    text-align: center;
`

const ErrorCode = styled.h1`
    font-size: clamp(96px, 25vw, 288px);
    font-weight: 600;
`
const ErrorMessage = styled.p`
    font-size: clamp(18px, 3.5vw, 36px);
`

const Exit = styled(Link)`
    margin: 15vh auto 0;
    font-size: 18px;
`

export default function Error() {
    return (
        <React.Fragment>
            <WrapperCentered>
                <Container>
                    <ErrorCode>404</ErrorCode>
                    <ErrorMessage>
                        Oups! La page que vous demandez n'existe pas.
                    </ErrorMessage>
                    <Exit to="/">Retourner sur la page d’accueil</Exit>
                </Container>
            </WrapperCentered>
        </React.Fragment>
    )
}

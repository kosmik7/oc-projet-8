import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { colors, device, BaseContainer } from '../../styles/global'
import { Slideshow, Collapse } from '../../components'
import data from '../../assets/logements.json'

const Container = styled(BaseContainer)`
    margin-top: 15px;
    color: ${colors.primary};

    @media ${device.small} {
        margin-top: 30px;
    }
`
const WrapperInfo = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.small} {
        flex-direction: row;
        justify-content: space-between;
    }

    & > div:first-child {
        flex: 1;
    }
`

const WrapperProfile = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    @media ${device.small} {
        flex-direction: column;
    }

    & > p {
        order: 1;
    }
`

const WrapperCollapse = styled.div`
    display: flex;
    margin-top: 15px;
    gap: 20px;
    flex-direction: column;

    @media ${device.small} {
        flex-direction: row;
        margin-top: 25px;
        gap: 75px;
    }

    & span {
        font-size: 13px;
        @media ${device.small} {
            font-size: 18px;
        }
    }

    & p {
        font-size: 12px;
        @media ${device.small} {
            font-size: 18px;
        }
    }
`

const Title = styled.h1`
    font-size: 18px;
    font-weight: 500;

    @media ${device.small} {
        font-size: 36px;
    }
`

const Location = styled.p`
    margin-top: 4px;

    font-size: 14px;
    font-weight: 500;

    @media ${device.small} {
        font-size: 18px;
    }
`

const Tags = styled.div`
    display: grid;
    margin-top: 10px;

    // les tags sont plus longs que sur la maquette
    grid-template-columns: repeat(auto-fit, minmax(86px, min-content));
    gap: 10px;

    @media ${device.small} {
        margin-top: 20px;
        grid-template-columns: repeat(auto-fit, 150px);
    }

    & > p {
        padding: 3px 10px;
        text-align: center;
        font-size: 10px;
        white-space: nowrap;
        text-overflow: ellipsis;

        background-color: ${colors.primary};
        color: #fff;

        border-radius: 5px;
        overflow: hidden;

        @media ${device.small} {
            padding: 3px 20px;
            font-size: 14px;
            border-radius: 10px;
        }
    }
`

const HostProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    & > p {
        font-size: 12px;
        width: min-content;

        @media ${device.small} {
            font-size: 18px;
        }
    }
    & > img {
        width: 32px;
        border-radius: 50%;
        @media ${device.small} {
            width: 64px;
        }
    }
`
const HostRating = styled.p`
    font-size: 18px;
    @media ${device.small} {
        font-size: 36px;
    }
`

export default function Logement() {
    const { id } = useParams()
    const logement = data.find((item) => item.id === id)

    return (
        <React.Fragment>
            <Slideshow pictures={logement.pictures} />
            <Container>
                <WrapperInfo>
                    <div>
                        <Title>{logement.title}</Title>
                        <Location>{logement.location}</Location>
                        <Tags>
                            {logement.tags.map((item, index) => (
                                <p key={`${item}-${index}`}>{item}</p>
                            ))}
                        </Tags>
                    </div>
                    <WrapperProfile>
                        <HostProfile>
                            <p>{logement.host.name}</p>
                            <img
                                src={logement.host.picture}
                                alt="Profil du bailleur"
                            />
                        </HostProfile>
                        <HostRating>
                            {'★'.repeat(logement.rating) +
                                '☆'.repeat(5 - logement.rating)}
                        </HostRating>{' '}
                    </WrapperProfile>
                </WrapperInfo>
                <WrapperCollapse>
                    <Collapse
                        key={`description-${logement.id}`}
                        title="Description"
                        description={logement.description}
                    />
                    <Collapse
                        key={`equipments-${logement.id}`}
                        title="Équipements"
                        description={logement.equipments.map((item, index) => (
                            <span key={`${item}-${index}`}>
                                {item}
                                <br />
                            </span>
                        ))}
                    />
                </WrapperCollapse>
            </Container>
        </React.Fragment>
    )
}

import React from 'react'
import styled from 'styled-components'
import { colors, device, BaseContainer } from '../../styles/global'
import { Banner, Card } from '../../components'
import data from '../../assets/logements.json'
import bannerImage from '../../assets/banner-home.webp'

const GridContainer = styled.div`
    margin-top: 22px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @media ${device.small} {
        margin-top: 42px;
        gap: 60px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

        padding: 50px;
        background-color: ${colors.background};
        border-radius: 25px;
    }
`

export default function Home() {
    return (
        <React.Fragment>
            <Banner
                image={bannerImage}
                imageAlt="Un paysage de falaises en bord de mer"
                text="Chez vous, partout et ailleurs"
            />
            <BaseContainer>
                <GridContainer>
                    {data.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            cover={item.cover}
                        />
                    ))}
                </GridContainer>
            </BaseContainer>
        </React.Fragment>
    )
}

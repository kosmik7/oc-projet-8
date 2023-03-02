import React from 'react'
import styled from 'styled-components'
import { colors, device, BaseContainer } from '../../styles/global'
import { Banner, Card } from '../../components'
import data from '../../assets/logements.json'
import bannerImage from '../../assets/banner-home.webp'

const GridContainer = styled(BaseContainer)`
    margin-top: 22px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;

    @media ${device.medium} {
        margin-top: 42px;
        gap: 60px;

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
            <GridContainer largeWidth>
                {data.map((item) => (
                    <Card key={item.id} title={item.title} cover={item.cover} />
                ))}
            </GridContainer>
        </React.Fragment>
    )
}

import React from 'react'
import styled from 'styled-components'
import { colors, device, BaseContainer } from '../../styles/global'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import data from '../../assets/logements.json'

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
            <Banner />
            <GridContainer largeWidth>
                {data.map((item) => (
                    <Card key={item.id} title={item.title} cover={item.cover} />
                ))}
            </GridContainer>
        </React.Fragment>
    )
}

import React from 'react'
import styled from 'styled-components'

import { Banner, Collapse } from '../../components'
import { device, BaseContainer } from '../../styles/global'
import bannerImage from '../../assets/banner-about.webp'
import data from '../../assets/about.json'

const Container = styled(BaseContainer)`
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${device.medium} {
        margin-top: 42px;
        gap: 30px;
    }
`
export default function Home() {
    return (
        <React.Fragment>
            <Banner image={bannerImage} imageAlt="Un paysage montagneux" />
            <Container width="medium">
                {data.map((item) => (
                    <Collapse
                        key={item.id}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </Container>
        </React.Fragment>
    )
}

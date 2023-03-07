import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { device, BaseContainer } from '../../styles/global'
import { ReactComponent as IcoArrow } from '../../assets/arrow.svg'

const Wrapper = styled(BaseContainer)`
    margin-top: 22px;

    @media ${device.small} {
        margin-top: 42px;
    }
`
const Container = styled.div`
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 255px;
    object-fit: cover;

    border-radius: 10px;
    overflow: hidden;

    @media ${device.small} {
        height: 355px;
        margin-top: 42px;
        border-radius: 25px;
    }

    @media ${device.medium} {
        height: 415px;
    }
`

const Arrow = styled(IcoArrow)`
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    z-index: 1;
    filter: drop-shadow(3px 2px 3px rgb(0 0 0 / 0.25));

    @media ${device.small} {
        width: 48px;
        height: 48px;
    }

    @media ${device.medium} {
        width: 96px;
        height: 96px;
    }
`

const ArrowRight = styled(Arrow)`
    right: 0;
    transform: translate(0, -50%);
`

const ArrowLeft = styled(Arrow)`
    left: 0;
    transform: scaleX(-1) translate(0, -50%);
`

const Counter = styled.p`
    position: absolute;
    bottom: 5%;
    right: 50%;
    transform: translate(50%, 0);

    font-size: 18px;
    color: #fff;
    text-shadow: 3px 2px 3px rgb(0 0 0 / 0.4);
`

Slideshow.propTypes = {
    pictures: PropTypes.array,
}

export default function Slideshow({ pictures }) {
    const multiple = pictures.length <= 1 ? false : true
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <Wrapper>
            <Container>
                <Image src={pictures[currentIndex]} />
                {multiple && (
                    <React.Fragment>
                        <Link>
                            <ArrowRight
                                src={IcoArrow}
                                onClick={
                                    currentIndex === pictures.length - 1
                                        ? () => setCurrentIndex(0)
                                        : () =>
                                              setCurrentIndex(currentIndex + 1)
                                }
                            />
                        </Link>
                        <Link>
                            <ArrowLeft
                                src={IcoArrow}
                                onClick={
                                    currentIndex === 0
                                        ? () =>
                                              setCurrentIndex(
                                                  pictures.length - 1
                                              )
                                        : () =>
                                              setCurrentIndex(currentIndex - 1)
                                }
                            />
                        </Link>
                        <Counter>
                            {currentIndex + 1}/{pictures.length}
                        </Counter>
                    </React.Fragment>
                )}
            </Container>
        </Wrapper>
    )
}

import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, device } from '../../styles/global'
import chevronIcon from '../../assets/chevron.svg'

const Chevron = styled.img`
    height: 18px;
    transform: rotate(0);
    transition: 0.25s transform ease;

    @media ${device.medium} {
        height: 28px;
    }
`

const Details = styled.details`
    width: 100%;
    font-size: 12px;
    color: ${colors.primary};
    border-radius: 0 0 5px 5px;

    & > p {
        padding: 20px;
        font-weight: 400;
        background-color: ${colors.background};
    }

    &[open] ${Chevron} {
        transform: rotateX(180deg);
    }

    @media ${device.medium} {
        font-size: 24px;
    }
`

const Summary = styled.summary`
    cursor: pointer;
    height: 30px;
    padding: 5px 20px;

    display: flex; // MDN: remove the disclosure triangle.
    align-items: center;
    justify-content: space-between;

    background-color: ${colors.primary};
    color: #fff;
    border-radius: 5px;

    @media ${device.medium} {
        height: 48px;
    }
`

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
}

export default function Collapse({ title, description }) {
    return (
        <Details>
            <Summary>
                <span>{title}</span>
                <Chevron src={chevronIcon} />
            </Summary>
            <p>{description}</p>
        </Details>
    )
}

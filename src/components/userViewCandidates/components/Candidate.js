/* eslint-disable max-lines-per-function */
import React from 'react';
import PropTypes from 'prop-types';
import './Candidate.css';
import { Card, Button } from 'antd';
import './ViewCandidates.css';
import {
    AGE_LABEL, PARTY_LABEL, VOTE
} from '../constants';

/**
 * Displays candidate details
 *
 * @function
 *
 * @param {object} - props
 * @return {component} - Candidate component
 */
const Candidate = ({
    id, pictureUrl, name, age, party, handleVote,
}) => {
    /**
     * Handles click on vote button
     *
     * @function
     */
    const handleClick = () => {
        handleVote(id);
    };

    return (
        <Card
            key={id}
            className="candidateCard"
            cover={(
                <img
                    className="candidateCard__image"
                    src={pictureUrl}
                    alt="candidate_picture"
                />
            )}
        >
            <p className="candidateCard__label --fontBig">{name}</p>
            <p className="candidateCard__label">{`${age} ${AGE_LABEL}`}</p>
            <p className="candidateCard__label">{`${PARTY_LABEL} ${party}`}</p>
            <Button
                type="primary"
                className="candidateCard__vote"
                onClick={handleClick}
            >
                {VOTE}
            </Button>
        </Card>
    );
};
export default Candidate;

Candidate.propTypes = {
    age: PropTypes.string.isRequired,
    handleVote: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    party: PropTypes.string.isRequired,
    pictureUrl: PropTypes.string.isRequired,
};

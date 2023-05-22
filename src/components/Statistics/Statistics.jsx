import React from "react";
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage, children}) => {
    return (
        <>
            <h2 className={css.title}>Statistics</h2>
                {total === 0 ? (<>{children}</>) : (
                    <>
                        <div className={css.statWrap}>
                            <ul className={css.statList}>
                                <li className={css.statItem}>Good: {good}</li>
                                <li className={css.statItem}>Neutral: {neutral}</li>
                                <li className={css.statItem}>Bad: {bad}</li>
                            </ul>
                        </div>
                        <p className={css.addData}>Total: {total}</p>
                        <p className={css.addData}>Positive feedback: {isNaN(positivePercentage) ? 0 : Math.round(this.props.positivePercentage)}%</p>
                    </>
                )}
        </>
    )
}

Statistics.propTypes = {
    children: PropTypes.object,
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
}

export default Statistics
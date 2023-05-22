import React, { Component } from "react";
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

class Statistics extends Component {
    render() {
        return (
            <>
                <h2 className={css.title}>Statistics</h2>
                    {this.props.total === 0 ? (<>{this.props.children}</>) : (
                        <>
                            <div className={css.statWrap}>
                                <ul className={css.statList}>
                                    <li className={css.statItem}>Good: {this.props.good}</li>
                                    <li className={css.statItem}>Neutral: {this.props.neutral}</li>
                                    <li className={css.statItem}>Bad: {this.props.bad}</li>
                                </ul>
                            </div>
                            <p className={css.addData}>Total: {this.props.total}</p>
                            <p className={css.addData}>Positive feedback: {isNaN(this.props.positivePercentage) ? 0 : Math.round(this.props.positivePercentage)}%</p>
                        </>
                    )}
            </>
        )
    }
}

Statistics.propTypes = {
    children: PropTypes.object,
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
}

export default Statistics
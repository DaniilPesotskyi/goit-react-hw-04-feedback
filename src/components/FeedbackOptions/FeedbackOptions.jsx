import css from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onFeedback }) {
  return (
    <div className={css.options}>
      <h2 className={css.title}>Please leave feedback</h2>
      <ul className={css.buttonsList}>
        <li>
          <button
            className={`${css.button} ${css.buttonGood}`}
            type="button"
            onClick={() => onFeedback(options[0])}
          >
            Good
          </button>
        </li>
        <li>
          <button
            className={`${css.button} ${css.buttonNeutral}`}
            type="button"
            onClick={() => onFeedback(options[1])}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            className={`${css.button} ${css.buttonBad}`}
            type="button"
            onClick={() => onFeedback(options[2])}
          >
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
}

export default FeedbackOptions;

import React from 'react';

import { useTranslation } from 'react-i18next';

import steps from 'constants/steps';
import useHiddenStep from 'hooks/useHiddenStep';

import Input from 'components/Input/Input';

import styles from './Calendar.module.scss';

const Calendar = ({ transactionDate, setTransactionDate, step, setStep }) => {
  const { t } = useTranslation();
  const { hidden } = useHiddenStep({ target: steps.DATE, step });

  const handleChange = e => {
    setTransactionDate(e.target.value);
    setStep(steps.CATEGORY);
  };

  return (
    <div className={`${styles.calendar} ${hidden ? styles.hidden : ''}  ${transactionDate ? styles.selected : ''}`}>
      <span className={styles.calendar__label}>{t('CALENDAR.LABEL')}</span>
      <Input type='date' name='transaction-date' value={transactionDate} onChange={e => handleChange(e)} />
    </div>
  );
};

export default Calendar;

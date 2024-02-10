import { IconContext } from 'react-icons';

import styled from './Statistics.module.css';
export const StatisticsItem = ({ item, icon }) => {
  return (
    <li className={styled.item}>
      <IconContext.Provider value={{ size: 50 }}>{icon}</IconContext.Provider>
      <span className={styled.counter}>{item.total}</span>
      <p className={styled.text}>{item.title}</p>
    </li>
  );
};

import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const icons = [
    <FaRegThumbsUp />,
    <MdPeople />,
    <MdOutlineProductionQuantityLimits />,
    <GiTreeDoor />,
  ];
  return (
    <>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.list}>
        {stats.map((item, i) => {
          return <StatisticsItem key={item.id} item={item} icon={icons[i]} />;
        })}
      </ul>
    </>
  );
};

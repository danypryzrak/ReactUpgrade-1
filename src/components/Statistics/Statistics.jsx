import css from './Statistics.module.css';
import { getRandomColor } from './randomHexColor';

export const Statistics = ({ stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.statList}>
        {stats.map(stat => {
          return (
            <li key={stat.id} style={{ backgroundColor: getRandomColor() }} className={css.item}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

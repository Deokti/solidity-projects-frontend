import cx from 'classnames';

import s from './main-page.module.scss';

interface MainPageProps {
  className?: string;
}

export const MainPage = (props: MainPageProps) => {
  const { className } = props;

  return (
    <div className={cx(s.root, className)}>
      Главная страница
    </div>
  );
};

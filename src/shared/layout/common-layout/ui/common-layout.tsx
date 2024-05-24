import cx from 'classnames';

import { ReactNode } from 'react';
import s from './common-layout.module.scss';

interface CommonLayoutProps {
  className?: string;
  activeRoute: string;
  children: ReactNode;
}

export const CommonLayout = (props: CommonLayoutProps) => {
  const { className, activeRoute, children } = props;

  return (
    <div className={cx(s.root, className)}>
      <div className={s.sidebar}>SIDEBAR</div>
      <div className={s.header}>HEADER</div>
      <div className={s.children}>CHILDREN</div>
    </div>
  );
};

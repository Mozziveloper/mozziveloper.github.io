import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../layout/components/Loading';
import WorldOfWarcraftDailyList from '../components/WorldOfWarcraftDailyList';
import WorldOfWarcraftWeeklyList from '../components/WorldOfWarcraftWeeklyList';
import WorldOfWarcraftEventuallyList from '../components/WorldOfWarcraftEventuallyList';
import { getWowTodoList } from '../modules/slice';

import classNames from 'classnames/bind';
import styles from '../../App.module.scss';

const cx = classNames.bind(styles);

const WorldOfWarcraftPage = () => {

    const { loading } = useSelector(state => state.wow);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWowTodoList());
    }, [dispatch]);

    return (
        <div className={cx('body-layout')}>
            <ul className={cx('wow-layout-view')}>
                <li><WorldOfWarcraftDailyList /></li>
                <li><WorldOfWarcraftWeeklyList /></li>
                <li><WorldOfWarcraftEventuallyList /></li>
            </ul>
            <Loading loading={loading}/>
        </div>
    );
};

export default WorldOfWarcraftPage;
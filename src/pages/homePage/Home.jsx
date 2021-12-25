import React from 'react'
import Charts from '../../components/charts/Charts';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './Home.css';

import { userData } from '../../dummyData';
import WidgetsSm from '../../components/widgetsSM/WidgetsSm';
import WidgetsLg from '../../components/widgetsLG/WidgetsLg';

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Charts data={userData} title='User Analytics' grid dataKey='ActiveUser'/> 
            <div className='homeWidgets'>
                <WidgetsSm />
                <WidgetsLg />
            </div>
        </div>
    )
}

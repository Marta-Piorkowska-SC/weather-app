import React from 'react';
import { Route, Switch } from 'react-router-dom'
import SearchPage from '../components/SearchPage'
import TodayPage from '../components/TodayPage'
import LongTermPage from '../components/LongTermPage'
import ErrorPage from '../components/ErrorPage'


const Page = () => {
    return (
        <Switch>
            <Route path="/" exact component={SearchPage} />
            <Route path="/today" component={TodayPage} />
            <Route path="/longTerm" component={LongTermPage} />
            <Route component={ErrorPage} />
        </Switch>
    );
}

export default Page;
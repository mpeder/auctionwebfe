import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { AuctionOverview } from './components/AuctionOverview';
import { LiveAuction } from './components/LiveAuction';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/liveauction' component={ LiveAuction } />
    <Route path='/auctionoverview' component={ AuctionOverview } />
</Layout>;

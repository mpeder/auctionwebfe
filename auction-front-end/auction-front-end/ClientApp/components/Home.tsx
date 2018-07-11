import * as React from 'react';
import { RouteComponentProps } from 'react-router';
const imageSrc = require('../images/logo.svg')

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
        <header >
                <img alt="logo" src={'../dist/images/logo.svg'} height="150" width="150" />
                <h2>Welcome to Brune Christensen</h2>
        </header>
            
            <p>This site will allow you to:</p>
            <ul>
                <li>Place bids in our online auctions</li>
                <li>View upcoming auctions and bidding history of past auctions</li>
            </ul>
            
        </div>;
    }

}

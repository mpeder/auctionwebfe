import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Welcome John</h1>
            <p>This site will allow you to  and past and future auctions.</p>
            <ul>
                <li>Place bids in our online auctions</li>
                <li>View upcoming auctions and bidding history of past auctions</li>
            </ul>
            
        </div>;
    }
}

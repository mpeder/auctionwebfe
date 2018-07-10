import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface LiveAuctionState {
    yourCurrentBid: number;
    highestBid: number;
    youWin: boolean;
}

export class LiveAuction extends React.Component<RouteComponentProps<{}>, LiveAuctionState> {
    constructor() {
        super();
        this.state = { yourCurrentBid: 0, highestBid: 10, youWin: false };

    }

    public render() {
        let higestbidcontent = this.state.youWin
            ? <p><em>YOU ARE THE HIGHEST BIDDER!</em></p>
            : <p>Make a higher bid if you want to win</p>;

        let buttonContent = this.state.youWin
            ? <button onClick={() => { this.incrementCounter() }} disabled>Increment</button>
            : <button onClick={() => { this.incrementCounter() }}>Increment</button>;

        return <div>
            <h1>Auction - "Old Crap"</h1>
            
            <p>Item for sale: "Some thingy"</p>

            {higestbidcontent}

            <p>Higest bid: <strong>{this.state.highestBid}</strong></p>
            <p>Your current bid: <strong>{this.state.yourCurrentBid}</strong></p>

            {buttonContent}
        </div>;
    }

    incrementCounter() {
        this.setState({
            yourCurrentBid: this.state.yourCurrentBid + 5
        });

        if (this.state.yourCurrentBid >= this.state.highestBid) {
            this.setState({
                youWin: true
            });
        }
    }
}

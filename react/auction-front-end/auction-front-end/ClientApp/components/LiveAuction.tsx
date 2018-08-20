import * as React from 'react';
import { RouteComponentProps } from 'react-router';
const imageSrc = require('../images/oldthingy.jpg')


interface LiveAuctionState {
    yourCurrentBid: number;
    highestBid: number;
    youWin: boolean;

}

export class LiveAuction extends React.Component<RouteComponentProps<{}>, LiveAuctionState> {
    fakeBiddingTimer: number = 0;

    constructor() {
        super();
        this.state = { yourCurrentBid: 0, highestBid: 10, youWin: false };
    }

    componentDidMount() {
        this.fakeBiddingTimer = setInterval(() => {
            this.setState({
                highestBid: this.state.highestBid + 5
            })
            this.checkMyBid();
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.fakeBiddingTimer);
    }

    public render() {
        let higestbidcontent = this.state.youWin
            ? <p><em>YOU ARE THE HIGHEST BIDDER!</em></p>
            : <p>Make a higher bid if you want to win</p>;

        let buttonContent = this.state.youWin
            ? <button onClick={() => { this.incrementCounter() }} disabled>Increase bid (+5)</button>
            : <button onClick={() => { this.incrementCounter() }}>Increase bid (+5)</button>;

        return <div>
            <h1>Auction - "Old Crap"</h1>

            <p>Item for sale: "Some thingy"</p>
            <img alt="item" src={'../dist/images/oldthingy.jpg'} height="250" width="250" />

            {higestbidcontent}

            <p>Higest bid: <strong>{this.state.highestBid}</strong></p>
            <p>Your current bid: <strong>{this.state.yourCurrentBid}</strong></p>

            {buttonContent}
        </div>;
    }

    checkMyBid() {
        
        if (this.state.yourCurrentBid >= this.state.highestBid) {
            this.setState({
                youWin: true
            });
        }
        else {
            this.setState({
                youWin: false
            });
        }
        
    }

    incrementCounter() {
        this.setState({
            yourCurrentBid: this.state.yourCurrentBid + 5
        });

        this.checkMyBid();
    }
}

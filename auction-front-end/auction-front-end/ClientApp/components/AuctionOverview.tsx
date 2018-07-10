import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import * as Moment from 'moment';



interface AuctionsOverviewState {
    auctions: Auction[];
    loading: boolean;
}

interface Auction {
    startTime: string;
    description: string;
    state: string;
    name: string;
}

export class AuctionOverview extends React.Component<RouteComponentProps<{}>, AuctionsOverviewState> {
    constructor() {
        super();
        this.state = { auctions: [], loading: true };

        fetch('api/AuctionsData/Auctions')
            .then(response => response.json() as Promise<Auction[]>)
            .then(data => {
                this.setState({ auctions: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : AuctionOverview.renderAuctionsTable(this.state.auctions);

        return <div>
            <h1>Auctions</h1>
            <p>These are all of our auctions.</p>
            {contents}
        </div>;
    }

    private static renderAuctionsTable(auctions: Auction[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Start Time</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {auctions.map(auction =>
                    <tr key={auction.name}>
                        <td>{auction.name}</td>
                        <td>{auction.description}</td>
                        <td>{auction.startTime}</td>
                        <td>{auction.state}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}





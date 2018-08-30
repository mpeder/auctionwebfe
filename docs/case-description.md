# Technical Hackathon Microsoft DK 2018

## What is it? 
Two days to dive deep into areas that you normally don't have time for.
 
## Tell me more? 
You will work in teams with your colleagues.
 
## But how technical will it be? 
You decide, and we will mix the teams. So don’t be scared.
 
 
# The Case
Brune Christensen Auction is a global auction house and the want to engage Microsoft in a digital transformation journey. As the first step they want to see examples of an online "betting" web site and the underlying infrastructure. If successful, this might replace some of their in-house auctions. If we convince them they will sign a significant Azure deal this quarter!
 

At the end of day two we will have a board of technical and non-technical people evaluating your team’s solution and we will pick the winner based on creativity, simplicity, flexibility and cost.

You have two days and might need to prioritize what is most important!

## First Priority Requirements

* Solution must be able to scale up during auctions and back down during most of the year.
	* Must be able to handle 100 bids per second. If you are brave, will try with 1000 bids.
	* In order for us to loadtest the bidding API must accept bids as described here: [API specs](https://github.com/mpeder/onlineauction/blob/master/apidefinition/bidding-api-swagger.yaml)
* The solution must be deployable world wide
* Newest bet must visible to all registered user within 500 ms
* Engineering excellence
	* CI & CD must be part of the solution!
	* All code and infrastructure must be in version control
	* Code quality must be measured and tracked
	* Tasks and progress must be visible to the customer during the development of the solution
	* Automated testing must be applied
	* Deployment must be possible with the system running
	* Monitoring of the solution must be enable


## Secondary Requirements
* UI must render on all types of devices and be useable
	* UI design is not important - we will hire a designer afterwards, but we need to see something working
* Describe how disaster recovery will work for the solution
* Full history of all bets must be available
* Security
	o The solution must allow login using a Facebook account
	o Both APIs and web site must be secured
	o Keys and secrets must be stored securely
	o The solution must be GDPR compliant

## Evaluation
At the end of day two, each team must present their solution (~20 mins):
* Describe and show each step in details.
* Share you learnings - what did and what didn’t work?
* Show us your architecture, explain the rationale behind your design decisions to customer and the economic impact, but the actual implementation is more important. 
* Load test of the bidding API

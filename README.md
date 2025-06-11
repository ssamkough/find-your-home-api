# auction

Create a service that handles running a once-around auction for properties. The service should be created in Node, using TypeScript. The player is one of four participants in a service that will ask each participant to bid blindly once. The winning bid will be awarded the property. There are 10 properties total, and each bidder starts with 1000 dollars. Create three AI bidders who will bid against the player. Create three different AI strategies to compete against the player. Be creative. Some examples:

- Random Bidder - Will bid randomly from their current remaining currency to acquire a property.
- The Minmaxer - Will take a look at the history of bids, and attempt to outbid everyone based on some business logic, based on the history of bids.
- Mean Bidder - Will bid based on the computed average of the winning bids.
- Greedy Bidder - Will attempt to outbid everyone as much as possible based on the history of bids.

After each bid submitted by the API, the results and the winner are returned to the player. Each AI also receives an update of the data to be stored or computed for future rounds. You may add APIs to start and finalize the bidding process and report the total wins and money spent. You may provide a crude front-end harness or a Postman collection for bid testing.

## commands

### setup

```bash
npm i
npm run dev
```

### curl

`GET` Item

```bash
curl -X GET http://localhost:3000/api/items/1749671085510 \
  -H "Content-Type: application/json"
```

`GET` Items

```bash
curl -X GET http://localhost:3000/api/items \
  -H "Content-Type: application/json"
```

`POST` Item

```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Sample Item"}'
```

`PUT` Item

```bash
curl -X PUT http://localhost:3000/api/items/1234567890 \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Item Name"}'
```

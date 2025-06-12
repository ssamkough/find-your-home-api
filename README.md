# Find Your HOME 🏠

Create a service that handles running a once-around auction for properties. The service should be created in Node, using TypeScript. The player is one of four participants in a service that will ask each participant to bid blindly once. The winning bid will be awarded the property. There are 10 properties total, and each bidder starts with 1000 dollars. Create three AI bidders who will bid against the player. Create three different AI strategies to compete against the player. Be creative. Some examples:

- Random Bidder - Will bid randomly from their current remaining currency to acquire a property.
- The Minmaxer - Will take a look at the history of bids, and attempt to outbid everyone based on some business logic, based on the history of bids.
- Mean Bidder - Will bid based on the computed average of the winning bids.
- Greedy Bidder - Will attempt to outbid everyone as much as possible based on the history of bids.

After each bid submitted by the API, the results and the winner are returned to the player. Each AI also receives an update of the data to be stored or computed for future rounds. You may add APIs to start and finalize the bidding process and report the total wins and money spent. You may provide a crude front-end harness or a Postman collection for bid testing.

## Setup ⚒️

1. Clone repository: `https://github.com/ssamkough/find-your-home-api`

2. CD into directory: `cd find-your-home-api`

3. Install dependencies: `npm i`

4. Create `.env` file with these contents:

```bash
PORT=3000
NODE_ENV=development
```

5. Run server: `npm run dev`

## Instructions 📃

You will be introduced to a prompt that will tell you to create a player. To interact with the server, the API Reference has all the available API endpoints.

To create your player, find the "`POST` Create a Player" endpoint. Once you create your player, you can create no more. The created player will act as "your" player.

After creating your player, you can start to place bids. To do that run the "`PUT` Make a Bid on a Single Property" endpoint. You just need to send an amount that your player wants to bid, and it'll compete with the AI bids that get automatically generated.

You have access to all the rest of the APIs once the server is running. You can list all the players, list all the properties, lsit single players or properties. You can list just properties that have owners.

Once all properties have been auctioned off, the API will continue to run, and you can still view all your data. The data is in-memory, so once you shut your server off, it'll lose all the data.

## API Reference 📜

### Player 🧍

`GET` Find a Player

```bash
curl -X GET http://localhost:3000/api/players/1 \
  -H "Content-Type: application/json"
```

`GET` Find Me

```bash
curl -X GET http://localhost:3000/api/players/4 \
  -H "Content-Type: application/json"
```

`GET` List All Players

```bash
curl -X GET http://localhost:3000/api/players \
  -H "Content-Type: application/json"
```

`POST` Create a Player

```bash
curl -X POST http://localhost:3000/api/players \
  -H "Content-Type: application/json" \
  -d '{"name": "Zibo Gao"}'
```

### Property 🛖

`GET` Find a Property

```bash
curl -X GET http://localhost:3000/api/properties/1 \
  -H "Content-Type: application/json"
```

`GET` List All Properties

```bash
curl -X GET http://localhost:3000/api/properties \
  -H "Content-Type: application/json"
```

`GET` List All Owned Properties

```bash
curl -X GET "http://localhost:3000/api/properties?is_owner=true" \
  -H "Content-Type: application/json"
```

`PUT` Make a Bid on a Single Property

```bash
curl -X PUT http://localhost:3000/api/properties/1 \
  -H "Content-Type: application/json" \
  -d '{"bid_amount": 200}'
```

## Tech Stack 💾

- JavaScript
- Node.js
- Express.js
- TypeScript
- npm

## Next Steps 📐

1. Store the data in a database instead of in-memory.
2. Create a simple UI to see the auctions.
3. Create more complex AI.
4. Be able to create / update / delete properties.

## Resources 🎒

- https://expressjs.com/
- https://blog.logrocket.com/express-typescript-node/

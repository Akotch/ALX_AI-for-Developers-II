# Items API

A minimal Node.js + Express REST API with endpoints for managing items.

## Features

- GET /items - Retrieve all items
- POST /items - Create a new item (requires 'name' field)
- In-memory data storage
- Input validation

## Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

## Running the API

Start the server with:

```bash
npm start
```

The API will be available at http://localhost:3000

## API Usage Examples

### Get all items

```bash
curl http://localhost:3000/items
```

### Create a new item

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"New Item"}' http://localhost:3000/items
```
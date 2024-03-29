# mock server

Mock server is a nodejs server that you can start locally, It is used for mocking with UI. With it you can

1. Mock the expected json response locally
2. Support many api endpoints
3. It resolves the CORS issue for UI

So how we can leverage it

1. Install the mockserver
   `npm install -g json-server`

2. Creae a data.json as here

3. Start the server at any endpoint
   `json-server --watch data.json --port 5000`

4. Call the api from you UI components

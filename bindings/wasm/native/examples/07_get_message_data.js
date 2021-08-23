async function run() {
    const { ClientBuilder } = require('../node/iota_client_wasm')

    // client will connect to testnet by default
    const client = await new ClientBuilder().build();

    const tips = await client.getTips();
    const message_data = await client.getMessage().data(tips[0]);
    const message_metadata = await client.getMessage().metadata(tips[0]);
    console.log(message_metadata);
    console.log(message_data);
}

run()
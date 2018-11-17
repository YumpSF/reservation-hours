/* eslint-disable no-console */
/* eslint-disable consistent-return */
const cassandra = require('cassandra-driver');

// change the contactPoints to your own end point
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'] });

client.connect((err) => {
  if (err) {
    return console.error(err);
  }
  console.log('Connected to cluster with %d host(s): %j', client.hosts.length, client.hosts.keys());
});

module.exports = client;

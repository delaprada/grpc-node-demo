const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = path.resolve(__dirname, 'protos/HelloWorld.proto');
const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
);

const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

module.exports = hello_proto;
const grpc = require('grpc');
const hello_proto = require('./proto');

function main() {
  console.log('client start......');
  // 调用Greeter的存根构造函数，指定服务器地址和端口
  const client = new hello_proto.Greeter('127.0.0.1:50051', grpc.credentials.createInsecure());

  // 构造调用服务的方法：使用事件或者回调函数去获得结果
  function getMessage(error, response) {
    if (error) {
      console.log(error);
      return;
    }
    console.log('Greeting: ', response.message);
  }

  function getText(error, response) {
    if (error) {
      console.log(error);
      return;
    }
    console.log('Text is :', response.text);
  }

  client.sayHello({ name: 'susie', city: '上海' }, getMessage);
  client.printAge({ age: '45' }, getText);
}

main();
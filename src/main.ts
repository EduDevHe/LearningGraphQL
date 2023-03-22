import { buildSchema, graphql } from "graphql";

const schema = buildSchema(`
  type Query {
    hello: String
    world: String
    helloWorld: String
  }
`);

const rootValue = {
  hello: () => "hello",
  world: () => "world",
  helloWorld: () => "hello world",
};

const source = `{
   hello
   world
   helloWorld
  }`;

graphql({ schema, source, rootValue }).then((response) => {
  console.log(response);
});

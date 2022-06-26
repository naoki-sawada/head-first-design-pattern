import Fastify from "fastify";
import { GumballMachine } from "./GumballMachine";

const config = {
  port: process.env.PORT || "3000",
  name: process.env.NAME || "Seattle",
  numberGumBalls: process.env.NUMBER_GUM_BALLS || "5",
};

const machine = new GumballMachine(
  config.name,
  parseInt(config.numberGumBalls, 10)
);

const fastify = Fastify({
  logger: true,
});

fastify.get("/count", async (request, reply) => {
  reply.type("application/json").code(200);
  return { count: machine.getCount() };
});

fastify.get("/location", async (request, reply) => {
  reply.type("application/json").code(200);
  return { location: machine.getLocation() };
});

fastify.get("/state", async (request, reply) => {
  reply.type("application/json").code(200);
  return { state: machine.getStateName() };
});

fastify.listen({ port: parseInt(config.port, 10) }, (err, address) => {
  if (err) throw err;
  console.log(`server listening on ${address}`);
});

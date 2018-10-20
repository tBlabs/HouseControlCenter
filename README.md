# EventsManager

It's a host for all my IoT devices. 

Internally it's a `express.js` HTTP server with REST API.

Manager utilizes `flows` and `actors`. 

## Flows

Single flow defines all actions what need to be done in case of some event.

Every action and every reaction is a HTTP request.

## Actors

Flows uses actors like `AirSensor` or `AirPurifier`. We can reach for them through DI container.

Every actor is a simple class with few methods defining his behavior. It can listen for some request or make some request to external system.
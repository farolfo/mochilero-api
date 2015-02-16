# Mochilero API

An open-source project to display hitchs of backpackers on live. Check it out at http://farolfo.github.io/hitchhike-GPS.

_Hitchhike GPS_ is a collaborative project. When travelling and being carried doing hitch on the road, mark it on the web app. This way we can calculate the bests roads and places for a backapacker to hitch!


## Application overview

The API runs in node, using expressjs and [sequelize](http://sequelizejs.com/) as the ORM to connect to a PostgreSQL database.
The UI code may be found [here](https://github.com/farolfo/mochilero-ui).

Currently under development, hosted at http://mochilero-api.herokuapp.com.

## API Definition

####/hitchs resource
The API provides the locations were backapackers were hitched on the road. This data can be created and retrieved in the /hitchs resource.

In order to post a new hitch, just post the coordenates.
```
> POST /hitchs
> {
>   lat: 37.765791,
>   long: -122.408219
> }

< 200
```

In order to retrieve the hitchs in a given zone, just tell us the lat/long and a radius in miles.
```
> GET /hitchs?lat=37.765791&long=-122.408219&radius=20
> Content-Type: application/json

< 200
< [
<   {
>     lat: 37.765791,
>     long: -122.408219
>   },
<   {
>     lat: 37.765792,
>     long: -122.408219
>   },
<   {
>     lat: 37.765793,
>     long: -122.408219
>   }
< ]
```

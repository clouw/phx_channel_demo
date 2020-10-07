# Server

```sh
cd server
docker-compose run --rm server bash -c "mix deps.get && cd assets && npm install"
docker-compose up
```

# Client Parcel

```sh
cd client-parcel
docker-compose run --rm client npm install
docker-compose up
```

# Client Static

```sh
open client-static/index.html
```
```sh
git clone git@github.com:clouw/phx_channel_demo.git
```

# Server

```sh
cd server
docker-compose build
docker-compose run --rm server bash -c "mix deps.get && cd assets && npm install"
docker-compose up
```

Visit [`localhost:4000`](http://localhost:4000) from your browser.

# Client Parcel

```sh
cd client-parcel
docker-compose build
docker-compose run --rm client npm install
docker-compose up
```

Visit [`localhost:1234`](http://localhost:1234) from your browser.

# Client Static

```sh
open client-static/index.html
```
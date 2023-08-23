# Nitro Minimal Starter

Look at the [Nitro documentation](https://nitro.unjs.io/) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
```

## Development Server

Start the development server on <http://localhost:3000>

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nitro.unjs.io/deploy) for more information.

Create Dockerfile and .dockerignore files:

<!-- Create image for the api for testing. will later be created from docker-compose -->
`docker build . -t nitro-mongodb`
<!-- run the image -->
`docker run -d -p 3000:3000 --name nitro nitro-mongodb`

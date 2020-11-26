<p align="center">
  <img src="https://res.cloudinary.com/dphrdrgmd/image/upload/v1606369843/Media_Stream_1_m4oswa_qabrsp.png" alt="logo" width="35%" />
</p>
<h1 align="center">
<a href="https://streammedia.netlify.app/">

Media Stream Web Application
</a>

</h1>

---

[![Netlify Status](https://api.netlify.com/api/v1/badges/57adf506-2a57-4336-a927-0916c27a0b00/deploy-status)](https://app.netlify.com/sites/streammedia/deploys)

Media Stream is an web application for streaming videos. User's can upload and stream video. MongoDb GridFs is used to store the video.

## Technology Stack

### Features

- Uploading videos to MongoDB GridFS
- Streaming videos from GridFS to a media player
- Listing, displaying, updating, and deleting media for User

### Components

- CSS: Styling web pages, html files
- Javascript: Primary programing language
- ReactJS: Javascript library for building User Interfaces
- Material-UI: UI library for design system
- styled-components: CSS-in-JS library

## Development

Media Stream is written in JavaScript with React. To get started with the code, follow this doc:

- [Architecture](https://github.com/tarunyadav1/mediastream-frontend/blob/master/docs/ARCHITECTURE.md)
- [Deploy](https://github.com/tarunyadav1/mediastream-frontend/blob/master/docs/DEPLOY.md)

## Requirements

- node --version >= 6
- yarn --version >= 3

## Local Installation

### Steps

- `git clone <repository-url>` , where `<repository-url>` is the link to the forked repository
- `cd mediastream-frontend`

**Note :** If you want to contribute, first fork the original repository and clone the forked repository into your local machine followed by `cd` into the directory

```sh
git clone https://github.com/USERNAME/mediastream-frontend.git
cd mediastream-frontend
```

- Install all the dependencies with `yarn install`
- Start the server with `yarn start`
- Visit your app at [http://localhost:3000](http://localhost:3000).

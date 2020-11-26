# Architecture

## High-level design

**Media Stream** uses [react](https://reactjs.org/tutorial/tutorial.html) local state and for global state management and data flow.

## Folder Structure

After creation and a successful build, your project should have the following file structure:

```
mediastream-frontend/
  docs
  public
  src
    auth
        PrivateRoute.js
        Signin.js
        api-auth.js
        auth-helper.js
    config
        config.js
    core
        Home.js
        Menu.js
    media
        DeleteMedia.js
        EditMedia.js
        Media.js
        MediaList.js
        MediaPlayer.js
        NewMedia.js
        PlayMedia.js
        RelatedMedia.js
    user
        DeleteUser.js
        EditProfile.js
        Profile.js
        Signup.js
        Users.js
        api-user.js
    App.css
    App.js
    MainRouter.js
    index.js
    routeConfig.js
    theme.js
  .gitignore
  README.md
  package.json
  yarn.lock
  package-lock.json

```

- `docs` - instructions for setting up the project locally, architecture of the project.
- `public` - static assets like images, external CSS files, HTML file
- `public/index.html` - is the page template.
- `src` - Javascript source code
- `src/index.js` - entry point for app
- `src/App.js` - top-level React component for app
- `src/MainRouter.js` - Routes for the App
- `src/theme.js` - material-ui theme customization

### `src/` directory

The src directory is broken into subdirectories for separate components:

- `auth` - authentication related
- `config` - backend server uri and other api's
- `core` - Home page and Menu component
- `media` - video related
- `user` - user related

## Data Flow in Components

<p align="center">
  <img src="https://res.cloudinary.com/dphrdrgmd/image/upload/v1606368260/Screenshot_2020-11-25_SHAMA_HOQUE_-_FULL-STACK_REACT_PROJECTS_-___build_modern_web_applications_using_the_mern_stack_2020_..._npx34t.png" alt="logo" width="100%" />
</p>

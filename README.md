[![Piral Logo](https://github.com/smapiot/piral/raw/main/docs/assets/logo.png)](https://piral.io)

# [Piral Sample](https://piral.io) &middot; [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/smapiot/piral/blob/main/LICENSE) [![Gitter Chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/piral-io/community)

> A netflix-like portal application with pilets.

:zap: This sample demonstrates the use of `piral` to build a dynamic app consisting of various micro frontends.

You can visit this demo at [netflix.samples.piral.cloud/](https://netflix.samples.piral.cloud/).

## Getting Started

Each directory represents a standalone part, which may even be its own repository. In each directory run:

```sh
npm install
```

More explicitly:

```sh
cd netflix-piral
npm install
cd ..

cd netflix-browse-pilet
npm install
cd ..

cd netflix-favorites-pilet
npm install
cd ..

# etc. (same for netflix-profile-pilet, netflix-search-pilet, and netflix-watch-pilet)
```

## More Information

The project was originally created by [Dante de Ruwe](https://github.com/dantederuwe/). He posted an article with [all details on dev.to](https://dev.to/dantederuwe/my-experiences-creating-a-netflix-clone-using-microfrontends-1n46).

## License

Piral and this sample code is released using the MIT license. For more information see the [license file](./LICENSE).

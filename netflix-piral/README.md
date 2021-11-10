# Netflix-piral: a Netflix clone using microfrontends

[![Netlify Status](https://api.netlify.com/api/v1/badges/b392f8ac-0ec3-44e8-bf19-1bfda4a7dfbd/deploy-status)](https://app.netlify.com/sites/netflix-piral/deploys)
[![](https://img.shields.io/website?color=2b7489&style=flat-square&up_message=netflix.deruwe.me&url=https%3A%2F%2Fnetflix.deruwe.me)](https://netflix.deruwe.me)


<p>
    <span>A Netflix clone using</span>
    <span>
    <a target="_blank" href="https://reactjs.org">
        <img id="react-logo" src="https://i.imgur.com/gNxwwn1.png" height="10" />
        &nbsp;React
    </a>
    </span>
    <span className="text-lightgray">and</span>
    <span>
    <a target="_blank" href="https://piral.io">
        <img id="piral-logo" src="https://piral.io/logo-simple.f8667084.png" height="10" />
        &nbsp;Piral
    </a>
    </span>
    <span>by</span>
    <span>
    <a target="_blank" href="https://deruwe.me">
        Dante De Ruwe
    </a>
    </span>
</p>

**Read more**:  In [this DEVCommunity article](https://dev.to/dantederuwe/my-experiences-creating-a-netflix-clone-using-microfrontends-1n46), I go over my experiences.

[![](https://i.imgur.com/J63Qkfy.jpg)](https://netflix-piral.deruwe.me)


## Application overview

You can find the application online on [netflix.deruwe.me](https://netflix.deruwe.me). 

This application is a Netflix clone with some basic functionalities. There is a `Browse` page where the user can discover showcases of trending series and movies, top rated ones, etc. 

Of course, to find a specific movie or series, the user can also use the provided `Search` bar.

Every media tile also has a `Favorites` toggle in the top right corner. Clicking it adds the series or movies to the user's favorites list, to be found on the favorites page.

The user can switch accounts via the `Profile` option in the top right. All favorites are linked to the specific account.

*It is worth noting that this demo project does not come with a custom backend: all data is coming from a 3rd party API, the accounts are dummy accounts, and the favorites are stored in localstorage.*

## Impressions

<img src="https://media.giphy.com/media/9S16de4Yb3kSi1HMLx/giphy.gif"/>
<img src="https://media.giphy.com/media/rOa1PlSAnA4hgHV7z3/giphy.gif"/>

## Microfrontends
This project consists of multiple microfrondends (in the Piral framework called "Pilets"). You can find the code for them here:


[![Browse pilet](https://github-readme-stats.vercel.app/api/pin/?username=dantederuwe&repo=netflix-browse-pilet&theme=dark&icon_color=2B7489)](https://github.com/dantederuwe/netflix-browse-pilet)
[![Profile pilet](https://github-readme-stats.vercel.app/api/pin/?username=dantederuwe&repo=netflix-profile-pilet&theme=dark&icon_color=2B7489)](https://github.com/dantederuwe/netflix-profile-pilet)
[![Watch pilet](https://github-readme-stats.vercel.app/api/pin/?username=dantederuwe&repo=netflix-watch-pilet&theme=dark&icon_color=2B7489)](https://github.com/dantederuwe/netflix-watch-pilet)
[![Favorites pilet](https://github-readme-stats.vercel.app/api/pin/?username=dantederuwe&repo=netflix-favorites-pilet&theme=dark&icon_color=2B7489)](https://github.com/dantederuwe/netflix-favorites-pilet)
[![Search pilet](https://github-readme-stats.vercel.app/api/pin/?username=dantederuwe&repo=netflix-search-pilet&theme=dark&icon_color=2B7489)](https://github.com/dantederuwe/netflix-search-pilet)

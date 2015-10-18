# generator-ui

A Yeoman generator for scaffolding simple standalone UI components.

![Yeoman](/yeoman.png)

## Built-in Packages

* [Less](http://lesscss.org/): CSS Preprocessor
* [Lesshat](http://lesshat.madebysource.com/): Less mixin library
* [Bootstrap](http://getbootstrap.com/): Responsive CSS framework
* [Font Awesome](https://fortawesome.github.io/Font-Awesome/): Font icons
* [RequireJS](http://requirejs.org/): Asynchronous JavaScript file and module loader
* [jQuery](https://jquery.com/): Feature-rich JavaScript library
* [Hogan.js](http://twitter.github.io/hogan.js/): Templating engine
* [The Intern](https://theintern.github.io/): Testing framework
* [Grunt](http://gruntjs.com/): Task runner

## Creating a new ui-component

1. Setup [npm](https://nodejs.org/) properly for your development environment.

2. Install [Yeoman](http://yeoman.io/) and its required libraries:

```
npm install -g yo grunt-cli
```

3. Install the [ui-component](https://github.com/fknussel/generator-ui) generator:

```
npm install -g generator-ui
```

4. Create a new directory and initialize a Git repo on it for your new ui-component:

```
mkdir your-project
cd your-project
git init
git remote add origin https://github.com/some-user/some-project.git
```

7. Run the generator:

```
yo ui
```

8. Answer the questions.

9. **STRONGLY RECOMMENDED:** commit the generated code to your git repository before making any modifications. This will make it much easier to see a diff of the work you have done vs. the generator output.

```
git add --all
git commit -m "Initial commit"
```

## Your code

See the `README.md` file in your newly created ui-component for more information.

## Release Versions

This repo uses [grunt-bump](https://github.com/gruntjs/grunt-bump) and Semantic Versioning to version and tag releases. To release a new version, run the appropriate command:

```
grunt release:major       # bump major version, eg. 1.0.2 -> 2.0.0
grunt release:minor       # bump minor version, eg. 0.1.3 -> 0.2.0
grunt release:patch       # bump patch version, eg. 0.0.1 -> 0.0.2
grunt release:prerelease  # bump pre-release version, eg. 1.0.0 -> 1.0.0-1
```

Make sure to push tags:

```
git push --tags origin master
```

Publish the package to npm's public registry:

```
npm publish
```

To make sure everything worked just fine, go to [http://npmjs.com/package/generator-ui](http://npmjs.com/package/generator-ui).

**Heads up!** To publish, you must have a user on the npm registry. If you don't have one, create it with `npm adduser`. If you created one on the site, use `npm login` to store the credentials on the client. You can use `npm config ls` to ensure that the credentials are stored on your client. Check that it has been added to the registry by going to [http://npmjs.com/~](http://npmjs.com/~).

## Semantic Versioning

Given a version number `MAJOR.MINOR.PATCH`, increment the:

1. `MAJOR` version when you make incompatible API changes,
2. `MINOR` version when you add functionality in a backwards-compatible manner, and
3. `PATCH` version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the `MAJOR.MINOR.PATCH` format.

See the [Semantic Versioning](http://semver.org/) specification for more information.

## Release History

See the [CHANGELOG](CHANGELOG.md).

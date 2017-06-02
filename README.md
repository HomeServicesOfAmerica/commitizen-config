### Commitizen-Config

This is our company commitizen configuration. We uses cz-bespoke to generate a commitizen adapter.


### Global Installation
It is recommended to configure commitizen globally on your computer so you can take advantage in every git repository.

To install the packages and configure commitizen, run the following:
```bash
# Install commitizen globally
npm i -g commitizen

# Install commitizen adapter globally
npm i -g @concierge-auctions/commitizen-config

echo "{ \"path\": \"@concierge-auctions/commitizen-config\" }" > ~/.czrc

```

Now you can commit with `git cz` instead of `git commit`!


#### Troubleshooting
Because the adapter is in a scoped npm package, an `.npmrc` is likely to be required in the directory you install from. An `.npmrc` file has been checked in, but this is worth noting.

Another source of problems is a turf war between npm and yarn. I would recommend installing both dependencies using one of the, and uninstalling both dependencies from the other (if applicable).




### Repo Installation
To add commitizen to a repo, do the following:

1. Install commitizen globally. (This isn't necessary, but makes using the cli tool easier.)
```bash
$ yarn global add commitizen
```

2. Initialize our commitizen adapter in the repo. (This may take a few moments)
```bash
$ commitizen init @concierge-auctions/commitizen-config --save-dev
```

3. Add commitizen to devDependencies
```bash
$ yarn add --dev commitizen
```

4. Add the following script to `package.json`. This will be used instead of `git commit`.
```json
"commit": "git-cz",
```

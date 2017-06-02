### Commitizen-Config

[![Greenkeeper badge](https://badges.greenkeeper.io/ConciergeAuctions/commitizen-config.svg?token=59cc7792b88ced92ab0369de025ee0ba392614c3f20eb1d72609695dcecdc526&ts=1496367396888)](https://greenkeeper.io/)

This is our company commitizen configuration. We uses cz-bespoke to generate a commitizen adapter.

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

# td-eslint-config

Global eslint rules for easy maitenance across any/all of my projects. 

- _should you wish to use my rules this config is shareable_

- _this config assumes you already have eslint installed on your project_

## Usage

1. Install with NPM 

```bash
npm install eslint-config-td-eslint-config --save-dev prettier --save-dev
```
 
1. A) or yarn

```bash
yarn add eslint-config-td-eslint-config --dev prettier --dev
```

**You will notice here we are installing prettier as well, which is a requirement for these rules.**

2. Add the rules to your projects eslint:

```JSON
"eslintConfig": {
    "extends": [
      "td-eslint-config"
    ]
  }
```

3. I also like to add the `lint` script for ease of use: 

```JSON
{
  "lint": "./node_modules/.bin/eslint './src/**/*.js'",
}
```

**Depending on your project set up substitute `src` for the primary directory**

# 4. That's it!
**Go write some pretty looking code ツ**
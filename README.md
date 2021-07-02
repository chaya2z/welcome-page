![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/chaya2z/chaya2z.github.io/Node.js%20CI/develop?style=for-the-badge)

# chaya2z.github.io

This repo is my GitHub-Pages source code.

## Development

```shell
# run
npm run start

# format
prettier --write src

# lint
eslint src
```

## Deploy

When push master branch, build and deploy to GitHub Pages

Detail: `.github/workflows/deploy-gh-page.yml`


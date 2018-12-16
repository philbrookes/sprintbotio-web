# SprintBot webserver

## Local Development
For updating the react web-page, cd into the `web` directory and run: `npm start`

For updating the API make the changes to the code, and then `make compile` to build a binary and `./tmp/_output/bin/sprintbotio-web` to execute it.

## Building the docker image
Run `make build-and-push TAG=<tag> REG=<registry> ORG=<registry organisation name>`
# flick

https://myflick.herokuapp.com/

## Local Setup
1. `npm install`
1. Add your flick username and password in `app.js`
1. `npm start`
1. [localhost:8080](http://localhost:8080/)

## Heroku Setup
1. Add your flick username and password in `app.js`
1. `rm -rf .git`
1. `git init`
1. `git add .`
1. `git commit -am "Initial commit"`
1. `heroku create`
1. `git push heroku master`
1. `heroku ps:scale web=1`
1. `heroku open`

For more details please refer to https://devcenter.heroku.com/articles/mean-apps-restful-api

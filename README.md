<h1 align="center">
<br>
  <img src="https://user-images.githubusercontent.com/44379034/75065561-76fcff00-54bf-11ea-8dfa-0eef1675f3f9.png" alt="transformaSebrae" width="120">
<br>
<br>
Tindev
</h1>

<p align="center">A project maked during the First MegaHack Online Powered by Shawee. #AdonisJs #reactjs

This project is a solution for the problema that Sebrae showed.

</p>

<div>
  <img src="https://user-images.githubusercontent.com/44379034/75064258-f76e3080-54bc-11ea-8deb-0dc3dece945b.gif" alt="demo" height="425">
</div>

<hr />

## Features

[//]: # "Add the features of your project here:"

This app features all the latest tools and practices in mobile development!

- **React Js** — A JavaScript library for building user interfaces
- **React Native** — A lib that provides a way to create native apps for Android and iOS
- **AdonisJs** — A web framework for Node Js
- **Postgres** — A powerful, open source object-relational database system that uses and extends the SQL language
- **Redis** — Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker
- **Docker** — Docker is a tool designed to make it easier to create, deploy, and run applications by using containers.
-

## Getting started

1. Clone this repo using git clone `https://github.com/fzuffo/transformaSebrae.git`
2. Follow instructions bellow

## Backend

1. Move yourself to the backend folder: `cd backend`
2. Rename the file `.env.example` to `.env` and add the your database config
3. Run `yarn install` or `npm install` to install dependencies
4. Run `adonis migration:run` to statup migrations
5. Run `adonis serve --dev` to start the server
6. Run `adonis kue:listen` to start listen job queue (optional, use to recovery password)

## Frontend

1. Move yourself to the frontend folder: `cd frontend`
2. Run `yarn install` or `npm install` to install dependencies
3. Run `yarn start` to start the server

### License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.

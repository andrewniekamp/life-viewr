# Life Viewr

By: Andrew Niekamp
A Code Challenge for Cedrus Digital

## Approach

* Fullstack Academy 'boilermaker' repository used for a basic foundation
  * [boilermaker](https://github.com/FullstackAcademy/boilermaker)
* Separate models for classifications to an organism
  * They may have descriptions or other values that warrant a separate but related table
* For the filter/search/sort, my thought was to either:
  * Have a filter property on the store which could be applied.
  * Build out the organisms Redux store to allow for filtering by passing in optional params
    * The default would be to load all organisms, but if filter data is passed in, it filters

## Installation/Setup

* Clone the repository
* Navigate to the repository directory
* Install dependencies
  * npm install
* Create a PostgreSQL database named: life-viewr
* Run the seed file
  * npm run seed
* Run the application
  * npm run start-dev

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
* With time, I would break out the organisms component into more components
  * There is a lot of repeated code, perhaps a separate component for the organism container as well as the form to add a new organism
* I have a form for adding a new organism if the user is logged in, but it looks like there is some error with actually creating related data that I have yet to sort out. The form does create a new organism, but does not seem to create the related data (kingdom, phylum, etc.) and though it does update the store with the new org, it isn't terribly useful without that data!
* I didn't get to the search/sort functionality, but that would have been next after ironing out the issue with adding a new organism
* I would also do more styling. I like design, but it can be time consuming to design and implement that design in such a short time.

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

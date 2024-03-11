# Search UI Code Challenge

Welcome to the Search UI coding challenge. You will be asked to build a small
application demonstrating your abilities in React and TypeScript. This challenge
is targeted towards mid to senior level engineers.

## Instructions

1. Clone this repository to your local machine
2. Create a new private repository on GitHub so others can't copy your work
3. Push your local clone up to your private repository while preserving history
4. Create a simple UI that meets the requirements below
 
### Additional Notes

* Use any libraries you like, keeping performance and bundle size in mind
* Use any UI framework you like, but don't spend too much time here
* This challenge should only take an hour or two

## Development

Install dependencies using `npm install`.

Run `npm start` to concurrently start the server and UI in development mode.

Open [http://localhost:3000](http://localhost:3000) to view the UI in the 
browser. The page will reload if you make edits.

### API

* The API server is run on port `3001` while the React UI is run on port `3000`
* Your UI can call `/api/data?search=[some-query]` directly since 
the request will be proxied to `http://localhost/api/data?...`
* You will to need access the API on port `3001` if you're testing it directly 
  from outside your application (e.g. http://localhost:3001/api/data?search=credit)


## The Problem

> As a consumer I want to research financial topics so I can make informed 
decisions.

## Requirements

```
Scenario: The application shall provide a search form
  Given the user visits the application
  Then a search field is displayed
  And a button is displayed with the text "Search"
```

```
Scenario: The search shall be triggerable by clicking the "Search" button
  Given the user has entered a search query
  When the user clicks the "Search" button
  Then matching search results are displayed
```

```
Scenario: The search shall be triggerable by pressing the Enter key
  Given the user has entered a search query
  And the input field is currently focused
  When the user clicks presses the Enter key on their keyboard
  Then matching search results are displayed
```

```
Scenario: A loading state shall be shown while search results are loading
  Given the user has entered a search query
  When the user submits their search
  Then a loading state is shown until the search results are available
```

```
Scenario: Search results shall show result title and description
  Given a user has performed a search
  When search results are displayed
  Then the title and description of each search result are displayed
```

```
Scenario: Clicking a search result shall open its URLs in a new tab
  Given search results are displayed
  When search result is clicked
  Then the URL of the search result is opened in a new tab
```

```
Scenario: Search results shall be marked as their content type
  Given search results are displayed
  Then each result is clearly marked for the end user as a video, a playlist, or a blog post in a readable way
```

```
Scenario: The user shall be informed if no search results match their query
  Given the user has performed a search
  When there are no results matching their search query
  Then the message "There are no results matching your query." is displayed
```

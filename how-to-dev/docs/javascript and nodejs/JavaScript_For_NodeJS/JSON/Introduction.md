# JSON (Java Script Object Notation)

## Common Uses of JSON

JSON is heavily used to facilitate data transfer in web applications between a client, such as a web browser, and a server. A typical example where such data transfer occurs is when you fill out a web form. The form data is converted from HTML to JavaScript objects to JSON objects and sent to a remote web server for processing. These transactions could be as simple as entering a search engine query to a multi-page job application.

When companies make their data public for other applications, like Spotify sharing its music library or Google sharing its map data, the information is formatted in JSON. This way, any application, regardless of language, can collect and parse the data.

## JSON Syntax

```JSON
{
  "student": {
    "name": "Rumaisa Mahoney",
    "age": 30,
    "fullTime": true,
    "languages": [ "JavaScript", "HTML", "CSS" ],
    "GPA": 3.9,
    "favoriteSubject": null
  }
}
```  

Note the following syntax rules for JSON:

- The curly braces, {..}, hold objects.
- The square brackets, [..], hold arrays.
- Data is stored in name-value pairs separated by a colon, :.
- Every name-value pair is separated from another pair by a comma, ,. Similarly, every item in an array is delimited by a comma as well. Trailing commas are forbidden.
- JSON property names must be in double-quoted (" ") text even though JavaScript names do not hold by this stringency.

A JSON data type must be one of the following:

- string (double-quoted)
- number (integer or floating point)
- object (name-value pair)
- array (comma-delimited)
- boolean (true or false)
- null

Try to find all the data types in this JSON example:
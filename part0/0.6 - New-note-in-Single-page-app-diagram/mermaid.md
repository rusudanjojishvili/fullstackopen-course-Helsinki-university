``` mermaid
    sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note left of server: e.preventDefault() prevents the default handling of form's submit and doesn't cause the new GET request. 
    Note left of server: notes.push(note) pushes the new note to the notes list and rerenders it on the page.
    Note left of server: In parallel, the browser sends POST request to the server to add a new note, with Content-Type: "application/json" in its headers by which the server would know how to correctly parse the data.

    server-->>browser: HTTP status code 201
    deactivate server

    Note right of browser: server responds with message: "note created"
```
**GraphQL  NodeJS**
Sample application to get started with GraphQL and NodeJS

#### Execute application
1. Browse into the application directory
2. npm i    
3. nodemon server.js

#### Test GraphQL flow
1. Open browser
2. Head to http://localhost:3000

#### Sample tests
##### Hello
**URL**
http://localhost:3000/hworld/graphql?
**Payload**
{
message
}

###### List Books
**URL**
http://localhost:3000/hworld/graphql?
**Payload**
{
books {
id,
name
}
}


##### Filter one book
**URL**
http://localhost:3000/book/graphql?
**Payload**
{
book(id:2) {
name
}
}


##### Mixed domain filters
**URL**
http://localhost:3000/book/graphql?

List books with Author
**Payload**
{
books {
id,
name,
author{
name
}
}
}


List all authors and their books
{
authors {
id,
name,
books {
name
}
}
}

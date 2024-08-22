
 API STRUCTURE

    http verbs

 REST ( Representanional State Transfer)
 when a user make a request, information is throuhg the server
 which is then filtered by the rest to give the user the information requested.


GET - this gets the information using the ID
PUT - this updates the entire information  selected
POST - this creates information
PATCH - this update partial
DELETE - this deletes selected information permanently.

 CRUD   
 CREATE READ UPDATE AND DELE
 CREATE - serves as the post
    READ - serves as the get
    UPDATE - serves as put
    DELETE -remind as delete

HEADER : in the header of the request, the client send the type of content that is able to recieved
 from the server . this is called the accept field and it insures that the server does not send data
 or information that connot be processed by the client.
 this type is called the MIME(multipurpose internet mail extension).It consists of type and suptype


PATH: request must contain a path to a resource that the operation should be performed on.
 in RESTfull api PATH should be designed to held the client to know what is happening

NOTE: the first part of the PATH should be the plural form of the resource. this makes easy to read and understand.this keeps the PATH neccessary for better understanding 


CONTENTS TYPES 
if a server Send a data pay load to a client the server must include a content type in the header of the response . this content header field alert the clients the type of data it is sending to the response body .
this content type that the server sends back in the response should be one of the options that the client specifies in the accept field of the request

STATUS OR RESPONSE CODE . 

1xx: Informational
100 Continue: The server has received the request headers and the client should proceed to send the request body.
101 Switching Protocols: The requester has asked the server to switch protocols and the server has agreed to do so.
2xx: Success
200 OK: The request was successful.
201 Created: The request was successful and a new resource was created.
202 Accepted: The request has been accepted for processing, but the processing is not complete.
204 No Content: The request was successful, but there is no content to send in the response.
3xx: Redirection
301 Moved Permanently: The requested resource has been permanently moved to a new URL.
302 Found: The requested resource has been temporarily moved to a different URL.
304 Not Modified: The resource has not been modified since the version specified by the request headers.
4xx: Client Errors
400 Bad Request: The server could not understand the request due to invalid syntax.
401 Unauthorized: The request requires user authentication.
403 Forbidden: The server understands the request but refuses to authorize it.
404 Not Found: The server could not find the requested resource.
405 Method Not Allowed: The request method is not supported for the requested resource.
409 Conflict: The request could not be completed due to a conflict with the current state of the resource.
5xx: Server Errors
500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.
501 Not Implemented: The server does not support the functionality required to fulfill the request.
502 Bad Gateway: The server received an invalid response from an inbound server while trying to fulfill the request.
503 Service Unavailable: The server is not ready to handle the request, usually due to maintenance or overloading.
These status codes help in diagnosing and resolving issues related to HTTP requests in your applications.








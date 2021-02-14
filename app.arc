@app
begin-app

@static
folder dist

@http
/api
  method get
  src src/api

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

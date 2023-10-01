function cors (req, res, next) {
  const ACCEPTED_HOSTS = [
    /localhost/,
    /fastdogcoding\.(com|ca|info|net|org|us)/
  ];

  // If the headers not present than don't attempt to provide cors headers.
  if (!req.headers.origin) {
    return next();
  }

  res.header('Access-Control-Allow-Origin', '');
  for (let i = 0, len = ACCEPTED_HOSTS.length; i < len; i++) {
    if (req.headers.origin.match(ACCEPTED_HOSTS[i])) {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
  }

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, contentType, observe');
  res.header('Access-Control-Allow-Methods', [ 'POST', 'DELETE', 'PUT', 'GET', 'PATCH', 'OPTIONS' ]);
  res.header('Access-Control-Allow-Credentials', true);

  if (req.method.toLowerCase() === 'options') {
    return res.send();
  }

  next();
}

module.exports = {
  cors
}

const cors = require('cors');

app.use(cors({
    origin: 'http://your-frontend-domain.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  
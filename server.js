const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname)));

// Locally: node server.js starts the listener.
// On Vercel: module is imported as serverless — listen is skipped.
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Speed Car running at http://localhost:${PORT}`);
  });
}

module.exports = app;

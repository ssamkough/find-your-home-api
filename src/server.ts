import app from './app';
import config from './config/config';

const server = app.listen(config.port, async () => {
  console.log(`Server running on port ${config.port}\n`);
  console.log(
    'Welcome to "Find Your HOME", a new TV show to help contestants find their next dream home(s).\n',
  );
  console.log(
    'To start, please create your player. Follow the README for instructions on how to do this.',
  );
});

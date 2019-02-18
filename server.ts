import * as express from 'express';

const app: express.Application = express();

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('Inside a Middleware!');
    next();
  }
);

app.get(
  '/',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.json({
      this: 'is root',
    });
  }
);

app.get(
  '/test',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.json({
      example: 'is this!',
    });
  }
);

app.listen(5050, () => {
  console.log('Listening Post 5050');
});

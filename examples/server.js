import express from 'express';

const app = express();

app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(app.get('port'), app.get('host'), (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://' + app.get('host') + ':' + app.get('port'));
});

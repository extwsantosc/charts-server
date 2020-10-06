import express from 'express';
import pingController from './controller/ping';
import graphicsController from './controller/graphics';

const PORT = process.env.PORT || 9000;

const app = express();
app.use(express.json());

app.use('/ping', pingController);
app.use('/graphics', graphicsController)

app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`)
});

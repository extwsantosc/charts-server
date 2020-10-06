import { Router } from 'express';
import * as scatterService from '../service/charts/scatter';

const router = Router();

router.get('/scatter', (req, res) => {
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(scatterService.generate(/* data para alimentar la grafica*/));
});

export default router;

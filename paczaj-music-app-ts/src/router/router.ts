import AppController from '../controller/appController';
import { Router } from 'express';
const router = Router();

router.get('/init-data', AppController.getInitData);
router.get('/artist/:artistId', AppController.getSingleArtist);
router.get('/release/:releaseId', AppController.getRelease);

export default router;

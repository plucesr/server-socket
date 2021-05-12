import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien !!!'
    });

});

router.post('/mensajes', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const viene = req.body.viene;


    res.json({
        ok: true,
        cuerpo,
        viene,


    });
});
router.post('/mensajes/:id', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const viene = req.body.viene;
    const id = req.params.id;

    res.json({
        ok: true,
        cuerpo,
        viene,
        id
    });

});



export default router;
import { Router } from 'express';
import fs from 'fs';

import { auth, catchAsync } from '../middleware';
import { User } from '../models';

const router = Router();
router.get('/', (req, res) => {
    res.json({ message: 'Wellcome to my sample website!' });
});

router.post(
    '/save/my-data',
    auth,
    catchAsync(async (req, res) => {
        if (
            req.get('content-length') &&
            Number(req.get('content-length')) <= 2400
        ) {
            let exisitngDataParsed = {};
            await fs.readFile(
                `user-pages.txt`,
                'utf8',
                async (err, exisitngData) => {
                    if (err) {
                        return;
                    }
                    if (exisitngData) {
                        exisitngDataParsed = JSON.parse(exisitngData);
                    }
                }
            );
            const data = JSON.stringify({
                ...exisitngDataParsed,
                [(req.session as any).userId]: req.body,
            });

            await fs.writeFile(`user-pages.txt`, data, (err) => {
                if (err) {
                    res.json({ message: err });
                }
                res.json({ message: 'File written!' });
            });
        } else {
            res.json({ message: 'File too large!' });
        }
    })
);

router.get(
    '/read/my-data',
    auth,
    catchAsync(async (req, res) => {
        await fs.readFile(`user-pages.txt`, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            }
            let parsedData: any = {};
            if (data) {
                parsedData = JSON.parse(data);
            }
            const userData = parsedData[(req.session as any).userId];
            if (userData) {
                res.send(userData);
            } else {
                res.send({ message: 'No data' });
            }
        });
    })
);

router.delete(
    '/delete/my-data',
    auth,
    catchAsync(async (req, res) => {
        let exisitngDataParsed: any = {};
        await fs.readFile(
            `user-pages.txt`,
            'utf8',
            async (err, exisitngData) => {
                if (err) {
                    return;
                }
                if (exisitngData) {
                    exisitngDataParsed = JSON.parse(exisitngData);
                }
            }
        );
        const data: any = {};
        Object.keys(exisitngDataParsed).forEach((key) => {
            if (key !== (req.session as any).userId) {
                data[key] = exisitngDataParsed[key];
            }
        });

        await fs.writeFile(`user-pages.txt`, JSON.stringify(data), (err) => {
            if (err) {
                res.json({ message: err });
            }
            res.json({ message: 'File written!' });
        });
    })
);

router.delete(
    '/delete/all-data',
    auth,
    catchAsync(async (req, res) => {
        await fs.unlink(`user-pages.txt`, (err) => {
            if (err) {
                res.json({ message: err });
            }
            res.send({ message: 'File removed!' });
        });
    })
);

router.get(
    '/me',
    auth,
    catchAsync(async (req, res) => {
        const user = await User.findById((req.session as any).userId);
        res.json(user);
    })
);

export { router as home };

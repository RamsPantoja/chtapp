import express from 'express';
import { Users } from './models';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server is up and running')
});

router.post('/new_chat/?user', (req, res) => {
    
});

router.post('/new_user', async (req, res) => {
    const user = req.body;
    
    const userHasBeenRegistered = await Users.findOne({email: user.email});

    if (!userHasBeenRegistered) {
        try {
            const newUser = await Users({
                userName: user.name,
                email: user.email
            });

            newUser.save();
        
            res.status(200).send('User registered')
            
        } catch (error) {
            res.status(500).send(error);
        }
    }
});


module.exports = router;
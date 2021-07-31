import express from 'express';
import Users from './models/User';
import FriendRequests from './models/FriendRequest';
import dbConnect from './models/dbConnect';
import FriendsChecker from './handlers/utils/FriendsChecker';
import nodemailer from 'nodemailer';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server is up and running')
});

router.post('/new_chat/?user', (req, res) => {
    
});

router.post('/new_user', async (req, res) => {
    const user = req.body;
    
    await dbConnect();

    const userHasBeenRegistered = await Users.findOne({email: user.email});

    if (!userHasBeenRegistered) {
        try {
            const newUser = await Users({
                userName: user.name,
                email: user.email,
                isOnline: true,
                img: user.img
            });

            newUser.save();
        
            res.status(200).send('User registered')
            
        } catch (error) {
            res.status(404).send(error);
        }
    } else {
        await Users.findOneAndUpdate({email: user.email},{
            img: user.img
        }, (err, doc) => {
            if (err) {
                res.status(401).send(err);
            }
        });
    }
});


router.post('/friend_request', async (req, res) => {
    const data = req.body;
    await dbConnect();

    if (data.receiverId === '') {
        return res.status(403).send('Introduce un email...');
    }

    const doesUserExist = await Users.findOne({email: data.receiverId});

    if (!doesUserExist) {
        return res.status(404).send('User doesn´t exist.');
    }

    const friendRequestExist = await FriendRequests.findOne({senderId: data.senderId, receiverId: data.receiverId});

    if (friendRequestExist) {
        return res.status(403).send('Friend request has been sent.');
    }

    const alreadyAreFriends = new FriendsChecker(data.senderId, data.receiverId);
    
    if (alreadyAreFriends.alreadyAreFriends()) {
        return res.status(403).send('Already are friends.')
    }
    
    try {
        const newNotification = new FriendRequests({
            senderId: data.senderId,
            senderName: data.senderName,
            senderImg: data.senderImg,
            receiverId: data.receiverId,
            isActive: true
        });
        
        if(newNotification) {
            newNotification.save();
            return res.status(200).send('Friend Request sended');
        }
    } catch (error) {
        return res.status(403).send('Something went wrong')
    }
});

router.get('/send_email', async (req, res) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'worddraco1@gmail.com', // generated ethereal user
            pass: 'ylpfyvdchfeusety', // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'worddraco1@gmail.com', // sender address
        to: "ramiro@r3d.com.mx", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html:`
        <!DOCTYPE html>
        <html 4mail>
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            
        </head>
        <body style="margin: 0;padding: 0;font-family: sans-serif;">
            <div class="email_template" style="display: block;">
                <div class="email_template__header" style="display: block;margin: 0;min-height: 100px;position: relative;background-color: #f04a23;">
                    <div class="horizontal__center_img" style="text-align: center;padding-top: 22px;">
                        <img class="paddind_img" src="https://firebasestorage.googleapis.com/v0/b/discordclonerams.appspot.com/o/ISOTIPO-blanco.png?alt=media&token=ca33a58e-f551-4baa-a717-842b511ad163" width="55px" height="55px" alt="isotipo r3d" style="padding: 0 1em;">
                        <img src="https://firebasestorage.googleapis.com/v0/b/discordclonerams.appspot.com/o/LOGOTIPO-blanco.png?alt=media&token=0e4a47a7-a5c5-422b-80a5-11f2a96a2dab" width="150px" height="55px" alt="logotipo r3d">
                    </div>
                </div>
                <div class="email_template__content" style="background-color: #fbfaf9;text-align: center;position: relative;width: 100%;height: 90%;">
                    <div class="email_template__content_grid" style="padding: 3em 0;max-width: 450px;margin: 0 auto;text-align: center;width: 100%;background-color: #fbfaf9;">
                        <p class="email_template__content__greetings" style="font-size: 28px;color: #707070;font-weight: lighter;line-height: normal;letter-spacing: 4px;">
                            ¡Hola, <span class="email_template__content__username" style="text-decoration: underline;margin: 0;">RamsPantoja</span>!
                        </p>
                        <div class="email_template__content__subcontent" style="text-align: center;margin-top: 4em;padding: 1em 0;">
                            <p class="email_template__content__subject" style="font-size: 18px;text-align: center;">Confirmamos tu registro en r3d.com.mx</p>
                            <p class="email_template__content__basictext" style="font-weight: lighter;text-align: center;font-size: 15px;letter-spacing: 0.5px;">Te damos la bienvenida a la primera plataforma para desarrollar y fabricar productos bajo demanda.</p>
                        </div>
                        <div class="email_template__content__subcontent2" style="text-align: center;margin-top: 1em;padding: 1em 0;">
                            <p class="email_template__content__basictext2" style="font-weight: lighter;font-size: 15px;letter-spacing: 0.5px;max-width: 300px;width: 100%;margin: 0 auto;">Para completar tu registro da click en el botón de abajo</p>
                            <div class="email_template__content__button__container" style="display: block;margin: 2em 0;">
                                <a href="https://web-r3d-frontend.vercel.app/sign_up/confirmated_email?token=" class="email_template__content__button" style="outline: none;border: none;text-decoration: none;color: #ffffff;font-size: 20px;letter-spacing: 0.69px;background-color: #f04a23;padding: 0.5em 2em;margin-top: 1em;border-radius: 6em;transition: 0.5s ease;text-align: center;">COMPLETAR REGISTRO</a>
                            </div>
                        </div>
                        <h2 class="email_template__content__slogan" style="font-size: 30px;color: #f04a23;font-weight: lighter;line-height: normal;letter-spacing: 4px;">CREAR NOS UNE</h2>
                        <div class="email_template__content__contact" style="margin: 2em;">
                            <p class="email_template__content__basictext" style="font-weight: lighter;text-align: center;font-size: 15px;letter-spacing: 0.5px;">
                                ¿Dudas? Escríbenos a <span style="color: #f04a23;text-decoration: underline;">contacto@r3d.com.mx</span> y con gusto las atenderemos.
                            </p>
                        </div>
                    </div>
                </div>
            </div> 
        </body>
        </html>`,
    });

    console.log(info)
})

module.exports = router;
import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles/signin.module.css';
import { getSession, signIn } from 'next-auth/client';

const SignIn = () => {
    return (
        <div className={styles.signInContainer}>
            <motion.div className={styles.signInForm}
            animate={{scale: 2}}
            transition={{duration: 0.5}}>
                <h2>Sign in</h2>
                <button className={styles.buttonToLogIn} onClick={() => signIn('google')}>Sign in with Google Account</button>
            </motion.div>
        </div>
    )
}

export async function getServerSideProps({req}) {
    const session = await getSession({req});

    if (session && req) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

export default SignIn;
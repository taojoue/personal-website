import Head from 'next/head'
import Image from 'next/image'
import myAvatar from './avatar.jpg'
import styles from '../styles/Home.module.css'
import { Avatar } from '@nextui-org/react';

export default function Skills() {
    return (
        <div className={styles.container}>
            <Avatar src={myAvatar} alt='Tao Jouet'/>
        </div>
    );
}
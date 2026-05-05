import styles from './styles/Avatar.module.css';
import Image from 'next/image';
import fs from 'fs';

export default function Avatar({user}: any) {
    let avatar;
    if (fs.existsSync(`../../assets/avatars/${user}.png`)) {
        avatar = user;
    } else {
        avatar = 'test';
    }
    return <Image src={`../../assets/avatars/${avatar}.png`} alt='Avatar' width='48' height='48' />
}
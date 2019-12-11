import React from 'react';
import HeaderRow from './HeaderRow';
import reload from '../assets/reload.png';
import back from '../assets/back.png';

const Header = props => {
    const {isRefresh, refresh} = props;
    const backHandling = () => {
        props.navigation.replace('Home');
    }
    return isRefresh ? <HeaderRow title='XKCD' onPress={refresh} icon={reload}/> : <HeaderRow title='XKCD' onPress={backHandling} icon={back}/>
}

export default Header;

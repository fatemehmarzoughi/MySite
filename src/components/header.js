import { BiMenu } from 'react-icons/bi'
import React, {useState, useContext} from 'react'
import { SITE_URL } from '../assets/General';
import context from '../context/context';
import { Getstrings } from '../assets/strings';

export function Header() {

    const [menuIsOpen , setMenuIsOpen] = useState(false)

    const contexts = useContext(context);
    const isFarsi = contexts.language === 'fa';

    const openMenu = () => {
      setMenuIsOpen(!menuIsOpen)
    }

    const changeLanguage = (lang) => {
      contexts.setLoading(true);
      contexts.setLanguage(lang);
    }


    return(
        <nav id='top' className="navbar navbar-expand-lg menuContainer container-xxl">
          <div className={menuIsOpen ? 'container headerContainer active' : 'container headerContainer'}  style={isFarsi ? {direction : 'rtl'} : {direction : 'ltr'}}>
            <ul className={menuIsOpen ? "container menu navbar-nav active" : "container menu navbar-nav"} style={{ order : 3}}>
              <li className="list">
                <a className='tagA' href='#home'>{Getstrings().navBarTitles.home}</a>
              </li>
              <li className="list">
                <a className='tagA' href='#portfolio'>{Getstrings().navBarTitles.portfolio}</a>
              </li>
              <li className="list">
                <a className='tagA' href='#about'>{Getstrings().navBarTitles.about}</a>
              </li>
              <li className="list">
                <a className='tagA' href='#contact'>{Getstrings().navBarTitles.contact}</a>
              </li>

              <li className="list" onClick={() => changeLanguage('eng')}>
                <a className='tagA' href='#top'>Eng</a>
              </li>
              <li className="list" onClick={() => changeLanguage('fa')}>
                <a className='tagA' href='#top'>Fa</a>
              </li>

            </ul>
            <a style={{order : 1, fontSize: 'xx-large'}} href={SITE_URL} className="navbar-brand tagA">{Getstrings().navBarTitles.brand}</a>
            <BiMenu style={{order : 2}} onClick={() => openMenu()} color={'#fff'} size={22} className="menuIcon"/>
          </div>
        </nav>
    )
}
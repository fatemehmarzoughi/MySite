
export function Header() {
    return(
        <nav className="navbar navbar-expand-lg menuContainer container-xxl">
          <div className='container'>
            <ul className="container menu navbar-nav">
              <li className="list">
                <a className='tagA' href='#home'>Home</a>
              </li>
              <li className="list">
                <a className='tagA' href='#portfolio'>Portfolio</a>
              </li>
              <li className="list">
                <a className='tagA' href='#about'>About US</a
              ></li>
              <li className="list">
                <a className='tagA' href='#contact'>Contact</a>
              </li>
            </ul>
            <a href="#home" className="navbar-brand tagA">Monck</a>
          </div>
        </nav>
    )
}
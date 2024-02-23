import { useState } from 'react';
import './header.scss'

const Header = () => {

    const [open, setOpen] = useState(false);    
    console.log(open);

    let data = new Date();
    console.log(data)

  return (
    <header>
        <div className="wi">
            <button
                onClick={e => open? setOpen(false): setOpen(true)}
            style={{border: 'none', outline: 'none'}}>Обзор</button>
        </div>
        <div className="time">
        </div>
        <div className="menu">
            {}
        </div>
    </header>
  )
}

export default Header

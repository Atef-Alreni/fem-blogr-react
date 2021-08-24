import {useState} from 'react';

function NavItem({children, title}){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li>
            <button className="button" onClick={() => setIsOpen(!isOpen)} >{title}</button>

            {isOpen && children}
        </li>
    );
}

export default NavItem;

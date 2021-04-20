import React, { useContext } from 'react';
import { Context } from '../index';
import {Navbar,Nav, Button, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import { DATA_ROUTE } from '../utils/consts';
import {observer} from 'mobx-react-lite'
const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
      
        <Navbar bg="primary" variant="dark">
              <Container>
        <NavLink to={DATA_ROUTE} style={{color:'white'}}>Начало</NavLink>
        {user.isAuth?
        <Nav className="ml-auto" style={{color:'white'}}>
        <Button variant='outline-light'>Админ панель</Button>
        <Button variant='outline-light' className='ml-2'>Выйти</Button>
        </Nav>
:
        <Nav className="ml-auto" style={{color:'white'}}>
            
            <Button variant='outline-light' onClick={()=>user.setIsAuth(true)}>Авторизация</Button>
           
            </Nav>
        
}
</Container>
         </Navbar>
  

    );
})

export default NavBar;
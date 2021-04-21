import React, { useContext } from 'react';
import { Context } from '../index';
import {Navbar,Nav, Button, Container} from 'react-bootstrap';
import {NavLink, useHistory} from 'react-router-dom'
import { ADMIN_ROUTE, DATA_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import {observer} from 'mobx-react-lite'
const NavBar = observer(() => {
    
    const history=useHistory()
    const {user} = useContext(Context)
 
    return (
      
        <Navbar bg="primary" variant="dark">
              <Container>
        <NavLink to={DATA_ROUTE} style={{color:'white'}}>Начало</NavLink>
        {user.isAuth?
        <Nav className="ml-auto" style={{color:'white'}}>
        <Button variant='outline-light' onClick={()=>history.push(ADMIN_ROUTE)}>Админ панель</Button>
        <Button variant='outline-light' className='ml-2' onClick={()=>history.push(LOGIN_ROUTE)}>Выйти</Button>
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
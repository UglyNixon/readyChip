import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink,useLocation } from 'react-router-dom';
import { Context } from '../index';
import { registration, loginFunc } from '../http/userApi';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = observer(() => {
    const {user}=useContext(Context)
    const location = useLocation()
    const isLogin =location.pathname===LOGIN_ROUTE
    const [login,setLogin]= useState('')
    const [password,setPassword]=useState('')
    const authFunc =async ()=>{
        let data;
        if (isLogin)
        {
             data = await loginFunc(login,password)
        }else {
             data = await registration(login,password)
        }
        user.setUser(data)
        user.setIsAuth(true)
        
    
    }

    return (
      <Container
      className='d-flex justify-content-center align-items-center'
      style={{height:window.innerHeight-54}}
      >

        <Card
        style={{width:600}} className='p-5'
        > 
            <h2 className='m-auto '>{isLogin?'Авторизация':'Регистрация'}</h2>
       <Form className='d-flex flex-column'>
                <Form.Control 
                placeholder = {isLogin ? 'Введите логин...':'Придумайте логин...'}
                onChange={e=>setLogin(e.target.value)}
                className='mt-3'
                value={login}
              
                />
                <Form.Control 
                placeholder={isLogin ? 'Введите пароль...':'Придумайте пароль...'}
                className='mt-3'
                value={password}
                onChange={e=>setPassword(e.target.value)}
                type='password'
                />
                
            </Form>
               <Row 
                className='d-flex justify-content-between mt-3 pl-3 pr-3' >
                    {
                        isLogin?
                    
                    <div> Нет аккаунта <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйтесь!</NavLink></div>
                        :
                    <div> Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Авторизуйтесь!</NavLink></div>
                    }
            
               <Button
               variant ='outline-success'
               className='align-self-end'
               onClick={authFunc}
               >
                   {isLogin ? 'Войти':'Зарегестрироваться'}
               </Button>
               </Row>
          
        </Card>



      </Container>
    );
})

export default Auth;
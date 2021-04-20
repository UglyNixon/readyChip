import Admin from "./page/Admin"
import Auth from "./page/Auth"
import Basket from "./page/Basket"
import Device from "./page/DevicePage"
import Shop from "./page/Shop"
import { ADMIN_ROUTE, BASKET_ROUTE, DEVIVE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [

    {
        path:ADMIN_ROUTE,
        component:Admin
    },
    {
        path:BASKET_ROUTE,
        component:Basket
    }

]

export const publicRoutes = [
    {
        path:SHOP_ROUTE,
        component:Shop
    },
    {
        path:LOGIN_ROUTE,
        component:Auth
    },
    {
        path:REGISTRATION_ROUTE,
        component:Auth
    },
    {
        path:DEVIVE_ROUTE+'/:id',
        component:Device

    }

]


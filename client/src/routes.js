
import Admin from "./pages/Admin"
import Analit from "./pages/Analit"
import Auth from "./pages/Auth"
import Chip from "./pages/Chip"
import Data from "./pages/Data"
import { ADMIN_ROUTE, ANALIT_ROUTE, CHIP_ROUTE, DATA_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

export const authRoutes = [

    {
        path:ADMIN_ROUTE,
        Component:Admin
    }

]

export const publicRoutes = [

    {
        path : LOGIN_ROUTE,
        Component : Auth
    },
    {
       path:REGISTRATION_ROUTE,
       Component:Auth
    },  
    {
        path : ANALIT_ROUTE,
        Component : Analit
    },
    {
        path:DATA_ROUTE,
        Component:Data
    },
    {
        path:CHIP_ROUTE +'/:id',
        Component:Chip
    }

]




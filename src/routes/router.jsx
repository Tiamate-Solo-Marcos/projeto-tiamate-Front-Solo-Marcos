import { createBrowserRouter } from "react-router-dom";
import Noticias from "../pages/Noticias";
import Inicio from "../pages/Inicio";
import NossoCafe from "../pages/NossoCafe";
import Contato from "../pages/Contato";
import Cardapio from "../pages/Cardapio";
import RootLayout from "../layouts/RootLayout";
import LoginRegister from "../layouts/LoginRegister";



const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,        
        children: [
            {
                element: <Inicio />,
                index: true
            },
            {
                element: <NossoCafe />,
                path: "nosso-cafe"         
            },
            {
                element: <Noticias />,
                path:"noticias"
            },            
            {
                element: <Contato />,
                path:"contato"
            },            
            {
                element: <Cardapio />,
                path:"cardapio"
            }
        ]
    },  
    {
        path: "/login",
        element: <LoginRegister />
    }
        
    
])  

export default router
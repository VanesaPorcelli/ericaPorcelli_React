import ProductsListContainer from "../pages/productsList/ProductsListContainer"
import ProductDetailContainer from "../pages/productDetail/ProductDetailContainer"
import CartContainer from "../pages/cart/CartContainer"
import Form from "../pages/Form/Form"

export const menuRoutes=[
    {
        id:"home",
        path:"/",
        Element: ProductsListContainer
    },
    {
        id:"categories",
        path: "/category/:categoryName",
        Element: ProductsListContainer
    },
    {
        id:"itemDetail",
        path: "/itemDetail/:id",
        Element: ProductDetailContainer
    },
    {
        id:"cart",
        path: "/carrito",
        Element: CartContainer
    },
    {
        id:"form",
        path: "/form",
        Element: Form
    },
]
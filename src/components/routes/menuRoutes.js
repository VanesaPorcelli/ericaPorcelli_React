import CartContainer from "../pages/cart/CartContainer"
import CheckoutContainer from "../pages/checkout/CheckoutContainer"
import FormFormik from "../pages/formFormik/FormFormik"
import ProductDetailContainer from "../pages/productDetail/ProductDetailContainer"
import ProductsListContainer from "../pages/productsList/ProductsListContainer"

export const menuRoutes = [
    {
        id: "home",
        path: "/",
        Element: ProductsListContainer 
    },
    {
        id: "categories",
        path: "/category/:categoryName",
        Element: ProductsListContainer
    },
    {
        id: "itemDetail",
        path: "/itemDetail/:id",
        Element: ProductDetailContainer
    },
    {
        id: "carrito",
        path: "/carrito",
        Element: CartContainer
    },
    {
        id: "formik",
        path: "/formik",
        Element: FormFormik
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContainer
    }
]
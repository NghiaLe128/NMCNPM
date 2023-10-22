import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        showHeader: true
    },

    {
        path: '/order',
        page: OrderPage,
        showHeader: true
    },

    {
        path: '/products',
        page: ProductsPage,
        showHeader: true
    },
    {
        path: '*',
        page: NotFoundPage,

    }
]

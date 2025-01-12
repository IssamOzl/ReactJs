import {z} from "zod";

const envSchema = z.object({
    "VITE_API_URL":z.string(),
    "VITE_API_KEY":z.string(),
    "VITE_ROUTE_PARAMS":z.string(),
    "VITE_ROUTE_CATEGORIES":z.string(),
    "VITE_ROUTE_CATEGORIES_DETAILS":z.string(),
    "VITE_IMAGES_FOLDER":z.string(),
    "VITE_ROUTE_PRODUCTS_LATEST_12":z.string(),
    "VITE_ROUTE_PRODUCTS_ACTIVE":z.string(),
    "VITE_ROUTE_ACTIVE_PRODUCTS_BY_CATEGORY":z.string(),
    "VITE_ROUTE_PRODUCT_DETAILS":z.string(),
    "VITE_ROUTE_PRODUCT_RANDOM":z.string(), 
    "VITE_PARAMS_LS":z.string(), 
    "VITE_ROUTE_SHIPPING_CITY_DETAILS":z.string(),
    "VITE_ROUTE_SHIPPING_CITIES_ACTIVE":z.string(),
    "VITE_ROUTE_ORDER_PLACE":z.string(),
    "VITE_DEFAULT_SITE_NAME":z.string(),

}) 

// we used .parse in lace of safeParse to leunch an error if som param needed
export const env = envSchema.parse(import.meta.env)
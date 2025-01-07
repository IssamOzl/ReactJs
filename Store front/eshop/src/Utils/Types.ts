import { z } from "zod"

export type activeInDb = "active"
export type inactiveInDb = "inactive"
export type activeOrNot = activeInDb | inactiveInDb
export type categories = {
    "category_id": number
    "category_name": string
    "category_status"?: "active" | "inactive"
}
export interface product {
    "product_id": number
    "brand_id": number
    "category_id": number
    "free_shipping": 0 | 1
    "old_price": number
    "product_base_price": number
    "product_date": string
    "product_description": string
    "product_enter_by": number
    "product_minimum_order": number
    "product_name": string
    //"product_quantity": number
    "product_status": activeOrNot
    "product_tax": string
    "product_unit": string
    "slug": string
    "note"?: number
    "comments_count"?: number
    "images"?: productImage[]
    "reviews"?: productReview[]
    "thumbnail"?: string
    "variations"?: productVariations[]
    "product_quantity"?: number
}
export interface productImage {
    "id_image": number
    "name_image": string
    "id_product": number
}
export interface productThumb {
    "name_image": string
}
export interface productVariations {
    "id": number
    "name": string
    "status": activeOrNot
    "stock": number
    "placement": string
    "id_produit": number
}
export interface productReview {
    "product_id": number
    "review_author": string
    "review_date": Date
    "review_description": string
    "review_id": number
    "review_note": number
    "review_status": 0 | 1
    "review_images"?: reviewImages[]
}
export interface reviewImages {
    "id": number
    "review_id": number
    "review_image_path": string
}
export interface params {
    "phone": string
    "email": string
    "fb_link": string
    "logo_link": string
    "logo_etiq_link": string
    "order_id_prefix": string
    "site_name": string
    "whats_number": string
    "main_color": string
    "second_color": string
    "main_color_dark": string
    "second_color_dark": string
    "fb_pixel": string
}
export interface cartItem {
    cartItemId: string // => product_id+"_"+variationId
    product_id: number
    product_name: string
    slug: string
    product_base_price: number
    free_shipping: 0 | 1
    thumbnail?: string

    variationId: number
    variationName: string
    Qte: number
}
export interface order {
    "coupon": string
    "order_address": string
    "order_created_date":string
    "order_date": string
    "order_id": number
    "order_name": string
    "order_phone": string
    "order_shipping": number
    "order_shipping_city": number
    "order_shipping_cost": number
    "order_shipping_id": number
    "order_status": string
    "order_total": number
    "order_tracking": string
    "payment_status": 'cash' | 'credit'
    "user_id"?: number
    "products": order_product[]
}
export interface order_product {
    id_variation: number
    inventory_order_id: number
    inventory_order_product_id: number
    price: number
    product_id: number
    quantity: number
    tax: number
}
export interface shippingCity {
    "id": number
    "name": string
    "shupping_cost": number
}
export interface getLStype {
    isOk: boolean,
    value: string
}

const phoneRegex = new RegExp(`^(\\+?\\d{1,3}[-.\\s]?)?(\\(?\\d{3}\\)?[-.\\s]?)?\\d{3}[-.\\s]?\\d{4}$`);
export const orderFormSchema = z.object({
    nom: z.string().min(5, "Merci de saisir un nom valide"),
    telephone: z.string().refine((val) => phoneRegex.test(val), "Merci de saisir un numéro de téléphone valide."),
    adresse: z.string().min(5, "Merci de saisir une adrese valide."),
    ville: z.string()
})

export type orderFormData = z.infer<typeof orderFormSchema>;

export interface dbError{
    "message":string,
    "code":string,
    "errno":number
}
export interface dbErrorReturn{
    "error":dbError
}
export interface ValidationError{
    type:string,
    msg:string,
    path:string,
    location:string,
}
export interface validationErrorArray{
    "Errors":ValidationError[]
}


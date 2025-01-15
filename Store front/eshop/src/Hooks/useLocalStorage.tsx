import { getLStype } from "../Utils/Types";

export default function useLocalStorage() {

    function setValue(key: string, value: string) {
        let isOk: boolean = true

        try {
            localStorage.setItem(key, value)
            
        } catch (error) {
            isOk = false
            console.log(error);
        }
        return isOk
    }

    
    function getValue(key:string):getLStype{

        let isOk: boolean = true
        let value  :string = ""

        try {
            const ls = localStorage.getItem(key)  
            ls && (value = ls) 
        } catch (error) {
            isOk = false
            console.log(error);
        }
        return {isOk,value }
    }

    function removeValue(key:string):boolean{
        let isOk: boolean = true

        try {
            localStorage.removeItem(key) 
        } catch (error) {
            isOk = false
            console.log(error);
        }
        return isOk
    }

    return ({ getValue,setValue,removeValue })
}

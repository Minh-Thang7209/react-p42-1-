import type ICart from "../../../entities/cart/model/ICart";
import type IUser from "../../../entities/user/model/IUser";
import type IAlertData from "../../alert/model/IAlertData";

export default interface IAppContext {
    cart: ICart,
    setCart(cart: ICart):void,
    user?: IUser,
    setUser(user:IUser|undefined):void,
    isLoading:boolean, 
    setLoading(isLoading:boolean):void,
<<<<<<< HEAD
    showAlert(alertData:IAlertData | null):void,
=======
    showAlert(alertData:IAlertData|null):void,
>>>>>>> ce34a65b82723be3490004be8708127ff8553d5c
}
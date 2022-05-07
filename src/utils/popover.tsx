import { NOTIFICATION_TYPE, Store } from "react-notifications-component";



export const ShowNotification = (title: string, message: string, type: NOTIFICATION_TYPE, duration: number) => {

    Store.addNotification({
        title,
        message,
        type,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration,
            onScreen: true
        }
    });
}
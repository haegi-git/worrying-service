import { toggleSideMenu } from "../stores/features/sideMenu/sideMenuSlice";
import { useAppDispatch } from "../stores/store"

export default function useSideMenuBtn(){
    const dispatch = useAppDispatch();
    const toggleMenu = () => {
        dispatch(toggleSideMenu());
    };

    return toggleMenu
}
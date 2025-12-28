import { useNavigate } from "react-router-dom";
import { store } from "@/imports/hooks-and-store";

export default function useUserMenu() {
    const navigate = useNavigate();
      const userStore = store.useUserStore();
    
      const handleLogout = () => {
        userStore.logout();
        navigate("/");
      };
    
      const initials = userStore.user
        ? userStore.user.fullName
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
        : "U";

    return {initials, handleLogout, userStore}
}
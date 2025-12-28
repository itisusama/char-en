import { ui } from "@/imports/ui";
import { hooks } from "@/imports/hooks-and-store";

export default function UserMenu() {
  const userMenu = hooks.useUserMenu();

  return (
    <div className="flex items-center gap-3">
    <ui.DropdownMenu>
      <ui.DropdownMenuTrigger className="outline-none">
        <ui.Avatar className="cursor-pointer">
          <ui.AvatarFallback className="bg-primary text-white">
            {userMenu.initials}
          </ui.AvatarFallback>
        </ui.Avatar>
      </ui.DropdownMenuTrigger>

      <ui.DropdownMenuContent align="end" className="w-fit">
        <ui.DropdownMenuLabel className="font-medium">
          {userMenu.userStore.user?.fullName || "User"}
        </ui.DropdownMenuLabel>
        <ui.DropdownMenuLabel className="font-medium">
          {userMenu.userStore.user?.email}
        </ui.DropdownMenuLabel>
      
        <ui.DropdownMenuItem onClick={userMenu.handleLogout} className="text-red-600">
          Logout
        </ui.DropdownMenuItem>
      </ui.DropdownMenuContent>
    </ui.DropdownMenu>
    </div>
  );
}
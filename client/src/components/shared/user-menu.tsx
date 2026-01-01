import { ui } from "@/imports/ui";
import { hooks } from "@/imports/hooks-and-store";

export default function UserMenu() {
  const userMenu = hooks.useUserMenu();

  return (
    <div className="flex items-center gap-3">
    <ui.DropdownMenu>
      <ui.DropdownMenuTrigger className="outline-none">
        <div className="flex items-center gap-3">
          <ui.Avatar className="cursor-pointer">
          <ui.AvatarFallback className="bg-primary text-white">
            {userMenu.initials}
          </ui.AvatarFallback>
        </ui.Avatar>
          <div className="flex flex-col items-start">
            <h3 className="font-bold text-xs">{userMenu.userStore.user?.fullName || "User"}</h3>
            <h3 className="text-xs">{userMenu.userStore.user?.email}</h3>
          </div>
        </div>
      </ui.DropdownMenuTrigger>

      <ui.DropdownMenuContent align="end" className="w-48">
        <ui.DropdownMenuItem>
          Profile
        </ui.DropdownMenuItem>

        <ui.Separator className="border border-gray-50" />
        
        <ui.DropdownMenuItem onClick={userMenu.handleLogout} className="text-red-600">
          Logout
        </ui.DropdownMenuItem>
      </ui.DropdownMenuContent>
    </ui.DropdownMenu>
    </div>
  );
}
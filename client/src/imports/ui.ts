import MainHeading from "@/components/shared/main-heading";
import UserMenu from "@/components/shared/user-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@radix-ui/react-dropdown-menu";

export const ui = {
    Button, MainHeading, Form, 
    FormField, FormItem, FormLabel, 
    FormControl, Input, Label,
    FormMessage, DropdownMenu, DropdownMenuTrigger,
    Avatar, AvatarFallback, DropdownMenuContent,
    DropdownMenuLabel, DropdownMenuItem, UserMenu,
    Separator
}
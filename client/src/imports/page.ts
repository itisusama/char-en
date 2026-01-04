import DashboardLayout from '@/layouts/dashboard'
import Dashboard from '@/pages/Dashboard'
import Landing from '@/pages/Landing'
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import Reset from '@/pages/auth/Reset';
import AddFinance from '@/pages/AddFinance';
import AddCategory from '@/pages/AddCategory';

export const page = {Landing, Dashboard, Login, Register, Reset, AddFinance, AddCategory}
export const layout = {DashboardLayout}
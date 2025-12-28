import DashboardLayout from '@/layouts/dashboard'
import Dashboard from '@/pages/Dashboard'
import Landing from '@/pages/Landing'
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import Reset from '@/pages/auth/Reset';

export const page = {Landing, Dashboard, Login, Register, Reset}
export const layout = {DashboardLayout}
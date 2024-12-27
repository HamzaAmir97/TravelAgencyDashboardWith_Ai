import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    route('sign_in', 'routes/root/sign_in.tsx'),
    layout('/routes/admin/admin_layout.tsx',[

        route('dashboard', 'routes/admin/dashboard.tsx') 

    ])
  

] satisfies RouteConfig;
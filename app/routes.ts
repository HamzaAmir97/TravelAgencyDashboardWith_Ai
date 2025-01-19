import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    route('sign_in', 'routes/root/sign_in.tsx'),
    route('api/create-trip', 'routes/api/create-trip.ts'),
    layout('/routes/admin/admin_layout.tsx',[

        route('dashboard', 'routes/admin/dashboard.tsx'),
        route('All_Users', 'routes/admin/All_Users.tsx'),
        route('trips', 'routes/admin/trips.tsx'),  
        route('trip/create', 'routes/admin/create_trip.tsx')  

    ])
  

] satisfies RouteConfig;
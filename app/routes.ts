import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    route('sign_in', 'routes/root/sign_in.tsx'),
    route('api/create_trip', 'routes/api/create_trip.ts'),
    layout('routes/admin/admin_layout.tsx',[

        route('dashboard', 'routes/admin/dashboard.tsx'),
        route('All_Users', 'routes/admin/All_Users.tsx'),
        route('trips', 'routes/admin/trips.tsx'),  
        route('trip/create', 'routes/admin/create_trip.tsx') , 
        route('trip/:tripId', 'routes/admin/trip_detail.tsx')  


    ]),
  layout('routes/root/page_layout.tsx', [
    index('routes/root/travel_page.tsx'),
    route('/travel/:tripId', 'routes/root/travel_detail.tsx'),
    route('/travel/:tripId/success', 'routes/root/payment_success.tsx'),
])

] satisfies RouteConfig;
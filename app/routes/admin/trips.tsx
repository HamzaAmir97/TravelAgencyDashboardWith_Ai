import {Header, TripCard} from "../../../components";
import {type LoaderFunctionArgs, useSearchParams} from "react-router";
import {getAllTrips, getTripById} from "~/appwrite/trips";
import {parseTripData} from "~/lib/utils";

import {useState} from "react";
import {PagerComponent} from "@syncfusion/ej2-react-grids";
import type { Route } from "../+types/home";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const limit = 8;
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || "1", 10);
    const offset = (page - 1) * limit;

    const { allTrips, total } = await getAllTrips(limit, offset);

    return {
        trips: allTrips.map(({ $id, tripDetails, imageUrls }) => ({
            id: $id,
            ...parseTripData(tripDetails),
            imageUrls: imageUrls ?? []
        })),
        total
    }
}

const trips = ({ loaderData }: Route.ComponentProps) => {
    const trips = (loaderData as any)?.trips || [];
  return (
      <Header
                title="Trips"
                description="View and edit AI-generated travel plans"
                ctaText="Create a trip"
                ctaUrl="/trips/create"
            />

  )
}

export default trips
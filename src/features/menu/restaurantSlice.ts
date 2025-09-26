import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type MenuApiResponse = {
    itemID: number;
    itemName: string;
    itemDescription: string;
    itemPrice: number;
    restaurantName: string;
    restaurantID: number;
    imageUrl: string;
}
      
export const restaurantApiSlice = createApi({
    
    baseQuery: fetchBaseQuery({baseUrl: "/api/Restaurant"}),
    reducerPath: "restaurantApi",
    
    endpoints: builder =>({
        getMenu: builder.query<MenuApiResponse[], {page:number,sortbyprice?:string}>({
            query: ({page,sortbyprice="desc"}) =>  `/${page}/menu?sortbyprice=${sortbyprice}`
        })
    })
})
 export const { useGetMenuQuery } = restaurantApiSlice;
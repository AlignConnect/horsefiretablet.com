import { createApi } from '@reduxjs/toolkit/query/react'
import nextQuery from '../utils/nextQuery'


export const productApi = createApi({
    reducerPath: "productapi",
    baseQuery: nextQuery(),
    endpoints: (builder) => {

        // return {

        //     getShopifyData: builder.query({
        //         query: (data) => ({ url: "products/", params: data })
        //         // query: (data) => ({ url: `products?id=${data.id}` })
        //     })
        // }

        return {

            getShopifyData: builder.query({
                query: (data) => {

                    console.log(data)

                    return { url: "products/" + data?.id }
                },
                // query: (data) => ({ url: "products/", params: data })
                // query: (data) => ({ url: `products?id=${data.id}` })
                transformResponse: (data) => data?.data
            })
        }


    }
})


export const { useGetShopifyDataQuery } = productApi;
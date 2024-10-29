import { apiSlice } from "./apiSlice";
import { ORDERS_URL, PAYPAL_URL } from "../constants";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: "POST",
        body: order,
      }),
    }),

    getOrderDetails: builder.query({
      query: (id) => ({
        url: `${ORDERS_URL}/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Adding token from localStorage
          "Content-Type": "application/json"
        },
      }),
    }),

    payOrder: builder.mutation({
      query: ({ orderId, details }) => ({
        url: `${ORDERS_URL}/${orderId}/pay`,
        method: "PUT",
        body: details,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Adding token from localStorage
          "Content-Type": "application/json"
        },
      }),
    }),

    getPaypalClientId: builder.query({
      query: () => ({
        url: PAYPAL_URL,
      }),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Adding token from localStorage
        "Content-Type": "application/json"
      },
    }),

    getMyOrders: builder.query({
      query: () => ({
        url: `${ORDERS_URL}/mine`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Adding token from localStorage
          "Content-Type": "application/json"
        },
      }),
      keepUnusedDataFor: 5,
      
    }),

    getOrders: builder.query({
      query: () => ({
        url: ORDERS_URL,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Adding token from localStorage
          "Content-Type": "application/json"
        },
      }),
    }),

    deliverOrder: builder.mutation({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}/deliver`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Adding token from localStorage
          "Content-Type": "application/json"
        },
      }),
    }),

    getTotalOrders: builder.query({
      query: () => `${ORDERS_URL}/total-orders`,
    }),

    getTotalSales: builder.query({
      query: () => `${ORDERS_URL}/total-sales`,
    }),

    getTotalSalesByDate: builder.query({
      query: () => `${ORDERS_URL}/total-sales-by-date`,
    }),
  }),
});

export const {
  useGetTotalOrdersQuery,
  useGetTotalSalesQuery,
  useGetTotalSalesByDateQuery,
  // ------------------
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetPaypalClientIdQuery,
  useGetMyOrdersQuery,
  useDeliverOrderMutation,
  useGetOrdersQuery,
} = orderApiSlice;

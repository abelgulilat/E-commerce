import { apiSlice } from "./apiSlice";
import { CATEGORY_URL } from "../constants";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (newCategory) => ({
        url: `${CATEGORY_URL}`,
        method: "POST",
        body: newCategory,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Adding token from localStorage
          "Content-Type": "application/json"
        },
      }),
    }),

    updateCategory: builder.mutation({
      query: ({ categoryId, updatedCategory }) => ({
        url: `${CATEGORY_URL}/${categoryId}`,
        method: "PUT",
        body: updatedCategory,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Adding token from localStorage
          "Content-Type": "application/json"
        },
      }),
    }),

    deleteCategory: builder.mutation({
      query: ({categoryId}) => ({
        url: `${CATEGORY_URL}/${categoryId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Adding token from localStorage
          "Content-Type": "application/json"
        },
      }),
    }),

    fetchCategories: builder.query({
      query: () => ({ 
        url: `${CATEGORY_URL}/categories`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`, // Adding token from localStorage
          "Content-Type": "application/json"
        },
      })
      
        

      
    }),
  })

});

export const {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useFetchCategoriesQuery,
} = categoryApiSlice;

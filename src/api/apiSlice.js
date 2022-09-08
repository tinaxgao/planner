/* THIS IS NOT USED, JUST TEST */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const mainChecklistId = "630802099c96df23984b9e1b";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  tagTypes: ["Get", "Post"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => ({ url: `/tasklist/${mainChecklistId}` }),
    }),
  }),
});

export const { useGetTasksQuery } = apiSlice;

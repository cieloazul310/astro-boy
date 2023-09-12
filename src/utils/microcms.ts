import { createClient, type MicroCMSQueries } from "microcms-js-sdk";
import type { MicrocmsBlogs, MicrocmsBlogsCategory } from "../types";

const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY;

const client =
  serviceDomain && apiKey
    ? createClient({
        serviceDomain,
        apiKey,
      })
    : null;

export type MicrocmsResponse<T> = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: T[];
};

// APIの呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
  if (!client)
    throw new Error(
      "There is no client object. Please set MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY.",
    );
  const get = await client.get<MicrocmsResponse<MicrocmsBlogs>>({
    endpoint: "blogs",
    queries,
  });
  return get;
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  if (!client)
    throw new Error(
      "There is no client object. Please set MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY.",
    );
  const get = await client.getListDetail<MicrocmsBlogs>({
    endpoint: "blogs",
    contentId,
    queries,
  });
  return get;
};

// APIの呼び出し
export const getCategories = async (queries?: MicroCMSQueries) => {
  if (!client)
    throw new Error(
      "There is no client object. Please set MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY.",
    );
  const get = await client.get<MicrocmsResponse<MicrocmsBlogsCategory>>({
    endpoint: "categories",
    queries,
  });
  return get;
};

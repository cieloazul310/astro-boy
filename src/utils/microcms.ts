import { createClient, type MicroCMSQueries } from "microcms-js-sdk";
import * as dotenv from "dotenv";
import type { MicrocmsBlogs } from "../types";

dotenv.config();

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

const client =
  serviceDomain && apiKey
    ? createClient({
        serviceDomain,
        apiKey,
      })
    : null;

export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: MicrocmsBlogs[];
};

// APIの呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
  if (!client)
    throw new Error(
      "There is no client object. Please set MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY.",
    );
  const get = await client.get<BlogResponse>({ endpoint: "blogs", queries });
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

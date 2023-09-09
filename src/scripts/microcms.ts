import { createClient, type MicroCMSQueries } from "microcms-js-sdk";
import "dotenv/config";
import type { MicrocmsBlogs } from "../types";

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
  if (!client) throw new Error();
  const get = await client.get<BlogResponse>({ endpoint: "blogs", queries });
  return get;
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  if (!client) throw new Error();
  const get = await client.getListDetail<MicrocmsBlogs>({
    endpoint: "blogs",
    contentId,
    queries,
  });
  return get;
};

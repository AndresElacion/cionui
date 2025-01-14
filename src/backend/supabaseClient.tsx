import { createClient } from "@supabase/supabase-js";
import { Database } from "../../supabase-types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export const getPaginatedFeedback = async (page: number, pageSize: number) => {
  const { data, error, count } = await supabase
    .from("feedback")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range((page - 1) * pageSize, page * pageSize - 1);

  if (error) throw error;

  return { data, count };
};

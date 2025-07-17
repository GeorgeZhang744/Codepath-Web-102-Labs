import { createClient } from "@supabase/supabase-js";

const URL = "https://pjqmapdhhzpybumzbhux.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqcW1hcGRoaHpweWJ1bXpiaHV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3ODUxMDYsImV4cCI6MjA2ODM2MTEwNn0.5MaCjWEnN6qNALXv-xJfDl-2xNfB1_xQZ64JSXh1RdU";

export const supabase = createClient(URL, API_KEY);

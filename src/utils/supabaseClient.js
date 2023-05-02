import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://fbqdkjurwhlhzytwwqng.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZicWRranVyd2hsaHp5dHd3cW5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwMjY3MjMsImV4cCI6MTk5ODYwMjcyM30.dfxQxZZyAZ1-vFpLrECXTIakwI-UHxBmGtXxAUNtPPQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

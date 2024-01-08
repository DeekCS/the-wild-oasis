import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gmhmflrsnqaflnxssusa.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtaG1mbHJzbnFhZmxueHNzdXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3MDAyMDUsImV4cCI6MjAyMDI3NjIwNX0.CcgIa0kEsVle7__1FKsEEBsmXMGNEeqDJBzP_6KQO-Q`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

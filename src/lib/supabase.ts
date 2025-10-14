import { createClient } from "@supabase/supabase-js";
import { fetchAuthSession } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create Supabase client that dynamically fetches the Cognito ID token
const supabase = createClient(supabaseUrl, supabaseKey, {
  accessToken: async () => {
    const session = await fetchAuthSession();
    return session.tokens?.idToken?.toString() ?? null;
  },
});

// Keep Supabase Realtime in sync with Cognito auth state
Hub.listen("auth", () => {
  fetchAuthSession().then((session) => {
    const idToken = session.tokens?.idToken?.toString() ?? null;
    if (idToken) supabase.realtime.setAuth(idToken);
  });
});

export default supabase;

import { supabase } from "./supabase.config";

export const ObtenerIdAuthSupabase = async () => {
  const { data } = await supabase.auth.getSession();
  const { session } = data;
  if ( session !== null ) {
    const { user } = session;
    const idAuthSupaBase = user.id;
    return idAuthSupaBase;
  }
};

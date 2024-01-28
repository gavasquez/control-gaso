import { supabase } from "./supabase.config";

export const ObtenerIdAuthSupabase = async () => {
    const { data: session } = await supabase.auth.getSession();
    if (session != null) {
        const { user } = session;
        const idAuthSupaBase = user.id;
        return idAuthSupaBase;
    }
}

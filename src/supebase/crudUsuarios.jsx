import { supabase } from "./supabase.config";

export const InsertarUsuarios = async (parametros) => {
    try {
        const { data } = await supabase.from('usuarios').insert(parametros).select();
        return data;
    } catch (error) {

    }
}
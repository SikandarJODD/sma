import supabase from "$lib/db/db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    let posts = await supabase.from('social_posts').select('*');
    console.log(posts.data)
    return {
        posts: posts.data
    };
};
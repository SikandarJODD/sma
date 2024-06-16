import supabase from "$lib/db/db";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({ params }) => {
    let postID = params.postID;
    let postDetails = await supabase.from('social_posts').select('*').eq('id', postID).single();
    console.log(postDetails);
    return {
        postDetails: postDetails.data
    };

};
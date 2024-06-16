import supabase from "$lib/db/db";
import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    createPost: async ({ request }) => {
        let form = await request.formData();
        let title = form.get("title");
        let image = form.get("image");
        console.log(title, image);
        let res = await supabase.from('social_posts').insert({
            title: title?.toString(),
            image: image?.toString(),
            social_name: 'saloni'
        })
        console.log(res, 'Response from supabase');
        if (res.status === 201) {
            redirect(302, '/posts');
        }
        return {
            status: 400,
            body: {
                message: "Post creation failed"
            }
        };

    }

};
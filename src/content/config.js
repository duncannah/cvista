// Import utilities from `astro:content`
import {z, defineCollection} from "astro:content";
// Define a `type` and `schema` for each collection
const guideCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		image: z
			.object({
				url: z.string(),
				alt: z.string(),
			})
			.optional(),
	}),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
	guide: guideCollection,
};

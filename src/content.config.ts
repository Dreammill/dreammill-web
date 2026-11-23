import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const both = z.object({ fi: z.string(), en: z.string() });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // Original-language title shown under the main title, if different
    subtitle: z.string().optional(),
    year: z.number().optional(),
    status: z.enum(['released', 'upcoming', 'in-production', 'in-development']).default('released'),
    category: z.enum(['feature', 'tv', 'documentary', 'short', 'commercial', 'trailer', 'animation', 'music']),
    logline: both,
    description: both,
    credits: z.array(z.object({ role: both, name: z.string() })).default([]),
    partners: z.array(z.string()).default([]),
    // /media/... path in public/, e.g. /media/once-in-a-blue-moon/poster.jpg
    poster: z.string().optional(),
    still: z.string().optional(),
    // YouTube video id (the part after watch?v=)
    trailer: z.string().optional(),
    // Muted looping clip for cards/hero, /media/... .mp4
    loop: z.string().optional(),
    // Placeholder colour while there is no image
    tint: z.string().default('#8a6a3b'),
    featured: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const collections = { projects };

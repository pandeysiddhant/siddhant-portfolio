import { defineCollection, z } from 'astro:content';

// 1. PROJECTS SCHEMA
const projects = defineCollection({
  type: 'content', // MDX
  schema: z.object({
    title: z.string(),
    description: z.string(), // Short summary for cards/SEO
    publishDate: z.string().transform((str) => new Date(str)),
    updatedDate: z.string().transform((str) => new Date(str)).optional(),
    tags: z.array(z.string()), // e.g., ["Python", "Azure Data Factory", "CI/CD"]
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string().optional(),
      before: z.string().optional(),
      after: z.string().optional(),
    })).optional(),
    featured: z.boolean().default(false), // Show on homepage
    draft: z.boolean().default(false),
    architecture: z.string().optional(), // Mermaid diagram code block ID or text
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
  }),
});

// 2. CERTIFICATIONS SCHEMA
const certs = defineCollection({
  type: 'data', // JSON/YAML
  schema: z.object({
    name: z.string(),
    issuer: z.string(), // "Databricks", "Microsoft"
    date: z.string().transform((str) => new Date(str)),
    credentialId: z.string().optional(),
    verifyUrl: z.string().url().optional(), // Credly/Link
    icon: z.string().optional(), // Path in public/assets/certs/ or URL
    color: z.string().optional(), // Badge color hex
  }),
});

export const collections = { projects, certs };
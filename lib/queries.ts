import { client } from './sanity';

export async function getCoaches() {
  return client.fetch(`*[_type == "coach"] | order(order asc)`);
}

export async function getServices() {
  return client.fetch(`*[_type == "service"] | order(order asc)`);
}

export async function getTestimonials() {
  return client.fetch(`*[_type == "testimonial"] | order(order asc)`);
}

export async function getFeaturedTestimonials() {
  return client.fetch(`*[_type == "testimonial" && featured == true] | order(order asc)[0...3]`);
}

export async function getBlogPosts() {
  return client.fetch(`*[_type == "blogPost"] | order(publishedAt desc)`);
}

export async function getBlogPost(slug: string) {
  return client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, { slug });
}

export async function getFaqItems() {
  return client.fetch(`*[_type == "faqItem"] | order(order asc)`);
}

export async function getSchedule() {
  return client.fetch(`*[_type == "scheduleClass"]`);
}

export async function getGuides() {
  return client.fetch(`*[_type == "guide"] | order(order asc)`);
}

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`);
}

export async function getCareerOpenings() {
  return client.fetch(`*[_type == "careerOpening"] | order(order asc, _createdAt desc){
    _id,
    "id": coalesce(id.current, _id),
    title,
    titleEn,
    type,
    location,
    description,
    requirements,
    whatsapp,
    isOpen,
    order
  }`);
}

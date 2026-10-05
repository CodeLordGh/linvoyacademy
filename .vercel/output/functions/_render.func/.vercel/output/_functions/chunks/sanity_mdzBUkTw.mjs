import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanityClient = createClient({
  projectId: "svwcon84",
  dataset: "production",
  apiVersion: "2023-08-01",
  useCdn: true,
  // No token  unauthenticated requests only return PUBLISHED content.
  // perspective: 'published' is the explicit guarantee drafts never leak.
  perspective: "published"
});
imageUrlBuilder(sanityClient);
const QUERIES = {
  allCourses: `*[_type == "course"] | order(level asc, category asc) {
    _id, titleEn, titleFr, descriptionEn, descriptionFr,
    duration, fees, schedule, category, level
  }`,
  latestNews: `*[_type == "newsPost"] | order(publishedAt desc) [0..2] {
    _id, title, slug, publishedAt, youtubeUrl,
    "imageUrl": image.asset->url,
    "excerpt": array::join(string::split(pt::text(body), "")[0..150], "")
  }`,
  allNews: `*[_type == "newsPost"] | order(publishedAt desc) {
    _id, title, slug, publishedAt, youtubeUrl,
    "imageUrl": image.asset->url,
    "excerpt": array::join(string::split(pt::text(body), "")[0..200], "")
  }`,
  newsBySlug: (slug) => `*[_type == "newsPost" && slug.current == "${slug}"][0] {
    _id, title, slug, publishedAt, youtubeUrl, body,
    "imageUrl": image.asset->url
  }`,
  latestTestimonials: `*[_type == "testimonial"] | order(_createdAt desc) [0..1] {
    _id, reviewerName, reviewerType, program, quoteEn, quoteFr,
    "photoUrl": photo.asset->url
  }`,
  allTestimonials: `*[_type == "testimonial"] | order(_createdAt desc) {
    _id, reviewerName, reviewerType, program, quoteEn, quoteFr,
    "photoUrl": photo.asset->url
  }`,
  allFaqs: `*[_type == "faqItem"] | order(order asc) {
    _id, questionEn, questionFr, answerEn, answerFr, order
  }`,
  allStaff: `*[_type == "staffMember"] | order(department asc, name asc) {
    _id, name, role, department, bioEn, bioFr,
    "photoUrl": photo.asset->url
  }`,
  allGallery: `*[_type == "galleryItem"] | order(date desc) {
    _id, videoUrl, youtubeUrl, captionEn, captionFr, date,
    "imageUrl": image.asset->url
  }`,
  siteSettings: `*[_type == "siteSettings"][0] {
    schoolName, address, email, facebookUrl, tiktokUrl,
    phones[]{ label, number },
    whatsappNumbers[]{ label, number },
    totalStudents, totalParents, yearsOperating, boardingCapacity
  }`,
  allPartners: `*[_type == "partner"] | order(order asc) {
    _id, name, url,
    "logoUrl": logo.asset->url
  }`
};

export { QUERIES as Q, sanityClient as s };

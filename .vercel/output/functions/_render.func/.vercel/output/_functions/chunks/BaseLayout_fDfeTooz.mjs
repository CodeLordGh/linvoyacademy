import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, u as unescapeHTML, r as renderComponent, F as Fragment, f as renderHead, g as renderSlot } from './astro/server_DjmVd5Sg.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';
import { s as sanityClient, Q as QUERIES } from './sanity_mdzBUkTw.mjs';

const lang$1 = "en";
const nav$1 = {
	home: "Home",
	about: "About Us",
	programs: "Programs",
	boarding: "Boarding",
	admissions: "Admissions",
	fees: "Fees",
	gallery: "Gallery",
	news: "News",
	testimonials: "Testimonials",
	faq: "FAQ",
	contact: "Contact"
};
const hero$1 = {
	headline: "Where Every Child is Loved, Nurtured and Inspired",
	subheadline: "Linvoy Academy  Ghana's only holistic Basic Education boarding school, offering a GES-aligned education with French as a dedicated subject and specialist programmes in Business and Computing.",
	cta_programs: "Explore Programs",
	cta_register: "Enrol Now"
};
const programs_overview$1 = {
	title: "What We Offer",
	subtitle: "A complete Basic Education — from Kindergarten through Junior High School — with the specialist edge every child needs.",
	languages: {
		title: "French Language",
		description: "French taught as a dedicated subject from KG through JHS, giving every graduate a strong command of one of West Africa's most important languages."
	},
	business: {
		title: "Business & Entrepreneurship",
		description: "Real-world business, accounting and entrepreneurship skills woven into the curriculum from Primary through JHS to prepare students for tomorrow's economy."
	},
	computing: {
		title: "Computing & ICT",
		description: "Digital literacy, coding and IT fundamentals taught from Basic 1 upwards, aligned to the NaCCA curriculum so technology becomes second nature."
	},
	security: {
		title: "Campus Security — CCTV 24/7",
		description: "Every corner of our campus is covered by CCTV cameras operating around the clock. Parents can rest assured their child is always safe."
	}
};
const linvoy_meaning$1 = {
	title: "What LINVOY Means",
	subtitle: "Every letter of our name is a promise we make to every child who walks through our doors.",
	letters: [
		{
			letter: "L",
			word: "Love",
			description: "We lead with love. Every child is seen, valued and cherished unconditionally."
		},
		{
			letter: "I",
			word: "Inspire",
			description: "We ignite curiosity and ambition, showing each student what they are capable of."
		},
		{
			letter: "N",
			word: "Nurture",
			description: "We grow the whole child  mind, character and confidence  not just academics."
		},
		{
			letter: "V",
			word: "Vision",
			description: "We help students see far beyond their present circumstances into a bright future."
		},
		{
			letter: "O",
			word: "Opportunity",
			description: "We open doors for children of every tribe, religion and nationality, no exceptions."
		},
		{
			letter: "Y",
			word: "Yield",
			description: "We produce graduates who are ready  for university, for work, for life."
		}
	]
};
const why_linvoy$1 = {
	title: "Why Families Choose Linvoy",
	subtitle: "We are the only school in Ghana offering truly holistic education  where every child belongs.",
	holistic: {
		title: "Truly Holistic Basic Education",
		description: "From Kindergarten to Junior High School in one school — one community, one consistent set of values. Academic, moral, social and physical development, all in one place."
	},
	inclusive: {
		title: "All Are Welcome",
		description: "Children of every tribe, religion and nationality are always welcome. No exceptions. Our diversity is our strength."
	},
	bilingual: {
		title: "French as a Subject",
		description: "French is taught as a dedicated subject at every level — KG through JHS — giving graduates a real command of one of West Africa's most widely spoken languages."
	},
	boarding: {
		title: "Safe Boarding",
		description: "Qualified house parents, structured study time and healthy meals — a caring, supervised home away from home for students from across Ghana."
	},
	cctv: {
		title: "Campus-Wide CCTV 24/7",
		description: "Every corner of our campus is monitored by CCTV cameras operating 24 hours a day, 7 days a week. Your child's safety is never left to chance."
	}
};
const testimonials_preview$1 = {
	title: "What Families Say",
	view_all: "Read All Stories"
};
const news_preview$1 = {
	title: "Latest News & Events",
	view_all: "View All News"
};
const cta_banner$1 = {
	headline: "Give Your Child the Linvoy Advantage",
	subheadline: "Enrolment is open. Secure your child's place at Ghana's only holistic Basic Education boarding school.",
	button: "Apply for Enrolment",
	secondary: "Book a School Tour"
};
const about$1 = {
	title: "About Linvoy Academy",
	story_title: "Our Story",
	story: "Linvoy Academy was founded on a simple but powerful conviction: every child deserves to be loved, inspired and given a real opportunity to succeed. We are Ghana's only school offering truly holistic Basic Education  combining a rigorous GES-aligned curriculum, French as a dedicated subject at every level, boarding facilities, and values-based character development. We welcome children of every tribe, religion and nationality without exception, because we believe diversity enriches every classroom.",
	mission_title: "Our Mission & Vision",
	mission: "Our mission is to obtain success and inspire others to come for proper education. Our vision is a Ghana where every child  regardless of background  has access to world-class, loving, holistic education that shapes not just their career but their character.",
	values_title: "Our Values: L·I·N·V·O·Y",
	registration_title: "Registration & Accreditation",
	registration: "Linvoy Academy is a duly registered educational institution in the Republic of Ghana. Our curriculum meets national standards set by the Ghana Education Service (GES), and our qualifications are recognised across the country.",
	staff_title: "Meet Our Team",
	holistic_title: "Holistic Education",
	holistic: "We go beyond books. At Linvoy, education means developing the whole child  academically through our rigorous bilingual curriculum, socially through a diverse and inclusive community, physically through sport and activity, and morally through our core values. No other school in Ghana offers this complete package."
};
const boarding$1 = {
	title: "Boarding at Linvoy Academy",
	subtitle: "A safe, nurturing home away from home for students from across Ghana and beyond.",
	intro: "Our boarding facility is designed with one priority above all others: your child's safety, happiness and growth. Supervised by caring staff around the clock, our boarders enjoy structured study time, healthy meals, recreational activities and a close-knit community that becomes a second family.",
	features_title: "Life at the Boarding House",
	features: [
		{
			title: "24/7 Supervision",
			description: "Qualified house parents and security staff on site at all times, day and night."
		},
		{
			title: "Healthy Meals",
			description: "Three nutritious meals a day prepared fresh on campus, with dietary needs accommodated."
		},
		{
			title: "Structured Study",
			description: "Dedicated quiet study hours every evening supported by teachers on duty."
		},
		{
			title: "Recreational Time",
			description: "Sports, games, arts and social activities to ensure a balanced, joyful life."
		},
		{
			title: "Pastoral Care",
			description: "Regular check-ins, counselling support and open communication with parents."
		},
		{
			title: "Safe & Clean Rooms",
			description: "Comfortable, well-maintained dormitories with secure storage for personal belongings."
		}
	],
	eligibility_title: "Who Can Board?",
	eligibility: "Boarding is open to all enrolled Linvoy Academy students from Primary school upwards. We welcome both day students transitioning to boarding and new students joining as boarders.",
	enquire_button: "Enquire About Boarding",
	cta_title: "Interested in Boarding?",
	cta_subtitle: "Contact us to arrange a visit or to receive our boarding prospectus."
};
const programs$1 = {
	title: "Our Programs",
	subtitle: "A GES-aligned curriculum from Kindergarten through Junior High School — with French taught as a dedicated subject and specialist strands in Languages, Business and Computing.",
	filter_all: "All",
	filter_languages: "Languages",
	filter_business: "Business",
	filter_computing: "Computing",
	level_label: "Level",
	duration: "Duration",
	fees: "Fees",
	schedule: "Schedule",
	apply_now: "Apply Now",
	no_courses: "Full programme details coming soon. Contact us for the current prospectus.",
	levels_intro_title: "Our School Levels",
	levels: [
		{
			key: "kindergarten",
			label: "Kindergarten",
			grades: "KG 1 – KG 2",
			ages: "Ages 4–5",
			years: "2 years",
			description: "A nurturing, play-based start to learning. Children develop early literacy and numeracy in English, with French introduced as a fun, dedicated language subject from day one.",
			highlights: [
				"French taught as a subject from KG 1",
				"Play-based, hands-on learning",
				"Social & emotional development",
				"Morning & afternoon sessions available"
			]
		},
		{
			key: "primary",
			label: "Primary School",
			grades: "Basic 1 – Basic 6",
			ages: "Ages 6–11",
			years: "6 years",
			description: "Six years of solid academic grounding aligned to the Ghana Education Service (GES) curriculum. All core subjects are taught in English, with French as a dedicated subject class throughout all six years.",
			highlights: [
				"Full GES-aligned curriculum",
				"French as a dedicated subject — all years",
				"Computing & digital literacy from Basic 1",
				"Business awareness integrated across subjects"
			]
		},
		{
			key: "junior_high",
			label: "Junior High School (JHS)",
			grades: "JHS 1 – JHS 3",
			ages: "Ages 12–14",
			years: "3 years (BECE)",
			description: "Three years preparing students for the Basic Education Certificate Examination (BECE). Students study a full range of GES subjects in English, with French as a dedicated BECE subject, plus Business and Computing strands.",
			highlights: [
				"Full BECE preparation (all GES core subjects)",
				"French as a BECE subject",
				"Business & Entrepreneurship elective",
				"Computing & ICT throughout all three years",
				"Boarding available from JHS 1"
			]
		}
	]
};
const admissions$1 = {
	title: "Admissions",
	subtitle: "We welcome children of every background. Fill in this form and our admissions team will be in touch within 48 hours.",
	requirements_title: "Admission Requirements",
	requirements: [
		"Open to children from Kindergarten (age ~4) through Junior High School",
		"Previous school report or academic record (where applicable)",
		"Child's birth certificate or valid ID",
		"Parent or guardian national ID",
		"Completed enrolment form below",
		"Optional: school tour  we strongly encourage families to visit us"
	],
	form: {
		student_name: "Student's Full Name",
		date_of_birth: "Date of Birth",
		grade_applying: "Grade / Class Applying For",
		grade_placeholder: "e.g. KG1, Primary 3, JHS 1…",
		parent_name: "Parent / Guardian Full Name",
		email: "Parent / Guardian Email",
		phone: "Parent / Guardian Phone",
		nationality: "Student Nationality",
		boarding: "Boarding Required?",
		boarding_yes: "Yes  boarding place needed",
		boarding_no: "No  day student",
		program: "Program / Subject of Interest (optional)",
		program_placeholder: "Select a program",
		message: "Additional Message (optional)",
		submit: "Submit Enrolment Application",
		submitting: "Submitting…",
		success: "Thank you! Your application has been received. Our admissions team will contact you within 48 hours.",
		error: "Something went wrong. Please try again or contact us directly.",
		validation: {
			required: "This field is required.",
			email: "Please enter a valid email address."
		}
	}
};
const fees$1 = {
	title: "Fees & Payment",
	subtitle: "Transparent, accessible fees for every family. All fees are per term (3 terms per academic year).",
	table_program: "Program / Level",
	table_duration: "Duration",
	table_fee: "Tuition Fee (per term)",
	boarding_fee_note: "Boarding fees (accommodation, meals & supervision) are charged separately from tuition. Contact us for the full boarding fee schedule.",
	contact_for_pricing: "Contact us for pricing",
	terms_note: "The academic year runs 3 terms. Fees shown are per term. A one-time registration/enrolment fee applies on first entry.",
	registration_fee_label: "Registration Fee (one-time)",
	registration_fee_value: "Contact us",
	static_fee_table: [
		{
			level: "Kindergarten (KG 1 – KG 2)",
			ages: "Ages 4–5",
			duration: "2 years",
			fee: "Contact us"
		},
		{
			level: "Primary School (Basic 1 – 6)",
			ages: "Ages 6–11",
			duration: "6 years",
			fee: "Contact us"
		},
		{
			level: "Junior High School (JHS 1 – 3)",
			ages: "Ages 12–14",
			duration: "3 years (BECE)",
			fee: "Contact us"
		}
	],
	boarding_row_label: "Boarding (per term, any level)",
	boarding_row_fee: "Contact us",
	what_included_title: "What's Included in Tuition",
	what_included: [
		"All GES-aligned academic subjects (English, Mathematics, Science, Social Studies, Computing, Creative Arts, P.E.)",
		"French taught as a dedicated subject at every level",
		"School books and learning materials",
		"Access to all school facilities and activities",
		"Progress reports each term"
	],
	payment_title: "Payment Methods",
	payment_subtitle: "We accept Mobile Money, bank transfer, and online payment for your convenience.",
	mobile_money_title: "Mobile Money",
	mobile_money_networks: [
		"MTN Mobile Money",
		"Telecel Cash (Vodafone)",
		"AirtelTigo Money"
	],
	bank_title: "Bank Transfer",
	bank_placeholder: "Bank details provided upon enrolment confirmation. Contact our admissions office for details.",
	paystack_button: "Pay Online with Paystack"
};
const gallery$1 = {
	title: "Gallery",
	subtitle: "A glimpse into the vibrant life at Linvoy Academy.",
	no_items: "Photos and videos coming soon. Check back soon."
};
const news$1 = {
	title: "News & Events",
	subtitle: "Stay up to date with everything happening at Linvoy Academy.",
	no_posts: "News articles coming soon.",
	read_more: "Read More",
	back: "← Back to News"
};
const testimonials$1 = {
	title: "Family Testimonials",
	subtitle: "Hear from the parents and students who are part of the Linvoy family.",
	no_testimonials: "Testimonials coming soon."
};
const faq$1 = {
	title: "Frequently Asked Questions",
	subtitle: "Everything parents and students want to know about Linvoy Academy.",
	no_items: "FAQs coming soon.",
	contact_cta: "Still have questions? We are happy to help.",
	contact_link: "Contact Us"
};
const contact$1 = {
	title: "Contact Us",
	subtitle: "We would love to hear from you. Reach out by phone, WhatsApp, email, or the form below  we are always happy to talk.",
	address_label: "Address",
	phone_label: "Phone",
	email_label: "Email",
	whatsapp_button: "Chat on WhatsApp",
	map_placeholder: "Campus map coming soon.",
	tour_note: "We warmly invite all prospective families to visit our campus. Contact us to arrange a school tour.",
	form: {
		name: "Your Name",
		email: "Email Address",
		subject: "Subject",
		message: "Message",
		submit: "Send Message",
		submitting: "Sending…",
		success: "Thank you! Your message has been received. We will get back to you shortly.",
		error: "Something went wrong. Please try again or contact us directly.",
		validation: {
			required: "This field is required.",
			email: "Please enter a valid email address."
		}
	}
};
const footer$1 = {
	tagline: "Ghana's only holistic Basic Education boarding school  where every child is loved, inspired and given the opportunity to yield their very best.",
	quick_links: "Quick Links",
	contact_details: "Contact Details",
	follow_us: "Follow Us",
	copyright: "© {year} Linvoy Academy. All rights reserved."
};
const whatsapp_label$1 = "Chat on WhatsApp";
const loading$1 = "Loading…";
const error_generic$1 = "An error occurred. Please try again.";
const en = {
	lang: lang$1,
	nav: nav$1,
	hero: hero$1,
	programs_overview: programs_overview$1,
	linvoy_meaning: linvoy_meaning$1,
	why_linvoy: why_linvoy$1,
	testimonials_preview: testimonials_preview$1,
	news_preview: news_preview$1,
	cta_banner: cta_banner$1,
	about: about$1,
	boarding: boarding$1,
	programs: programs$1,
	admissions: admissions$1,
	fees: fees$1,
	gallery: gallery$1,
	news: news$1,
	testimonials: testimonials$1,
	faq: faq$1,
	contact: contact$1,
	footer: footer$1,
	whatsapp_label: whatsapp_label$1,
	loading: loading$1,
	error_generic: error_generic$1
};

const lang = "fr";
const nav = {
	home: "Accueil",
	about: "À Propos",
	programs: "Programmes",
	boarding: "Internat",
	admissions: "Admissions",
	fees: "Frais",
	gallery: "Galerie",
	news: "Actualités",
	testimonials: "Témoignages",
	faq: "FAQ",
	contact: "Contact"
};
const hero = {
	headline: "Où Chaque Enfant est Aimé, Nourri et Inspiré",
	subheadline: "Linvoy Academy  la seule école d'Éducation de Base avec internat au Ghana, offrant un programme aligné GES avec le français comme matière dédiée et des spécialisations en Commerce et Informatique.",
	cta_programs: "Voir les Programmes",
	cta_register: "S'inscrire Maintenant"
};
const programs_overview = {
	title: "Ce Que Nous Offrons",
	subtitle: "Une Éducation de Base complète — de la Maternelle au Collège — avec l'avantage spécialisé dont chaque enfant a besoin.",
	languages: {
		title: "Français Langue",
		description: "Le français enseigné comme matière dédiée de la KG au JHS, donnant à chaque diplômé une vraie maîtrise de l'une des langues les plus importantes d'Afrique de l'Ouest."
	},
	business: {
		title: "Commerce & Entrepreneuriat",
		description: "Des compétences pratiques en gestion, comptabilité et entrepreneuriat intégrées au programme du Primaire au JHS pour préparer les élèves à l'économie de demain."
	},
	computing: {
		title: "Informatique & TIC",
		description: "Culture numérique, codage et fondamentaux informatiques enseignés dès le Basic 1, alignés sur le programme NaCCA pour que la technologie devienne une seconde nature."
	},
	security: {
		title: "Sécurité Campus — CCTV 24h/24",
		description: "Chaque recoin de notre campus est couvert par des caméras CCTV fonctionnant 24h/24, 7j/7. Les parents peuvent avoir la certitude que leur enfant est toujours en sécurité."
	}
};
const linvoy_meaning = {
	title: "Ce que signifie LINVOY",
	subtitle: "Chaque lettre de notre nom est une promesse que nous faisons à chaque enfant qui franchit nos portes.",
	letters: [
		{
			letter: "L",
			word: "Love (Amour)",
			description: "Nous guidons avec amour. Chaque enfant est vu, valorisé et chéri inconditionnellement."
		},
		{
			letter: "I",
			word: "Inspire",
			description: "Nous éveillons la curiosité et l'ambition, en montrant à chaque élève ce dont il est capable."
		},
		{
			letter: "N",
			word: "Nurture (Épanouir)",
			description: "Nous développons l'enfant tout entier  esprit, caractère et confiance  pas seulement l'académique."
		},
		{
			letter: "V",
			word: "Vision",
			description: "Nous aidons les élèves à voir bien au-delà de leur situation actuelle vers un avenir brillant."
		},
		{
			letter: "O",
			word: "Opportunity (Opportunité)",
			description: "Nous ouvrons des portes pour les enfants de toute tribu, religion et nationalité, sans exception."
		},
		{
			letter: "Y",
			word: "Yield (Produire)",
			description: "Nous formons des diplômés prêts  pour l'université, le travail et la vie."
		}
	]
};
const why_linvoy = {
	title: "Pourquoi les Familles Choisissent Linvoy",
	subtitle: "Nous sommes la seule école au Ghana à offrir une véritable éducation holistique  où chaque enfant est le bienvenu.",
	holistic: {
		title: "Vraiment Holistique Éducation de Base",
		description: "De la Maternelle au Collège dans une seule école — une communauté, des valeurs cohérentes. Développement académique, moral, social et physique, tout en un seul endroit."
	},
	inclusive: {
		title: "Tous les Bienvenus",
		description: "Les enfants de toute tribu, religion et nationalité sont toujours les bienvenus. Sans exception. Notre diversité est notre force."
	},
	bilingual: {
		title: "Français comme Matière",
		description: "Le français est enseigné comme matière dédiée à chaque niveau — de la KG au JHS — donnant aux diplômés une vraie maîtrise de l'une des langues les plus parlées d'Afrique de l'Ouest."
	},
	boarding: {
		title: "Internat Sécurisé",
		description: "Parents de maison qualifiés, heures d'étude structurées et repas sains — un foyer bienveillant et supervisé loin de chez soi pour les élèves venant de tout le Ghana."
	},
	cctv: {
		title: "CCTV sur Tout le Campus 24h/24",
		description: "Chaque recoin de notre campus est surveillé par des caméras CCTV fonctionnant 24 heures sur 24, 7 jours sur 7. La sécurité de votre enfant n'est jamais laissée au hasard."
	}
};
const testimonials_preview = {
	title: "Ce que disent les Familles",
	view_all: "Lire Tous les Témoignages"
};
const news_preview = {
	title: "Dernières Actualités & Événements",
	view_all: "Voir Toutes les Actualités"
};
const cta_banner = {
	headline: "Offrez à Votre Enfant l'Avantage Linvoy",
	subheadline: "Les inscriptions sont ouvertes. Réservez la place de votre enfant dans la seule école d'Éducation de Base holistique avec internat au Ghana.",
	button: "Postuler pour l'Inscription",
	secondary: "Réserver une Visite"
};
const about = {
	title: "À Propos de Linvoy Academy",
	story_title: "Notre Histoire",
	story: "Linvoy Academy a été fondée sur une conviction simple mais puissante : chaque enfant mérite d'être aimé, inspiré et d'avoir une vraie chance de réussir. Nous sommes la seule école au Ghana à offrir une véritable Éducation de Base holistique  combinant un programme académique rigoureux aligné GES, le français comme matière dédiée à chaque niveau, un internat et un développement du caractère fondé sur des valeurs. Nous accueillons les enfants de toute tribu, religion et nationalité sans exception, car nous croyons que la diversité enrichit chaque classe.",
	mission_title: "Notre Mission & Vision",
	mission: "Notre mission est d'obtenir le succès et d'inspirer d'autres à venir pour une éducation sérieuse. Notre vision est un Ghana où chaque enfant  quelle que soit son origine  a accès à une éducation mondiale, aimante et holistique qui façonne non seulement sa carrière, mais aussi son caractère.",
	values_title: "Nos Valeurs : L·I·N·V·O·Y",
	registration_title: "Enregistrement et Accréditation",
	registration: "Linvoy Academy est un établissement d'enseignement dûment enregistré en République du Ghana. Notre programme répond aux normes nationales du Ghana Education Service (GES) et nos qualifications sont reconnues à travers le pays.",
	staff_title: "Notre Équipe",
	holistic_title: "Éducation Holistique",
	holistic: "Nous allons au-delà des livres. Chez Linvoy, l'éducation signifie développer l'enfant tout entier  académiquement grâce à notre programme rigoureux aligné GES, avec le français comme matière dédiée, socialement grâce à une communauté diverse et inclusive, physiquement grâce au sport et à l'activité, et moralement grâce à nos valeurs fondamentales. Aucune autre école au Ghana n'offre ce package complet."
};
const boarding = {
	title: "L'Internat de Linvoy Academy",
	subtitle: "Un foyer sûr et bienveillant loin de chez soi, pour les élèves venant de tout le Ghana et d'ailleurs.",
	intro: "Notre internat est conçu avec une seule priorité : la sécurité, le bonheur et l'épanouissement de votre enfant. Supervisés par un personnel attentionné 24h/24, nos pensionnaires bénéficient d'heures d'étude structurées, de repas sains, d'activités récréatives et d'une communauté soudée qui devient une seconde famille.",
	features_title: "La Vie à l'Internat",
	features: [
		{
			title: "Surveillance 24h/24",
			description: "Parents de maison qualifiés et personnel de sécurité sur place à toute heure, de jour comme de nuit."
		},
		{
			title: "Repas Sains",
			description: "Trois repas nutritifs par jour préparés frais sur le campus, avec les besoins alimentaires pris en compte."
		},
		{
			title: "Étude Structurée",
			description: "Heures d'étude calme dédiées chaque soir, soutenues par des enseignants de permanence."
		},
		{
			title: "Temps de Loisirs",
			description: "Sports, jeux, arts et activités sociales pour assurer une vie équilibrée et joyeuse."
		},
		{
			title: "Accompagnement Pastoral",
			description: "Entretiens réguliers, soutien psychologique et communication ouverte avec les parents."
		},
		{
			title: "Chambres Sûres et Propres",
			description: "Dortoirs confortables et bien entretenus avec rangements sécurisés pour les affaires personnelles."
		}
	],
	eligibility_title: "Qui peut être pensionnaire ?",
	eligibility: "L'internat est ouvert à tous les élèves inscrits à Linvoy Academy à partir de l'école primaire. Nous accueillons les élèves journaliers souhaitant passer à l'internat ainsi que les nouveaux élèves rejoignant directement comme pensionnaires.",
	enquire_button: "Se Renseigner sur l'Internat",
	cta_title: "Intéressé par l'Internat ?",
	cta_subtitle: "Contactez-nous pour organiser une visite ou recevoir notre brochure d'internat."
};
const programs = {
	title: "Nos Programmes",
	subtitle: "Un programme aligné sur le GES, de la Maternelle au Collège  avec le français comme matière dédiée et des spécialisations en Langues, Commerce et Informatique.",
	filter_all: "Tous",
	filter_languages: "Langues",
	filter_business: "Commerce",
	filter_computing: "Informatique",
	level_label: "Niveau",
	duration: "Durée",
	fees: "Frais",
	schedule: "Horaires",
	apply_now: "Postuler",
	no_courses: "Détails complets du programme bientôt disponibles. Contactez-nous pour le prospectus actuel.",
	levels_intro_title: "Nos Niveaux Scolaires",
	levels: [
		{
			key: "kindergarten",
			label: "Maternelle",
			grades: "KG 1 – KG 2",
			ages: "4–5 ans",
			years: "2 ans",
			description: "Un début d'apprentissage bienveillant et ludique. Les enfants développent l'alphabétisation et les premières notions de calcul en anglais, avec le français introduit comme matière dédiée dès le premier jour.",
			highlights: [
				"Français enseigné comme matière dès la KG 1",
				"Apprentissage par le jeu et l'expérience",
				"Développement social et émotionnel",
				"Sessions disponibles le matin et l'après-midi"
			]
		},
		{
			key: "primary",
			label: "École Primaire",
			grades: "Basic 1 – Basic 6",
			ages: "6–11 ans",
			years: "6 ans",
			description: "Six années de bases académiques solides, alignées sur le programme du Ghana Education Service (GES). Toutes les matières principales sont enseignées en anglais, avec le français comme matière dédiée tout au long des six années.",
			highlights: [
				"Programme complet aligné GES",
				"Français comme matière dédiée — toutes les années",
				"Informatique et culture numérique dès le Basic 1",
				"Sensibilisation aux affaires intégrée dans les matières"
			]
		},
		{
			key: "junior_high",
			label: "Collège (JHS)",
			grades: "JHS 1 – JHS 3",
			ages: "12–14 ans",
			years: "3 ans (BECE)",
			description: "Trois années de préparation au Brevet d'Études du Premier Cycle (BECE). Les élèves étudient toutes les matières GES avec des filières avancées en Français, Commerce et Informatique, leur donnant un avantage distinctif à l'examen et au-delà.",
			highlights: [
				"Préparation complète au BECE (toutes matières GES)",
				"Filière Français avancé",
				"Option Commerce & Entrepreneuriat",
				"Informatique et TIC sur les trois années",
				"Internat disponible dès JHS 1"
			]
		}
	]
};
const admissions = {
	title: "Admissions",
	subtitle: "Nous accueillons les enfants de tout horizon. Remplissez ce formulaire et notre équipe d'admissions vous contactera dans les 48 heures.",
	requirements_title: "Conditions d'Admission",
	requirements: [
		"Ouvert aux enfants de la Maternelle (~4 ans) jusqu'au Collège",
		"Bulletin scolaire précédent (si applicable)",
		"Acte de naissance ou pièce d'identité de l'enfant",
		"Carte nationale du parent ou tuteur",
		"Formulaire d'inscription ci-dessous complété",
		"Optionnel : visite du campus  nous l'encourageons vivement"
	],
	form: {
		student_name: "Nom complet de l'élève",
		date_of_birth: "Date de naissance",
		grade_applying: "Classe souhaitée",
		grade_placeholder: "ex. KG1, CM2, 4ème…",
		parent_name: "Nom complet du parent / tuteur",
		email: "E-mail du parent / tuteur",
		phone: "Téléphone du parent / tuteur",
		nationality: "Nationalité de l'élève",
		boarding: "Internat souhaité ?",
		boarding_yes: "Oui  place en internat souhaitée",
		boarding_no: "Non  élève externe",
		program: "Programme / Matière d'intérêt (facultatif)",
		program_placeholder: "Sélectionnez un programme",
		message: "Message complémentaire (facultatif)",
		submit: "Soumettre la Candidature",
		submitting: "Envoi en cours…",
		success: "Merci ! Votre candidature a été reçue. Notre équipe d'admissions vous contactera dans les 48 heures.",
		error: "Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.",
		validation: {
			required: "Ce champ est obligatoire.",
			email: "Veuillez saisir une adresse e-mail valide."
		}
	}
};
const fees = {
	title: "Frais et Paiement",
	subtitle: "Des frais transparents et accessibles pour chaque famille. Tous les frais sont par trimestre (3 trimestres par année scolaire).",
	table_program: "Programme / Niveau",
	table_duration: "Durée",
	table_fee: "Frais de scolarité (par trimestre)",
	boarding_fee_note: "Les frais d'internat (hébergement, repas et encadrement) sont facturés séparément des frais de scolarité. Contactez-nous pour le tarif complet de l'internat.",
	contact_for_pricing: "Contactez-nous pour les tarifs",
	terms_note: "L'année scolaire se déroule sur 3 trimestres. Les frais indiqués sont par trimestre. Des frais d'inscription uniques s'appliquent à la première entrée.",
	registration_fee_label: "Frais d'inscription (uniques)",
	registration_fee_value: "Contactez-nous",
	static_fee_table: [
		{
			level: "Maternelle (KG 1 – KG 2)",
			ages: "4–5 ans",
			duration: "2 ans",
			fee: "Contactez-nous"
		},
		{
			level: "École Primaire (Basic 1 – 6)",
			ages: "6–11 ans",
			duration: "6 ans",
			fee: "Contactez-nous"
		},
		{
			level: "Collège (JHS 1 – 3)",
			ages: "12–14 ans",
			duration: "3 ans (BECE)",
			fee: "Contactez-nous"
		}
	],
	boarding_row_label: "Internat (par trimestre, tout niveau)",
	boarding_row_fee: "Contactez-nous",
	what_included_title: "Ce qui est Inclus dans les Frais de Scolarité",
	what_included: [
		"Toutes les matières alignées sur le programme GES (Anglais, Mathématiques, Sciences, Études Sociales, Français, Informatique)",
		"Enseignement bilingue  Anglais et Français tout au long du cursus",
		"Manuels scolaires et matériaux pédagogiques",
		"Accès à toutes les installations et activités scolaires",
		"Bulletins scolaires chaque trimestre"
	],
	payment_title: "Modes de Paiement",
	payment_subtitle: "Nous acceptons le Mobile Money, le virement bancaire et le paiement en ligne pour votre commodité.",
	mobile_money_title: "Mobile Money",
	mobile_money_networks: [
		"MTN Mobile Money",
		"Telecel Cash (Vodafone)",
		"AirtelTigo Money"
	],
	bank_title: "Virement Bancaire",
	bank_placeholder: "Coordonnées bancaires fournies à la confirmation d'inscription. Contactez notre bureau des admissions pour les détails.",
	paystack_button: "Payer en Ligne avec Paystack"
};
const gallery = {
	title: "Galerie",
	subtitle: "Un aperçu de la vie vibrante à Linvoy Academy.",
	no_items: "Photos et vidéos à venir. Revenez bientôt."
};
const news = {
	title: "Actualités & Événements",
	subtitle: "Restez informé de tout ce qui se passe à Linvoy Academy.",
	no_posts: "Articles à venir.",
	read_more: "Lire la Suite",
	back: "← Retour aux Actualités"
};
const testimonials = {
	title: "Témoignages des Familles",
	subtitle: "Écoutez les parents et les élèves qui font partie de la famille Linvoy.",
	no_testimonials: "Témoignages à venir."
};
const faq = {
	title: "Questions Fréquemment Posées",
	subtitle: "Tout ce que les parents et les élèves veulent savoir sur Linvoy Academy.",
	no_items: "FAQ à venir.",
	contact_cta: "Vous avez encore des questions ? Nous sommes heureux de vous aider.",
	contact_link: "Nous Contacter"
};
const contact = {
	title: "Contactez-Nous",
	subtitle: "Nous serions ravis de vous entendre. Contactez-nous par téléphone, WhatsApp, e-mail ou via le formulaire ci-dessous  nous sommes toujours disponibles.",
	address_label: "Adresse",
	phone_label: "Téléphone",
	email_label: "E-mail",
	whatsapp_button: "Discuter sur WhatsApp",
	map_placeholder: "Carte du campus bientôt disponible.",
	tour_note: "Nous invitons chaleureusement toutes les familles à visiter notre campus. Contactez-nous pour organiser une visite.",
	form: {
		name: "Votre Nom",
		email: "Adresse E-mail",
		subject: "Sujet",
		message: "Message",
		submit: "Envoyer le Message",
		submitting: "Envoi en cours…",
		success: "Merci ! Votre message a été reçu. Nous vous répondrons dans les plus brefs délais.",
		error: "Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.",
		validation: {
			required: "Ce champ est obligatoire.",
			email: "Veuillez saisir une adresse e-mail valide."
		}
	}
};
const footer = {
	tagline: "La seule école d'Éducation de Base holistique avec internat au Ghana  où chaque enfant est aimé, inspiré et a l'opportunité de donner le meilleur de lui-même.",
	quick_links: "Liens Rapides",
	contact_details: "Coordonnées",
	follow_us: "Suivez-Nous",
	copyright: "© {year} Linvoy Academy. Tous droits réservés."
};
const whatsapp_label = "Discuter sur WhatsApp";
const loading = "Chargement…";
const error_generic = "Une erreur s'est produite. Veuillez réessayer.";
const fr = {
	lang: lang,
	nav: nav,
	hero: hero,
	programs_overview: programs_overview,
	linvoy_meaning: linvoy_meaning,
	why_linvoy: why_linvoy,
	testimonials_preview: testimonials_preview,
	news_preview: news_preview,
	cta_banner: cta_banner,
	about: about,
	boarding: boarding,
	programs: programs,
	admissions: admissions,
	fees: fees,
	gallery: gallery,
	news: news,
	testimonials: testimonials,
	faq: faq,
	contact: contact,
	footer: footer,
	whatsapp_label: whatsapp_label,
	loading: loading,
	error_generic: error_generic
};

const translations = { en, fr };
function useTranslation(lang) {
  const locale = lang in translations ? lang : "en";
  return translations[locale];
}
function switchLocaleUrl(pathname, targetLocale) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 0 && (parts[0] === "en" || parts[0] === "fr")) {
    parts[0] = targetLocale;
  } else {
    parts.unshift(targetLocale);
  }
  return "/" + parts.join("/");
}

const $$Astro$4 = createAstro("https://linvoyacademy.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  const { lang } = Astro2.props;
  const t = useTranslation(lang);
  const l = lang;
  const pathname = Astro2.url.pathname;
  const navLinks = [
    { key: "home", href: `/${l}/` },
    { key: "about", href: `/${l}/about` },
    { key: "programs", href: `/${l}/programs` },
    { key: "boarding", href: `/${l}/boarding` },
    { key: "admissions", href: `/${l}/admissions` },
    { key: "fees", href: `/${l}/fees` },
    { key: "gallery", href: `/${l}/gallery` },
    { key: "news", href: `/${l}/news` },
    { key: "contact", href: `/${l}/contact` }
  ];
  const otherLang = l === "en" ? "fr" : "en";
  const toggleUrl = switchLocaleUrl(pathname, otherLang);
  function isActive(href) {
    if (href === `/${l}/`) return pathname === href || pathname === `/${l}`;
    return pathname.startsWith(href);
  }
  return renderTemplate`${maybeRenderHead()}<header id="site-header" class="animate-header fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-transparent transition-all duration-300" data-astro-cid-3ef6ksr2> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-3ef6ksr2> <div class="flex items-center justify-between h-16" data-astro-cid-3ef6ksr2> <!-- ── Logo ── --> <a${addAttribute(`/${l}/`, "href")} class="flex items-center gap-3 flex-shrink-0 group" aria-label="Linvoy Academy  Home" data-astro-cid-3ef6ksr2> <div class="relative" data-astro-cid-3ef6ksr2> <!-- Glow ring animates on hover --> <span class="absolute inset-0 rounded-full bg-gold/20 scale-0 group-hover:scale-110 transition-transform duration-400 ease-out" data-astro-cid-3ef6ksr2></span> <img src="/images/logo.jpeg" alt="Linvoy Academy" width="40" height="40" class="relative rounded-full object-cover ring-2 ring-gold group-hover:ring-gold-300 transition-all duration-300" data-astro-cid-3ef6ksr2> </div> <span class="text-white font-heading font-bold text-lg leading-tight hidden sm:block" data-astro-cid-3ef6ksr2> <span class="group-hover:text-gold transition-colors duration-200" data-astro-cid-3ef6ksr2>Linvoy</span> <br data-astro-cid-3ef6ksr2><span class="text-gold text-sm font-semibold" data-astro-cid-3ef6ksr2>Academy</span> </span> </a> <!-- ── Desktop Nav ── --> <nav class="hidden lg:flex items-center gap-0.5" aria-label="Main navigation" data-astro-cid-3ef6ksr2> ${navLinks.map(({ key, href }, i) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute([
    isActive(href) ? "nav-link nav-link-active" : "nav-link",
    `animate-rise delay-${(i + 1) * 50}`
  ], "class:list")}${addAttribute(isActive(href) ? "page" : void 0, "aria-current")} data-ripple data-astro-cid-3ef6ksr2> ${t.nav[key]} </a>`)} </nav> <!-- ── Right side: lang toggle + hamburger ── --> <div class="flex items-center gap-3" data-astro-cid-3ef6ksr2> <!-- Language toggle --> <a${addAttribute(toggleUrl, "href")} class="lang-toggle animate-rise delay-500"${addAttribute(`Switch to ${otherLang === "fr" ? "French" : "English"}`, "aria-label")} data-astro-cid-3ef6ksr2> <!-- Globe icon --> <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" data-astro-cid-3ef6ksr2></path> </svg> ${otherLang.toUpperCase()} </a> <!-- Hamburger  animates into X via CSS --> <button id="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Toggle navigation menu" class="lg:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg
                 hover:bg-white/10 active:bg-white/20 transition-colors duration-200 p-2" data-astro-cid-3ef6ksr2> <span class="hamburger-bar w-5 h-[2px] bg-white rounded-full transition-all duration-300 origin-center" data-astro-cid-3ef6ksr2></span> <span class="hamburger-bar w-5 h-[2px] bg-white rounded-full transition-all duration-300" data-astro-cid-3ef6ksr2></span> <span class="hamburger-bar w-5 h-[2px] bg-white rounded-full transition-all duration-300 origin-center" data-astro-cid-3ef6ksr2></span> </button> </div> </div> </div> <!-- ── Mobile Menu ── --> <div id="mobile-menu" class="lg:hidden overflow-hidden" style="max-height: 0; transition: max-height 0.35s cubic-bezier(0.22,1,0.36,1);" aria-hidden="true" data-astro-cid-3ef6ksr2> <nav class="bg-navy-800/95 backdrop-blur-md border-t border-white/10 px-4 py-3 space-y-1" aria-label="Mobile navigation" data-astro-cid-3ef6ksr2> ${navLinks.map(({ key, href }) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute([
    isActive(href) ? "mobile-nav-link mobile-nav-link-active" : "mobile-nav-link"
  ], "class:list")}${addAttribute(isActive(href) ? "page" : void 0, "aria-current")} data-astro-cid-3ef6ksr2> ${t.nav[key]} </a>`)} <!-- Lang toggle in mobile --> <div class="pt-2 mt-2 border-t border-white/10" data-astro-cid-3ef6ksr2> <a${addAttribute(toggleUrl, "href")} class="mobile-nav-link flex items-center gap-2" data-astro-cid-3ef6ksr2> <svg class="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" data-astro-cid-3ef6ksr2></path> </svg> ${otherLang === "fr" ? "Fran\xE7ais" : "English"} </a> </div> </nav> </div> </header>  `;
}, "/home/kash/Desktop/LINVOY/website/pro/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro("https://linvoyacademy.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang, settings } = Astro2.props;
  const t = useTranslation(lang);
  const l = lang;
  const phones = settings?.phones || [];
  const email = settings?.email || "info@linvoyacademy.com";
  const address = settings?.address || "Accra, Ghana";
  const facebook = settings?.facebookUrl || "#";
  const tiktok = settings?.tiktokUrl || "#";
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const displayPhones = phones.length > 0 ? phones : [{ number: "+233 XX XXX XXXX" }];
  const quickLinks = [
    { key: "about", href: `/${l}/about` },
    { key: "programs", href: `/${l}/programs` },
    { key: "boarding", href: `/${l}/boarding` },
    { key: "admissions", href: `/${l}/admissions` },
    { key: "fees", href: `/${l}/fees` },
    { key: "gallery", href: `/${l}/gallery` },
    { key: "news", href: `/${l}/news` },
    { key: "faq", href: `/${l}/faq` },
    { key: "contact", href: `/${l}/contact` }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-navy-700 text-gray-200"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-10"> <!-- Brand --> <div> <a${addAttribute(`/${l}/`, "href")} class="flex items-center gap-3 mb-4"> <img src="/images/logo.jpeg" alt="Linvoy Academy" width="48" height="48" class="rounded-full object-cover ring-2 ring-gold"> <span class="text-white font-heading font-bold text-xl">
Linvoy <span class="text-gold">Academy</span> </span> </a> <p class="text-gray-400 text-sm leading-relaxed">${t.footer.tagline}</p> </div> <!-- Quick Links --> <div> <h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">${t.footer.quick_links}</h3> <ul class="space-y-2"> ${quickLinks.map(({ key, href }) => renderTemplate`<li> <a${addAttribute(href, "href")} class="text-gray-400 hover:text-gold text-sm transition-colors"> ${t.nav[key]} </a> </li>`)} </ul> </div> <!-- Contact Details --> <div> <h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">${t.footer.contact_details}</h3> <ul class="space-y-3 text-sm text-gray-400"> <li class="flex items-start gap-2"> <svg class="w-4 h-4 mt-0.5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> ${address} </li> ${displayPhones.map((p) => renderTemplate`<li class="flex items-center gap-2"> <svg class="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <div> ${p.label && renderTemplate`<span class="text-gray-500 text-xs block">${p.label}</span>`} <a${addAttribute(`tel:${p.number}`, "href")} class="hover:text-gold transition-colors">${p.number}</a> </div> </li>`)} <li class="flex items-center gap-2"> <svg class="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <a${addAttribute(`mailto:${email}`, "href")} class="hover:text-gold transition-colors">${email}</a> </li> </ul> <!-- Social Links --> <div class="mt-6"> <h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-3">${t.footer.follow_us}</h3> <div class="flex gap-3"> <a${addAttribute(facebook, "href")} target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors" aria-label="Facebook"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg> </a> <a${addAttribute(tiktok, "href")} target="_blank" rel="noopener noreferrer" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors" aria-label="TikTok"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path> </svg> </a> </div> </div> </div> </div> <div class="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 text-sm"> <span>${t.footer.copyright.replace("{year}", String(year))}</span> <span>
Designed &amp; built by <span class="text-gold font-medium">Mawuena Kossi Baboh</span> </span> </div> </div> </footer>`;
}, "/home/kash/Desktop/LINVOY/website/pro/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://linvoyacademy.com");
const $$WhatsAppButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WhatsAppButton;
  const { lang, settings } = Astro2.props;
  const t = useTranslation(lang);
  const whatsappNumbers = settings?.whatsappNumbers || [];
  const primaryWa = whatsappNumbers[0]?.number || "+233XXXXXXXXX";
  const waNumber = primaryWa.replace(/\D/g, "");
  const waUrl = `https://wa.me/${waNumber}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(waUrl, "href")} target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-400/50"${addAttribute(t.whatsapp_label, "aria-label")}${addAttribute(t.whatsapp_label, "title")}> <!-- WhatsApp SVG icon --> <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg> </a>`;
}, "/home/kash/Desktop/LINVOY/website/pro/src/components/WhatsAppButton.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://linvoyacademy.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    lang,
    title,
    description,
    ogImage = "/images/logo.jpeg",
    url,
    type = "website",
    publishedTime,
    modifiedTime,
    author = "Linvoy Academy",
    section,
    tags = [],
    noIndex = false,
    noFollow = false
  } = Astro2.props;
  const t = useTranslation(lang);
  const canonicalUrl = url || `https://linvoyacademy.com/${lang}${Astro2.url.pathname}`;
  const siteName = "Linvoy Academy";
  const designer = "Mawuena Kossi Baboh";
  const locales = {
    en: { locale: "en_GB", alt: "fr" },
    fr: { locale: "fr_FR", alt: "en" }
  };
  const currentLocale = locales[lang] || locales.en;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "NewsArticle" : "WebSite",
    name: siteName,
    url: "https://linvoyacademy.com",
    logo: "https://linvoyacademy.com/images/logo.jpeg",
    description: t.hero?.subheadline || description,
    author: {
      "@type": "Organization",
      name: siteName,
      url: "https://linvoyacademy.com",
      logo: "https://linvoyacademy.com/images/logo.jpeg"
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: "https://linvoyacademy.com/images/logo.jpeg"
      }
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://linvoyacademy.com/{lang}/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    inLanguage: lang,
    ...type === "article" && {
      headline: title,
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      author: {
        "@type": "Organization",
        name: author
      },
      publisher: {
        "@type": "Organization",
        name: siteName,
        logo: {
          "@type": "ImageObject",
          url: "https://linvoyacademy.com/images/logo.jpeg"
        }
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      articleSection: section,
      keywords: tags.join(", ")
    },
    ...type === "website" && {
      "@type": "WebSite",
      name: siteName,
      alternateName: "Linvoy Academy Ghana",
      description: t.hero?.subheadline || description,
      url: "https://linvoyacademy.com"
    }
  };
  return renderTemplate(_a || (_a = __template(["<!-- Primary Meta Tags --><title>", ' | Linvoy Academy</title><meta name="title"', '><meta name="description"', '><meta name="keywords"', '><meta name="author"', '><meta name="designer"', '><meta name="developer"', '><meta name="robots"', '><link rel="canonical"', '><!-- Alternate language versions for hreflang --><link rel="alternate" hreflang="en"', '><link rel="alternate" hreflang="fr"', '><link rel="alternate" hreflang="x-default" href="https://linvoyacademy.com/"><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt"', '><meta property="og:site_name"', '><meta property="og:locale"', '><meta property="og:locale:alternate"', ">", '<!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:alt"', '><meta name="twitter:site" content="@linvoyacademy"><meta name="twitter:creator" content="@mawuenakossibaboh"><!-- Additional SEO --><meta name="theme-color" content="#1a2e6e"><meta name="color-scheme" content="light"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="dns-prefetch" href="https://cdn.sanity.io"><link rel="dns-prefetch" href="https://www.youtube-nocookie.com"><!-- JSON-LD Structured Data --><script type="application/ld+json">', "<\/script>"])), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(["Linvoy Academy", "Ghana", "Basic Education", "Boarding School", "French", "Business", "Computing", "Education", ...tags].join(", "), "content"), addAttribute(author, "content"), addAttribute(designer, "content"), addAttribute(designer, "content"), addAttribute(`${noIndex ? "noindex" : "index"}, ${noFollow ? "nofollow" : "follow"}`, "content"), addAttribute(canonicalUrl, "href"), addAttribute(`https://linvoyacademy.com/en${Astro2.url.pathname.replace(/^\/[a-z]{2}/, "")}`, "href"), addAttribute(`https://linvoyacademy.com/fr${Astro2.url.pathname.replace(/^\/[a-z]{2}/, "")}`, "href"), addAttribute(type, "content"), addAttribute(canonicalUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`https://linvoyacademy.com${ogImage}`, "content"), addAttribute(title, "content"), addAttribute(siteName, "content"), addAttribute(currentLocale.locale, "content"), addAttribute(locales[currentLocale.alt].locale, "content"), type === "article" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime || "", "content")}><meta property="article:modified_time"${addAttribute(modifiedTime || publishedTime || "", "content")}><meta property="article:author"${addAttribute(author, "content")}><meta property="article:section"${addAttribute(section || "", "content")}>${tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`)}` })}`, addAttribute(canonicalUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`https://linvoyacademy.com${ogImage}`, "content"), addAttribute(title, "content"), unescapeHTML(JSON.stringify(jsonLd, null, 2)));
}, "/home/kash/Desktop/LINVOY/website/pro/src/components/SEO.astro", void 0);

const $$Astro = createAstro("https://linvoyacademy.com");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "Linvoy Academy  Business, Languages and Computing institute in Ghana.",
    ogImage,
    lang,
    url,
    type = "website",
    publishedTime,
    modifiedTime,
    author = "Linvoy Academy",
    section,
    tags = [],
    noIndex = false,
    noFollow = false
  } = Astro2.props;
  let settings = null;
  try {
    settings = await sanityClient.fetch(QUERIES.siteSettings);
  } catch (_) {
  }
  return renderTemplate`<html${addAttribute(lang, "lang")} class="scroll-smooth" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- SEO Component handles all meta tags, Open Graph, Twitter Cards, JSON-LD -->${renderComponent($$result, "SEO", $$SEO, { "lang": lang, "title": title, "description": description, "ogImage": ogImage, "url": url, "type": type, "publishedTime": publishedTime, "modifiedTime": modifiedTime, "author": author, "section": section, "tags": tags, "noIndex": noIndex, "noFollow": noFollow, "data-astro-cid-37fxchfa": true })}<!-- Fonts with preload for performance --><link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap" media="print" onload="this.media='all'">${maybeRenderHead()}<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap"></noscript><!-- Critical CSS hint: start body invisible until fonts settle -->${renderHead()}</head> <body class="flex flex-col min-h-screen" data-astro-cid-37fxchfa> <!-- Page transition overlay  slides away on load --> <div id="page-curtain" aria-hidden="true" style="position:fixed;inset:0;z-index:9999;background:#1a2e6e;
             animation: curtain-exit 0.55s 0.1s cubic-bezier(0.76,0,0.24,1) both;" data-astro-cid-37fxchfa></div> ${renderComponent($$result, "Header", $$Header, { "lang": lang, "settings": settings, "data-astro-cid-37fxchfa": true })} <main id="main-content" class="flex-1 pt-16" data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "lang": lang, "settings": settings, "data-astro-cid-37fxchfa": true })} ${renderComponent($$result, "WhatsAppButton", $$WhatsAppButton, { "lang": lang, "settings": settings, "data-astro-cid-37fxchfa": true })}  <!-- Curtain keyframe must be in a global style block --> </body></html><!-- Global animation scripts -->`;
}, "/home/kash/Desktop/LINVOY/website/pro/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, useTranslation as u };

import type { JSX } from "react";
import Image, { StaticImageData } from "next/image";
import filipImg from "@/app/blog/_assets/images/authors/filip.jpeg";
import introducingSupabaseImg from "@/public/blog/introducing-supabase/header.png";
import placeholderImage1 from '@/app/blog/_assets/images/breathing-anxiety-relief.jpg';
import placeholderImage2 from '@/app/blog/_assets/images/breathwork-mental-performance.jpg';
// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

export type categoryType = {
  slug: string;
  title: string;
  titleShort?: string;
  description: string;
  descriptionShort?: string;
};

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
const categorySlugs: { [key: string]: string } = {
  feature: "feature",
  tutorial: "tutorial",
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories: categoryType[] = [
  {
    // The slug to use in the URL, from the categorySlugs object above.
    slug: categorySlugs.feature,
    // The title to display in the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
    title: "New Features",
    // A short version of the title above, to display in small components like badges. 1 or 2 words
    titleShort: "Features",
    // The description of the category to display on the category page. Up to 160 characters.
    description:
      "Here are the latest features we've added to ShipFast. I'm constantly improving our product to help you ship faster.",
    // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
    descriptionShort: "Latest features added to ShipFast.",
  },
  {
    slug: categorySlugs.tutorial,
    title: "How Tos & Tutorials",
    titleShort: "Tutorials",
    description:
      "Learn how to use ShipFast with these step-by-step tutorials. I'll show you how to ship faster and save time.",
    descriptionShort:
      "Learn how to use ShipFast with these step-by-step tutorials.",
  },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================


export type authorType = {
  slug: string;
  name: string;
  job: string;
  description: string;
  avatar: StaticImageData | string;
  socials?: {
    name: string;
    icon: JSX.Element;
    url: string;
  }[];
};

// Social icons used in the author's bio.
const socialIcons: {
  [key: string]: {
    name: string;
    svg: JSX.Element;
  };
} = {
  twitter: {
    name: "Twitter",
    svg: (
      <svg
        version="1.1"
        id="svg5"
        x="0px"
        y="0px"
        viewBox="0 0 1668.56 1221.19"
        className="w-9 h-9"
        // Using a dark theme? ->  className="w-9 h-9 fill-white"
      >
        <g id="layer1" transform="translate(52.390088,-25.058597)">
          <path
            id="path1009"
            d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
          />
        </g>
      </svg>
    ),
  },
  linkedin: {
    name: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  github: {
    name: "GitHub",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
};

// These slugs are used to generate pages in the /blog/author/[authorId].js. It's a way to show all articles from an author.
const authorSlugs: {
  [key: string]: string;
} = {
  marc: "marc",
};

// All the blog authors data display in the /blog/author/[authorId].js pages.
export const authors: authorType[] = [
  {
    // The slug to use in the URL, from the authorSlugs object above.
    slug: authorSlugs.marc,
    // The name to display in the author's bio. Up to 60 characters.
    name: "Filip Muntean",
    // The job to display in the author's bio. Up to 60 characters.
    // job: "Maker of ByeDispute",
    // // The description of the author to display in the author's bio. Up to 160 characters.
    // description:
    //   "Marc is a developer and an entrepreneur. He's built 20 startups in the last 3 years. 6 were profitable and 3 were acquired. He's currently building ByeDispute, the #1 Stripe Chargebacks Protection tool.",
    job: 'AI Student & App Developer',
    description: 'A master\'s student in AI passionate about developing mental health technologies to support students and professionals managing anxiety.',
    // The avatar of the author to display in the author's bio and avatar badge. It's better to use a local image, but you can also use an external image (https://...)
    avatar: filipImg,
    // A list of social links to display in the author's bio.
    // socials: [
    //   {
    //     name: socialIcons.twitter.name,
    //     icon: socialIcons.twitter.svg,
    //     url: "https://twitter.com/marc_louvion",
    //   },
    //   {
    //     name: socialIcons.linkedin.name,
    //     icon: socialIcons.linkedin.svg,
    //     url: "https://www.linkedin.com/in/marclouvion/",
    //   },
    //   {
    //     name: socialIcons.github.name,
    //     icon: socialIcons.github.svg,
    //     url: "https://github.com/Marc-Lou-Org/ship-fast",
    //   },
    // ],
  },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

export type articleType = {
  slug: string;
  title: string;
  description: string;
  categories: categoryType[];
  author: authorType;
  publishedAt: string;
  image: {
    src?: StaticImageData;
    urlRelative: string;
    alt: string;
  };
  content: JSX.Element;
};

// These styles are used in the content of the articles. When you update them, all articles will be updated.
const styles: {
  [key: string]: string;
} = {
  h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content",
  h3: "text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content",
  p: "text-base-content/90 leading-relaxed",
  ul: "list-inside list-disc text-base-content/90 leading-relaxed",
  li: "list-item",
  // Altnernatively, you can use the library react-syntax-highlighter to display code snippets.
  code: "text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all",
  codeInline:
    "text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all",
};

// All the blog articles data display in the /blog/[articleId].js pages.

export const articles: articleType[] = [
  {
    slug: 'breathing-anxiety-relief',
    title: 'How Breathing Exercises Can Calm Your Anxious Mind',
    description: 'Discover science-backed breathing techniques that can help reduce anxiety and improve mental well-being for students and professionals.',
    categories: [
      categories.find((category) => category.slug === 'tutorial')
    ],
    author: authors.find((author) => author.slug === 'marc'), // Using existing author for now
    publishedAt: '2024-03-27',
    image: {
      src: placeholderImage1,
      urlRelative: '/blog/breathing-anxiety-relief/header.png',
      alt: 'Person practicing calming breathing technique'
    },
    content: (
      <>
        <Image
          src={placeholderImage1}
          alt="Person practicing calming breathing technique"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Understanding Anxiety in Academic and Professional Life</h2>
          <p className={styles.p}>
            As a student pursuing a Master&apos;s in AI, I&apos;ve experienced firsthand the overwhelming stress and anxiety that comes with rigorous academic and professional challenges. The constant pressure to perform, meet deadlines, and excel can take a significant toll on mental health.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>The Science Behind Breathing and Anxiety</h3>
          <p className={styles.p}>
            Breathing exercises are more than just a relaxation technique—they&apos;re a scientifically proven method to regulate your nervous system. When we&apos;re anxious, our breathing becomes shallow and rapid, triggering the body&apos;s stress response. By practicing controlled breathing, we can activate the parasympathetic nervous system, which helps calm the mind and reduce anxiety.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Three Proven Breathing Techniques</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <strong>4-7-8 Technique</strong>: Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds. This method helps reset your nervous system and reduce immediate stress.
            </li>
            <li className={styles.li}>
              <strong>Box Breathing</strong>: Breathe in for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold for 4 seconds. Excellent for maintaining focus during high-pressure situations.
            </li>
            <li className={styles.li}>
              <strong>Diaphragmatic Breathing</strong>: Focus on deep belly breathing, which helps lower heart rate and blood pressure, promoting a sense of calm.
            </li>
          </ul>
        </section>

        <section>
          <h3 className={styles.h3}>Why I Created This App</h3>
          <p className={styles.p}>
            As an AI student, I wanted to create a tool that combines scientific research with practical mental health support. This app was born from my personal experiences with anxiety and the desire to provide an accessible, technology-driven solution for managing stress.
          </p>
        </section>
      </>
    )
  },
  {
    slug: 'breathwork-mental-performance',
    title: 'Breathwork: Your Secret Weapon for Mental Performance',
    description: 'Learn how strategic breathing can enhance focus, reduce stress, and improve cognitive performance for students and professionals.',
    categories: [
      categories.find((category) => category.slug === 'tutorial')
    ],
    author: authors.find((author) => author.slug === 'marc'), // Using existing author for now
    publishedAt: '2024-04-10',
    image: {
      src: placeholderImage2,
      urlRelative: '/blog/breathwork-mental-performance/header.png',
      alt: 'Student focusing with breathing technique'
    },
    content: (
      <>
        <Image
          src={placeholderImage2}
          alt="Student focusing with breathing technique"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Breathing: More Than Just Oxygen</h2>
          <p className={styles.p}>
            In the high-stakes world of academic research and professional development, mental performance is everything. What if I told you that the key to enhanced cognitive function might be as simple as how you breathe?
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Cognitive Benefits of Controlled Breathing</h3>
          <p className={styles.p}>
            Research shows that strategic breathwork can:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Improve concentration and focus</li>
            <li className={styles.li}>Reduce cortisol levels (stress hormone)</li>
            <li className={styles.li}>Enhance decision-making capabilities</li>
            <li className={styles.li}>Increase emotional regulation</li>
          </ul>
        </section>

        <section>
          <h3 className={styles.h3}>Technology Meets Mental Wellness</h3>
          <p className={styles.p}>
            As an AI student, I saw an opportunity to blend this app with mental health support. 
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Practical Integration</h3>
          <p className={styles.p}>
            Whether you&apos;re preparing for a complex coding project, studying for exams, or navigating professional challenges, consistent breathwork can be your competitive advantage.
          </p>
        </section>
      </>
    )
  }
];
// export const articles: articleType[] = [
//   {
//     // The unique slug to use in the URL. It's also used to generate the canonical URL.
//     slug: "introducing-supabase",
//     // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
//     title: "Introducing Supabase to ShipFast",
//     // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
//     description:
//       "Supabase is an open-source Firebase alternative. It's a great tool for building a backend for your app. It's now integrated with ShipFast!",
//     // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
//     categories: [
//       categories.find((category) => category.slug === categorySlugs.feature),
//     ],
//     // The author of the article. It's used to generate a link to the author's bio page.
//     author: authors.find((author) => author.slug === authorSlugs.marc),
//     // The date of the article. It's used to generate the meta date.
//     publishedAt: "2023-11-20",
//     image: {
//       // The image to display in <CardArticle /> components.
//       src: introducingSupabaseImg,
//       // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD. It should be the same image as the src above.
//       urlRelative: "/blog/introducing-supabase/header.jpg",
//       alt: "Supabase and ShipFast logo combined",
//     },
//     // The actual content of the article that will be shown under the <h1> title in the article page.
//     content: (
//       <>
//         <Image
//           src={introducingSupabaseImg}
//           alt="Supabase and ShipFast logo combined"
//           width={700}
//           height={500}
//           priority={true}
//           className="rounded-box"
//           placeholder="blur"
//         />
//         <section>
//           <h2 className={styles.h2}>Introduction</h2>
//           <p className={styles.p}>
//             Supabase is an open-source Firebase alternative. It&apos;s a great
//             tool for building a backend for your app. It&apos;s now integrated
//             with ShipFast!
//           </p>
//         </section>

//         <section>
//           <h3 className={styles.h3}>1. Create a supabase account</h3>
//           <p className={styles.p}>
//             First, go to{" "}
//             <a href="https://supabase.com/" className="link link-primary">
//               Supabase
//             </a>{" "}
//             and create an account. It&apos;s free for up to 10,000 rows per
//             table.
//             <br />
//             Then create a new project and a new table. You can use the following
//             SQL schema:
//           </p>

//           <pre className={styles.code}>
//             <code>
//               {`CREATE TABLE public.users (
//   id bigint NOT NULL DEFAULT nextval('users_id_seq'::regclass),
//   email text NOT NULL,
//   password text NOT NULL,
//   created_at timestamp with time zone NOT NULL DEFAULT now(),
//   updated_at timestamp with time zone NOT NULL DEFAULT now(),
//   CONSTRAINT users_pkey PRIMARY KEY (id)
// );`}
//             </code>
//           </pre>
//         </section>

//         <section>
//           <h3 className={styles.h3}>2. Add your credentials to ShipFast</h3>
//           <p className={styles.p}>
//             Copy the <span className={styles.codeInline}>API URL</span> and{" "}
//             <span className={styles.codeInline}>API Key</span> from your
//             Supabase project settings and add them to your ShipFast project
//             settings. Add these files to your project:
//           </p>

//           <ul className={styles.ul}>
//             <li className={styles.li}>.env.local</li>
//             <li className={styles.li}>.env.production</li>
//           </ul>
//         </section>
//       </>
//     ),
//   },
// ];

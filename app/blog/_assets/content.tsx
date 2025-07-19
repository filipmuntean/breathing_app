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
    title: "App Updates",
    // A short version of the title above, to display in small components like badges. 1 or 2 words
    titleShort: "Updates",
    // The description of the category to display on the category page. Up to 160 characters.
    description:
      "Latest improvements and new features added to Just Breathe to enhance your mindfulness and breathing practice experience.",
    // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
    descriptionShort: "Latest app updates and improvements.",
  },
  {
    slug: categorySlugs.tutorial,
    title: "Breathing Techniques & Guides",
    titleShort: "Guides",
    description:
      "Master effective breathing techniques and mindfulness practices with our comprehensive guides designed to reduce anxiety and promote mental wellness.",
    descriptionShort:
      "Learn breathing techniques and mindfulness practices.",
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
  },
  {
    slug: 'science-of-breathing-anxiety',
    title: 'The Science Behind How Breathing Reduces Anxiety',
    description: 'Understanding the neurological and physiological mechanisms of how controlled breathing activates your parasympathetic nervous system to reduce anxiety.',
    categories: [
      categories.find((category) => category.slug === 'tutorial')
    ],
    author: authors.find((author) => author.slug === 'marc'),
    publishedAt: '2024-05-15',
    image: {
      src: placeholderImage1,
      urlRelative: '/blog/science-of-breathing-anxiety/header.png',
      alt: 'Brain diagram showing breathing and anxiety pathways'
    },
    content: (
      <>
        <Image
          src={placeholderImage1}
          alt="Brain diagram showing breathing and anxiety pathways"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Understanding Your Nervous System</h2>
          <p className={styles.p}>
            When anxiety strikes, your sympathetic nervous system activates, triggering the "fight or flight" response. This leads to rapid, shallow breathing, increased heart rate, and heightened stress hormones like cortisol.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>How Breathing Interrupts the Anxiety Cycle</h3>
          <p className={styles.p}>
            Controlled breathing techniques work by stimulating the vagus nerve, which activates your parasympathetic nervous system - your body's "rest and digest" mode. This physiological shift:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Reduces cortisol and adrenaline production</li>
            <li className={styles.li}>Lowers heart rate and blood pressure</li>
            <li className={styles.li}>Increases GABA neurotransmitter activity for calmness</li>
            <li className={styles.li}>Improves oxygen flow to the prefrontal cortex for better decision-making</li>
          </ul>
        </section>

        <section>
          <h3 className={styles.h3}>Evidence-Based Breathing Patterns</h3>
          <p className={styles.p}>
            Research shows that extending your exhale longer than your inhale is particularly effective for anxiety reduction. The 4-7-8 technique and box breathing have been clinically proven to reduce anxiety symptoms within minutes.
          </p>
        </section>
      </>
    )
  },
  {
    slug: 'breathing-exercises-for-students',
    title: 'Quick Breathing Exercises for Students During Exams',
    description: 'Practical breathing techniques students can use to manage test anxiety, improve focus, and enhance academic performance during high-stress periods.',
    categories: [
      categories.find((category) => category.slug === 'tutorial')
    ],
    author: authors.find((author) => author.slug === 'marc'),
    publishedAt: '2024-06-02',
    image: {
      src: placeholderImage2,
      urlRelative: '/blog/breathing-exercises-students/header.png',
      alt: 'Student practicing breathing before exam'
    },
    content: (
      <>
        <Image
          src={placeholderImage2}
          alt="Student practicing breathing before exam"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Academic Stress and Its Impact</h2>
          <p className={styles.p}>
            As a student myself, I understand the overwhelming pressure of exams, deadlines, and academic expectations. Test anxiety affects up to 40% of students and can significantly impact performance, even when you know the material well.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>The 2-Minute Pre-Exam Routine</h3>
          <p className={styles.p}>
            Before any exam or presentation, try this quick sequence:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>30 seconds</strong>: Slow, deep breaths to center yourself</li>
            <li className={styles.li}><strong>60 seconds</strong>: 4-7-8 breathing (inhale 4, hold 7, exhale 8)</li>
            <li className={styles.li}><strong>30 seconds</strong>: Gentle neck and shoulder rolls while breathing naturally</li>
          </ul>
        </section>

        <section>
          <h3 className={styles.h3}>During-Exam Anxiety Management</h3>
          <p className={styles.p}>
            If anxiety rises during an exam, use discrete breathing techniques that won't draw attention:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>Silent box breathing while reading questions</li>
            <li className={styles.li}>Gentle belly breathing between sections</li>
            <li className={styles.li}>Progressive muscle relaxation starting with your feet</li>
          </ul>
        </section>

        <section>
          <h3 className={styles.h3}>Building Long-Term Resilience</h3>
          <p className={styles.p}>
            Regular breathing practice, even 5 minutes daily, builds your capacity to handle academic stress. Consider integrating breathing exercises into your study breaks for maximum benefit.
          </p>
        </section>
      </>
    )
  },
  {
    slug: 'workplace-breathing-techniques',
    title: 'Desk-Friendly Breathing Techniques for Work Stress',
    description: 'Professional-appropriate breathing exercises you can do at your desk to manage workplace stress, improve focus, and maintain calm during busy workdays.',
    categories: [
      categories.find((category) => category.slug === 'tutorial')
    ],
    author: authors.find((author) => author.slug === 'marc'),
    publishedAt: '2024-06-20',
    image: {
      src: placeholderImage1,
      urlRelative: '/blog/workplace-breathing-techniques/header.png',
      alt: 'Professional at desk practicing breathing'
    },
    content: (
      <>
        <Image
          src={placeholderImage1}
          alt="Professional at desk practicing breathing"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>The Modern Workplace Stress Epidemic</h2>
          <p className={styles.p}>
            Workplace stress has reached unprecedented levels, with 83% of workers experiencing daily work-related stress. Deadlines, meetings, and constant connectivity create a perfect storm for anxiety and burnout.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Discrete Desk Breathing Techniques</h3>
          <p className={styles.p}>
            These techniques can be practiced without anyone knowing:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>Email Breathing</strong>: Take 3 deep breaths before opening each email</li>
            <li className={styles.li}><strong>Meeting Prep Breathing</strong>: 2-minute box breathing before joining calls</li>
            <li className={styles.li}><strong>Transition Breathing</strong>: Brief breathing reset between tasks</li>
          </ul>
        </section>

        <section>
          <h3 className={styles.h3}>The Productivity-Calm Connection</h3>
          <p className={styles.p}>
            Regular breathing breaks don't reduce productivity—they enhance it. Studies show that employees who practice mindfulness techniques report 28% less stress and 20% better focus.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Creating Breathing Habits at Work</h3>
          <p className={styles.p}>
            Set phone reminders for breathing breaks, use the Pomodoro Technique with breathing intervals, or practice breathing while waiting for computers to load. Small, consistent practices compound into significant stress relief.
          </p>
        </section>
      </>
    )
  }
];

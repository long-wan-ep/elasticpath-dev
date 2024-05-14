import React from 'react';
import Link from '@docusaurus/Link';
import { Openapiinitiative } from '@styled-icons/simple-icons';
import { User3, Guide } from '@styled-icons/remix-line';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'OpenAPI Docs',
    beta: false,
    link: '/docs/commerce-manager/authentication/',
    icon: Openapiinitiative,
    // lightImage: '/static/landing-page/hero/chat-graphic.png',
    // darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'View the documentation, download the specification file(s), learn more about the APIs.',
  },
  {
    title: 'Business User Docs',
    link: '/docs/commerce-manager/commerce-extension/commerce-extension-in-cm',
    icon: User3,
    // lightImage: '/static/landing-page/hero/video-graphic.png',
    // darkImage: '/static/landing-page/hero/video-graphic-dark.png',
    text: 'Get step-by-step instructions for managing the services in our business user tooling.',
  },
  {
    title: 'Guides & Learning',
    link: '/docs/commerce-manager/subscriptions/overview',
    icon: Guide,
    // lightImage: '/static/landing-page/hero/livestream-graphic.png',
    // darkImage: '/static/landing-page/hero/livestream-graphic-dark.png',
    text: 'Learn how to accomplish specific tasks in our how to guides.',
  },
];

function HeroCM({
  link,
  title,
  icon: Icon,
  text,
 // lightImage,
 // darkImage,
  beta,
}: (typeof PRODUCTS)[0]) {
  return (
    <Link
      to={link}
      style={{
        borderWidth: '1px',
      }}
      className={clsx(
        'group relative cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white',
        'border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800'
      )}
    >
      <div className="p-6 !pb-6">
        <h3 className="mb-1.5 flex items-center gap-3 group-hover:text-primary">
          <Icon className="h-7 w-7" />
          <div>
            {title}
            {beta && <span className="font-normal text-text-400"> (Beta)</span>}
          </div>
        </h3>
        <p className="mb-0 text-sm text-text-400">{text}</p>
      </div>
    </Link>
  );
}

export default function PXMHero() {
  return (
    <>
      <section className="no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between">
          <h2 className="mb-4 text-3xl font-bold py-16">
            Product Experience Manager
          </h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl text-center text-text-400">
            <div><h3>Empower Merchandisers</h3>
            Create experiences like dynamic bundles and loyalty catalogs that drive revenue without tickets for custom work.
            </div>
            <div><h3>Increase speed-to-market</h3>
              Delight customers and outpace competitors by rapidly launching new catalogs, variations, bundles, and complex pricing.</div>
            <div><h3>Eliminate custom dev work</h3>
              Merchandisers can launch revenue-generating experiences without having to ask for more time, budget, or resources.</div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 grid-rows-2 gap-6 px-4 md:grid-cols-3 py-16">
        {PRODUCTS.map((product) => (
          <HeroCM {...product} key={product.title} />
        ))}
      </section>
    </>
  );
}

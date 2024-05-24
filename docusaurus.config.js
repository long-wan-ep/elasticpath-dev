// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

const fs = require('fs');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');
const resourceDOCS = fs.readFileSync('./src/snippets/resourceDOCS.html', 'utf-8');

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: true,
  showLastUpdateTime: true,
  sidebarCollapsible: true,
  sidebarPath: require.resolve('./sidebars-default.js'),
};
/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Elastic Path Documentation',
  tagline: 'API, Commerce Manager, Guides and Documentation 🚀',
  url: 'https://beta.elasticpath.dev',
  baseUrl: '/',
  favicon: '/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars-default.js"),
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          editUrl: "https://github.com/elasticpath/elasticpath-dev/tree/main/"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/elasticpath/elasticpath-dev/tree/main/blog/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          ignorePatterns: ['/tags/**'],
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        docs: {
          sidebar: {
            hideable: true,
            autoCollapseCategories: true,
          },
        },
        announcementBar: { //comment out when not needed, please do not remove
          id: 'support_us',
          content:
              'The new OpenAPI specifications are here. Navigate to Docs, then API Documentation to learn more.',
          backgroundColor: '#0E1521',
          textColor: '#FFFFFF',
          isCloseable: true,
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },
        navbar: {
          logo: {
            href: '/',
            src: '/logo/light.svg',
            srcDark: '/logo/dark.svg',
            alt: 'Elastic Path Docs',
            height: '60px',
            width: '120px',
          },
          hideOnScroll: true,
          items: [
            {
              label: 'Guides',
              to: 'guides',
              className: 'guide-button guide-button-link',
            },
            {
              label: 'Docs',
              type: 'dropdown',
              className: 'nav-dropdown',
              items: [
                {
                  type: 'html',
                  value: resourceDOCS,
                  className: 'nav-dropdown',
                },
              ],
            },
            {
              label: 'Resources',
              type: 'dropdown',
              className: 'nav-dropdown resources-dropdown',
              items: [
                {
                  type: 'html',
                  value: resourcesHTML,
                  className: 'nav-dropdown',
                },
              ],
            },
            {
              label: 'Changelog',
              to: 'https://changelog.elasticpath.dev',
            },
            {
              label: 'Support',
              to: 'https://support.elasticpath.com',
            },
            {
              type: 'search',
              position: 'right',
            },
            {
              label: 'Get in Touch',
              href: 'https://www.elasticpath.com/get-in-touch',
              position: 'right',
              className: 'navbar-book-demo',
            },
            {
              label: 'Free Trial',
              href: 'https://useast.cm.elasticpath.com',
              position: 'right',
              className: 'dev-portal-signup dev-portal-link',
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Tutorial",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Stack Overflow",
                  href: "https://stackoverflow.com/questions/tagged/docusaurus",
                },
                {
                  label: "Discord",
                  href: "https://discordapp.com/invite/docusaurus",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/docusaurus",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  to: "/blog",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/facebook/docusaurus",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Elastic Path Software`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ["dart",
            "ruby",
            "groovy",
            "kotlin",
            "java",
            "swift",
            "objectivec",
            "javascript",
            "bash",
          ],
          magicComments: [
            {
              className: 'theme-code-block-highlighted-line',
              line: 'highlight-next-line',
              block: { start: 'highlight-start', end: 'highlight-end' },
            },
            {
              className: 'code-block-error-line',
              line: 'highlight-next-line-error',
            },
          ],
        },
        algolia: {
          appId: 'BE47YC23U9',
          apiKey: '77d1494d8923cc5ff24934e7ece7e46a',
          indexName: 'elasticpath',
          contextualSearch: false,
          searchParameters: {},
        },
      }),

  plugins: [
    async function tailwind(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
      //define OpenAPI Specs to transform and include in documentation
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          accounts: {
            specPath: "openapispecs/accounts/OpenAPISpec.yaml",
            outputDir: "docs/api/accounts",
            downloadUrl:
                "https://beta.elasticpath.com/openapispecs/accounts/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          addresses: {
            specPath: "openapispecs/addresses/OpenAPISpec.yaml",
            outputDir: "docs/api/addresses",
            downloadUrl:
                "https://beta.elasticpath.com/openapispecs/addresses/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          catalog: {
            specPath: "openapispecs/catalog/catalog_view.yaml",
            outputDir: "docs/api/pxm/catalog",
            downloadUrl:
                "https://beta.elasticpath.comopenapispecs/catalog_view.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          cartsorders: {
            specPath: "openapispecs/cartsorders/OpenAPISpec.yaml",
            outputDir: "docs/api/carts",
            downloadUrl:
                "https://beta.elasticpath.com/openapispecs/cartsorders/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          currencies: {
            specPath: "openapispecs/currencies/OpenAPISpec.yaml",
            outputDir: "docs/api/pxm/currencies",
            downloadUrl:
                "https://beta.elasticpath.com/openapispecs/currencies/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          commerceextensions: {
            specPath: "openapispecs/commerceextensions/OpenAPISpec.yaml",
            outputDir: "docs/api/commerceextensions/",
            downloadUrl:
                "https://beta.elasticpath.com/openapispecs/commerceextensions/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          exporter: {
            specPath: "openapispecs/exporter/exporter.yaml",
            outputDir: "docs/api/exporter",
            downloadUrl:
                "https://beta.elasticpath.com/openapispecs/exporter/exporter.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          files: {
            specPath: "openapispecs/files/files.yaml",
            outputDir: "docs/api/pxm/files",
            downloadUrl:
                "https://beta.elasticpath.com/openapispecs/files/files.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          flows: {
            specPath: "openapispecs/flows/flows.yaml",
            outputDir: "docs/api/flows",
            downloadUrl:
                "https://beta.elasticpath.com/openapispecs/flows/flows.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          integrations: {
            specPath: "openapispecs/integrations/openapi.yaml",
            outputDir: "docs/api/integrations",
            downloadUrl:
                "https://beta.elasticpath.com/openapispecs/integrations/openapi.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          inventory: {
            specPath: "openapispecs/inventory/openapi.yaml",
            outputDir: "docs/api/pxm/inventory",
            downloadUrl:
                "https://beta.elasticpath.com/openapispecs/inventory/openapi.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          payments: {
            specPath: "openapispecs/payments/OpenAPISpec.yaml",
            outputDir: "docs/api/payments",
            downloadUrl:
                "https://beta.elasticpath.com/openapispecs/payments/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          pim: {
            specPath: "openapispecs/pim/pim.yaml",
            outputDir: "docs/api/pxm/products",
            downloadUrl:
                "https://beta.elasticpath.com/openapispecs/pim/pim.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          pricebooks: {
            specPath: "openapispecs/pricebooks/pricebooks.yaml",
            outputDir: "docs/api/pxm/pricebooks",
            downloadUrl:
                "https://beta.elasticpath.com/openapispecs/pricebooks.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          promotions: {
            specPath: "openapispecs/promotions/OpenAPISpec.yaml",
            outputDir: "docs/api/promotions",
            downloadUrl:
                "https://beta.elasticpath.com/openapispecs/promotions.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          settings: {
            specPath: "openapispecs/settings/OpenAPISpec.yaml",
            outputDir: "docs/api/settings",
            downloadUrl:
                "https://beta.elasticpath.com/openapispecs/settings/OpenAPISpec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          subscriptions: {
            specPath: "openapispecs/subscriptions/public_openapi.yaml",
            outputDir: "docs/api/subscriptions",
            downloadUrl:
                "https://beta.elasticpath.com/openapispec/subscriptions/public_openapi.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: require.resolve('./sidebar-guides.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'changelog-pxm',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'changelog/pxm',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './changelog/pxm',
      },
    ],
  ],
  themes: ['docusaurus-theme-openapi-docs','@docusaurus/theme-mermaid','@docusaurus/theme-live-codeblock'],
};

module.exports = config;

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'iota.rs',
  tagline: 'Official IOTA Client Software',
  url: 'https://client-lib.docs.iota.org/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  favicon: '/img/logo/favicon.ico',
  organizationName: 'iotaledger', // Usually your GitHub org/user name.
  projectName: 'iota.rs', // Usually your repo name.
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
  ],
  themeConfig: {
    colorMode: {
          defaultMode: "dark",
          },
    navbar: {
      title: 'iota.rs',
      logo: {
        alt: 'IOTA',
        src: 'img/logo/Logo_Swirl_Dark.png',
      },
      items: [{
          type: 'doc',
          docId: 'welcome',
          position: 'left',
          label: 'Documentation',
        },
        //        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/iotaledger/iota.rs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [{
          title: 'Documentation',
          items: [{
              label: 'Welcome',
              to: '/docs/welcome',
            },
            {
              label: 'Overview',
              to: '/docs/overview/',
            },
            {
              label: 'Libraries',
              to: '/docs/libraries/overview',
            },
            {
              label: 'Specification',
              to: '/docs/specs',
            },
            {
              label: 'Contribute',
              to: '/docs/contribute',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.iota.org/',
            },
          ],
        },
        {
          title: 'Contribute',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/iotaledger/iota.rs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IOTA Foundation, Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['rust'],
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          remarkPlugins: [require('remark-code-import'), require('remark-import-partial')],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/iotaledger/iota.rs/tree/dev/documentation/',
        },
        theme: {
          customCss: require.resolve('./src/css/iota.css'),
        },
      },
    ],
  ],
  plugins: [
  ],
};

module.exports = {
  title: 'Art of Chording',
  description:
    'Teach yourself stenography for free. Use steno with Plover to type faster and more ergonomically than on a keyboard.',
  plugins: [
    ['@vuepress/google-analytics', { ga: 'UA-102613911-3' }],
    [
      'vuepress-plugin-container',
      {
        type: 'definition',
        before: (info) =>
          `<div class="custom-block definition"><p class="custom-block-title">Definition: ${info}</p>`,
        after: '</div>',
      },
    ],
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'morinted/art_of_chording',
    docsDir: 'docs',
    activeHeaderLinks: false,
    editLinks: true,
    editLinkText: 'Suggest a change',
    sidebar: [
      '/',
      {
        title: 'Introduction',
        collapsable: false,
        children: [
          '/introduction/',
          '/introduction/how-steno-works',
          '/introduction/why-this-book',
          '/introduction/theories-and-dictionaries',
        ],
      },
      {
        title: 'The Layout',
        children: [
          '/layout/',
          '/layout/chorded-keyboard',
          '/layout/top-row',
          '/layout/bottom-row',
          '/layout/d-and-z',
          '/layout/basic-number-bar',
        ],
      },
      {
        title: 'Hidden Sounds',
        children: [
          '/sounds/',
          '/sounds/aw_ow_-k',
          '/sounds/dbl',
          '/sounds/ch_th',
          '/sounds/i',
          '/sounds/m',
          '/sounds/f_q',
          '/sounds/ay_oy',
          '/sounds/n',
          '/sounds/oh',
          '/sounds/v',
          '/sounds/g_j',
          '/sounds/x',
          '/sounds/you_oo',
          '/sounds/y_z',
          '/sounds/ee',
          '/sounds/sh',
          '/sounds/eye',
          '/sounds/fingerspelling',
        ],
      },
      {
        title: 'Compound Sounds',
        children: [
          '/compounds/',
          '/compounds/unstressed',
          '/compounds/shun',
          '/compounds/f_as_s',
          '/compounds/mp',
          '/compounds/nch_rch',
          '/compounds/inversion',
          '/compounds/con_com',
          '/compounds/w_as_v',
          '/compounds/rve',
          '/compounds/ment',
          '/compounds/lge_nge_lk_nk',
          '/compounds/ent_int',
        ],
      },
      {
        title: 'Multistroke Words',
        children: ['/multistroke/', '/multistroke/prefixes-and-suffixes'],
      },
      '/draft-work/brainstorming',
    ],
  },
  extendMarkdown: (md) => {
    md.use(require('markdown-it-footnote'))
  },
  palette: { $accentColor: '#c9070d' },
}

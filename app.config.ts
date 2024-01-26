export default defineAppConfig({
  docus: {
    title: 'Godot 4 Проекты по разработке игр',
    description: 'Создайте пять кроссплатформенных 2D и 3D игр используя один из самых мощных игровых движков с открытым исходным кодом',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      // twitter: 'nuxt_js',
      github: 'zloisupport/godot-gdps-rus',
      // nuxt: {
      //   label: 'Nuxt',
      //   icon: 'simple-icons:nuxtdotjs',
      //   href: 'https://nuxt.com'
      // }
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'godot-gdps-rus',
      owner: 'zloisupport',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },footer:{
      fluid:false,
      credits: {
        icon: 'IconDocus',
        text: '',
        href: ''
      },
    }
  }
})

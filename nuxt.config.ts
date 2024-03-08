// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    //port:3002
  },
  app: {
    head: {
      meta: [
        { "name": "viewport", "content": "width=device-width,minimum-scale=1.0,maximum-scale=2.0" },
        { "charset": "utf-8" },
        {name:'description',content:'苹果的个人简历，案例展示'}
      ],
      link:[{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer:{},
    }
  },
  
  devtools: { enabled: false },
})

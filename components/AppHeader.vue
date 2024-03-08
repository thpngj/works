<template>
    <div class="sticky top-0 z-10 bg-opacity-95 bg-white   dark:bg-slate-900 flex justify-between items-center h-[60px] lg:h-[80px] border-b dark:border-gray-700 lg:pl-10 lg:pr-10 pl-2 pr-2">
        <div><nuxt-link to="/">
            <Logo class="scale-100 lg:scale-150" />
        </nuxt-link>
        </div>
        <div class="flex items-center">
            <div class="hidden lg:block">
              <ul class="header_menu_ul gap-x-2">
                <li v-for="(mItem,idx) in menus" :key="idx"><nuxt-link :to="mItem.to" :class="$route.path===mItem.to?'on':''">{{mItem.name}}</nuxt-link></li>
              </ul>
            </div>
            <button class="w-[24px] h-[24px] flex justify-center items-center lg:hidden" @click="mMenuVisible=true">
              <svg class="fill-slate-700 dark:fill-gray-300" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30167" width="20" height="20"><path d="M937.439 255.617l-169-169.027a59.585 59.585 0 0 0-84.358 0L515.054 255.617a59.698 59.698 0 0 0 0 84.415L684.081 509.03a59.67 59.67 0 0 0 84.359 0l168.999-169a59.613 59.613 0 0 0 0-84.414zM726.275 466.753l-169.028-169 169.028-168.97 168.97 168.97-168.97 169z m-358.501-348.18H128.726a59.67 59.67 0 0 0-59.698 59.67V417.15a59.67 59.67 0 0 0 59.698 59.727h238.907a59.698 59.698 0 0 0 59.698-59.727V178.414a59.557 59.557 0 0 0-59.557-59.84z m0 477.983H128.726a59.67 59.67 0 0 0-59.698 59.698V895.19a59.67 59.67 0 0 0 59.698 59.67h238.907a59.67 59.67 0 0 0 59.698-59.67V656.254a59.557 59.557 0 0 0-59.557-59.698z m478.067 0H606.708a59.67 59.67 0 0 0-59.67 59.698V895.19a59.67 59.67 0 0 0 59.67 59.67h238.935c33.087 0 59.698-26.753 59.698-59.67V656.254a59.529 59.529 0 0 0-59.5-59.698z m0 0" p-id="30168"></path></svg>
            </button>
            <div class="ml-2 pl-2 border-l border-l-solid dark:border-gray-700 relative">
              <button v-if="darkMode=='dark'" class=" w-[24px] h-[24px] flex justify-center items-center" @click="darkModeVisible=true">
                <svg class=" fill-blue-500 w-[20px] h-[20px]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12290" width="128" height="128"><path d="M593.054 120.217C483.656 148.739 402.91 248.212 402.91 366.546c0 140.582 113.962 254.544 254.544 254.544 118.334 0 217.808-80.746 246.328-190.144C909.17 457.12 912 484.23 912 512c0 220.914-179.086 400-400 400S112 732.914 112 512s179.086-400 400-400c27.77 0 54.88 2.83 81.054 8.217z"></path></svg>
              </button>
              <button v-if="darkMode=='light'" class="w-[24px] h-[24px] flex justify-center items-center" @click="darkModeVisible=true">
                <svg class=" fill-blue-500 w-[20px] h-[20px]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10199" width="128" height="128"><path d="M512 256a42.666667 42.666667 0 0 0 42.666667-42.666667V128a42.666667 42.666667 0 0 0-85.333334 0v85.333333a42.666667 42.666667 0 0 0 42.666667 42.666667zM896 469.333333h-85.333333a42.666667 42.666667 0 0 0 0 85.333334h85.333333a42.666667 42.666667 0 0 0 0-85.333334zM256 512a42.666667 42.666667 0 0 0-42.666667-42.666667H128a42.666667 42.666667 0 0 0 0 85.333334h85.333333a42.666667 42.666667 0 0 0 42.666667-42.666667zM265.386667 213.333333a42.666667 42.666667 0 0 0-59.306667 62.72l61.44 59.306667a42.666667 42.666667 0 0 0 31.146667 11.946667 42.666667 42.666667 0 0 0 30.72-13.226667 42.666667 42.666667 0 0 0 0-60.16zM725.333333 347.306667a42.666667 42.666667 0 0 0 29.44-11.946667l61.44-59.306667A42.666667 42.666667 0 0 0 758.613333 213.333333l-61.44 60.586667a42.666667 42.666667 0 0 0 0 60.16 42.666667 42.666667 0 0 0 28.16 13.226667zM512 768a42.666667 42.666667 0 0 0-42.666667 42.666667v85.333333a42.666667 42.666667 0 0 0 85.333334 0v-85.333333a42.666667 42.666667 0 0 0-42.666667-42.666667zM756.48 688.64a42.666667 42.666667 0 0 0-59.306667 61.44L758.613333 810.666667a42.666667 42.666667 0 0 0 29.44 11.946666 42.666667 42.666667 0 0 0 30.72-12.8 42.666667 42.666667 0 0 0 0-60.586666zM267.52 688.64l-61.44 59.306667a42.666667 42.666667 0 0 0 0 60.586666 42.666667 42.666667 0 0 0 30.72 12.8 42.666667 42.666667 0 0 0 28.586667-10.666666l61.44-59.306667a42.666667 42.666667 0 0 0-59.306667-61.44zM512 341.333333a170.666667 170.666667 0 1 0 170.666667 170.666667 170.666667 170.666667 0 0 0-170.666667-170.666667z" ></path></svg>
              </button>
              <div v-show="darkModeVisible" class="absolute top-[40px] right-0 z-10 border border-solid border-gray-200 bg-white rounded shadow dark:border-gray-700 dark:bg-slate-700">
                <ul class="dark_mode_menu">
                  <li @click="onChangeDark('light')">
                    <svg class=" fill-blue-500 w-[18px] h-[18px]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10199" width="128" height="128"><path d="M512 256a42.666667 42.666667 0 0 0 42.666667-42.666667V128a42.666667 42.666667 0 0 0-85.333334 0v85.333333a42.666667 42.666667 0 0 0 42.666667 42.666667zM896 469.333333h-85.333333a42.666667 42.666667 0 0 0 0 85.333334h85.333333a42.666667 42.666667 0 0 0 0-85.333334zM256 512a42.666667 42.666667 0 0 0-42.666667-42.666667H128a42.666667 42.666667 0 0 0 0 85.333334h85.333333a42.666667 42.666667 0 0 0 42.666667-42.666667zM265.386667 213.333333a42.666667 42.666667 0 0 0-59.306667 62.72l61.44 59.306667a42.666667 42.666667 0 0 0 31.146667 11.946667 42.666667 42.666667 0 0 0 30.72-13.226667 42.666667 42.666667 0 0 0 0-60.16zM725.333333 347.306667a42.666667 42.666667 0 0 0 29.44-11.946667l61.44-59.306667A42.666667 42.666667 0 0 0 758.613333 213.333333l-61.44 60.586667a42.666667 42.666667 0 0 0 0 60.16 42.666667 42.666667 0 0 0 28.16 13.226667zM512 768a42.666667 42.666667 0 0 0-42.666667 42.666667v85.333333a42.666667 42.666667 0 0 0 85.333334 0v-85.333333a42.666667 42.666667 0 0 0-42.666667-42.666667zM756.48 688.64a42.666667 42.666667 0 0 0-59.306667 61.44L758.613333 810.666667a42.666667 42.666667 0 0 0 29.44 11.946666 42.666667 42.666667 0 0 0 30.72-12.8 42.666667 42.666667 0 0 0 0-60.586666zM267.52 688.64l-61.44 59.306667a42.666667 42.666667 0 0 0 0 60.586666 42.666667 42.666667 0 0 0 30.72 12.8 42.666667 42.666667 0 0 0 28.586667-10.666666l61.44-59.306667a42.666667 42.666667 0 0 0-59.306667-61.44zM512 341.333333a170.666667 170.666667 0 1 0 170.666667 170.666667 170.666667 170.666667 0 0 0-170.666667-170.666667z" ></path></svg>
                    <span class="ml-1 whitespace-nowrap ">浅色模式</span>
                  </li>
                  <li @click="onChangeDark('dark')">
                    <svg class=" fill-blue-500 w-[18px] h-[18px]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12290" width="128" height="128"><path d="M593.054 120.217C483.656 148.739 402.91 248.212 402.91 366.546c0 140.582 113.962 254.544 254.544 254.544 118.334 0 217.808-80.746 246.328-190.144C909.17 457.12 912 484.23 912 512c0 220.914-179.086 400-400 400S112 732.914 112 512s179.086-400 400-400c27.77 0 54.88 2.83 81.054 8.217z"></path></svg>
                    <span class="ml-1 whitespace-nowrap ">深色模式</span>
                  </li>
                  <li @click="onChangeDark()">
                    <svg class=" fill-blue-500 w-[18px] h-[18px]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17733" width="128" height="128"><path d="M509.44 376.32c-35.84 2.56-66.56 30.72-66.56 66.56-2.56 40.96 30.72 74.24 71.68 74.24 38.4 0 71.68-30.72 71.68-71.68-2.56-38.4-35.84-71.68-76.8-69.12z m0 0" ></path><path d="M1008.64 204.8c0-64-53.76-120.32-117.76-120.32H130.56C66.56 84.48 12.8 135.68 12.8 202.24V691.2c0 66.56 53.76 117.76 117.76 117.76h757.76c66.56 0 117.76-53.76 117.76-117.76l2.56-486.4zM750.08 491.52l-53.76 10.24c-7.68 2.56-15.36 7.68-17.92 15.36-2.56 7.68-2.56 15.36 2.56 23.04l20.48 28.16c7.68 10.24 5.12 23.04-2.56 30.72l-35.84 35.84c-7.68 7.68-20.48 10.24-30.72 2.56l-28.16-23.04c-7.68-5.12-15.36-5.12-23.04-2.56-7.68 2.56-12.8 10.24-15.36 17.92l-5.12 35.84c-2.56 10.24-12.8 20.48-23.04 20.48h-51.2c-12.8 0-20.48-7.68-23.04-20.48l-5.12-35.84c-2.56-7.68-7.68-15.36-15.36-17.92-7.68-2.56-15.36-2.56-23.04 2.56l-28.16 20.48c-10.24 7.68-23.04 5.12-30.72-2.56l-35.84-35.84c-7.68-7.68-10.24-20.48-2.56-30.72l20.48-28.16c5.12-7.68 5.12-15.36 2.56-23.04-2.56-7.68-10.24-12.8-17.92-15.36l-35.84-5.12c-10.24-2.56-20.48-12.8-20.48-23.04v-48.64c0-12.8 7.68-20.48 20.48-23.04l35.84-5.12c7.68-2.56 15.36-7.68 17.92-15.36 2.56-7.68 2.56-15.36-2.56-23.04l-20.48-28.16c-7.68-10.24-5.12-23.04 2.56-30.72l35.84-35.84c7.68-7.68 20.48-10.24 30.72-2.56l28.16 20.48c7.68 5.12 15.36 5.12 23.04 2.56 7.68-2.56 12.8-10.24 15.36-17.92l5.12-33.28c2.56-10.24 12.8-20.48 23.04-20.48h51.2c12.8 0 20.48 7.68 23.04 20.48l5.12 35.84c2.56 7.68 7.68 15.36 15.36 17.92 7.68 2.56 15.36 2.56 23.04-2.56l28.16-20.48c10.24-7.68 23.04-5.12 30.72 2.56l35.84 35.84c7.68 7.68 10.24 20.48 2.56 30.72l-20.48 28.16c-5.12 7.68-5.12 15.36-2.56 23.04 2.56 7.68 10.24 12.8 17.92 15.36l35.84 5.12c10.24 2.56 20.48 12.8 20.48 23.04l-2.56 66.56z m-38.4 368.64H320c-43.52 0-79.36 0-79.36 79.36h547.84c2.56-79.36-33.28-79.36-76.8-79.36z m0 0" ></path></svg>
                    <span class="ml-1 whitespace-nowrap ">跟随系统</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-gray-600 dark:text-gray-300 ml-2 pl-2 border-l border-l-solid dark:border-gray-700 hidden lg:block">专注技术 · 用心至诚</div>
          </div>
        
        
        <!--  mobile menu-->
        <div class="bg-white/95 dark:bg-slate-800/95 shadow-xl rounded-lg fixed left-5 right-5 top-10 z-[21] lg:hidden" v-if="mMenuVisible">
          <ul class="m_menu_ul">
            <li v-for="(mItem,idx) in menus" :key="idx"><nuxt-link :to="mItem.to" :class="$route.path===mItem.to?'on':''">{{mItem.name}}</nuxt-link></li>
          </ul>
        </div>
        <div class="bg-white/40 backdrop-blur-sm  fixed left-0 top-0 z-20 w-screen h-screen lg:hidden"  v-if="mMenuVisible" @click="mMenuVisible=false"></div>
        
    </div>
</template>
<script setup>
 const menus = ref([{name:'作品案例',to:'/'},{name:'联系方式',to:'/contact'}]);
 
const emits = defineEmits(['changeDark'])

const mMenuVisible = ref(false);

const darkMode = ref('')
const darkModeVisible = ref(false)
const onChangeDark=(mode)=>{
  darkModeVisible.value = false;
  if(!mode){
    //darkMode.value='light';
    localStorage.removeItem('theme');
    initDark()
    return
  }
  darkMode.value=mode;
  localStorage.theme = mode;
  initDark()
}

const initDark = ()=>{
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkMode.value = 'dark'
    document.documentElement.classList.add('dark')
    emits('changeDark','dark')
  } else {
    darkMode.value = 'light'
    document.documentElement.classList.remove('dark')
    emits('changeDark','light')
  }
}

onMounted(()=>{
  initDark()
})
</script>
<style scoped>
.header_menu_ul{
  @apply flex 
}

.header_menu_ul li a{
  @apply block whitespace-nowrap text-lg hover:bg-green-400 hover:text-white  pt-1 pb-1 pl-3 pr-3 rounded dark:text-gray-200 dark:hover:bg-slate-700 dark:hover:text-gray-100
}
.header_menu_ul li a.on{
  @apply bg-green-500 text-white dark:text-gray-200 dark:bg-slate-700 whitespace-nowrap
}
.dark_mode_menu{
  @apply pt-1 pb-1
}
.dark_mode_menu li{
  @apply flex items-center hover:bg-gray-100 dark:hover:text-gray-800  dark:hover:bg-slate-800 dark:text-gray-300 p-2 text-sm cursor-pointer
}

.dark_mode_menu li span{ @apply text-gray-300 dark:hover:text-gray-800}

.m_menu_ul{
  @apply relative p-4
}
.m_menu_ul li a{
  @apply block pt-2 pb-2 text-lg pl-4 dark:text-gray-50
}
.m_menu_ul li a.on{
  @apply text-green-500 font-bold
}

</style>
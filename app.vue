<template>
  <AppHeader></AppHeader>
  <NuxtPage></NuxtPage>
  <AppFooter></AppFooter>
  <div class="w-[24px] h-[24px] rounded-full p-1 fixed right-2 bottom-3 z-10 bg-white bg-opacity-80 border-[1px] border-gray-200 cursor-pointer shadow-lg" v-show="gotoTopBtnVisible" @click="gotoTop()">
    <svg class="w-full h-full fill-cyan-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M4 5V3h16v2zm7 16V10.8l-2.6 2.6L7 12l5-5l5 5l-1.4 1.4l-2.6-2.6V21z"/></svg>
  </div>
</template>
<script setup>
 useHead({
  titleTemplate:(title)=>{
    return title? `苹果树下-${title}`:'苹果树下'
  }
 })

 const gotoTopBtnVisible = ref(false)
 onMounted(() => {
  window.addEventListener('scroll',()=>{
    let scrolltop = document.documentElement.scrollTop || document.body.scrollTop ;
    gotoTopBtnVisible.value = scrolltop>=150
  },true)
  
 })
 const gotoTop=()=>{
  //document.documentElement.scrollTop = 0;
  let top = document.documentElement.scrollTop || document.body.scrollTop;
    // 实现滚动效果 
    const timeTop = setInterval(() => {
      document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
      if (top <= 0) {
        clearInterval(timeTop);
      }
    }, 10);
 }
</script>
<style>
  html,body{
    transition: color 0.5s, background-color 0.5s;
  @apply text-gray-800 dark:text-gray-200 bg-white  dark:bg-slate-900 min-h-screen 
}
  .page-enter-active,.page-leave-active{transition: all .5s;}
  .page-enter-from,.page-leave-to{opacity: 0;filter:blur(1rem)}
</style>
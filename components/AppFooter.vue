<template>
    <footer class="border-t border-solid dark:border-gray-700">
        <div class="container mx-auto text-slate-800 dark:text-gray-200 pt-5 pb-5 pl-5 pr-5 lg:pl-0 lg:pr-0">
          <div class="flex flex-col justify-center lg:flex-row lg:justify-between">
            <div class="flex justify-center lg:justify-start">
              <div class="">
                <Logo class="scale-75"></Logo>
                <div class="text-gray-500 mt-2 lg:hidden">专注技术 · 用心至诚</div>
              </div>
            </div>
      
            <div class="mt-4 lg:mt-0 flex items-center flex-col-reverse lg:items-start lg:flex-row justify-center text-slate-700 dark:text-gray-400">
              <div class="mt-4 lg:mt-0">
                <p class="mb-2">📱 +86 135 2687 3881</p>
                <p>📮 65292975@qq.com</p>
              </div>
              <div class=" lg:ml-5">
                <img src="~/assets/body/wx_01.jpg" class="w-[80px] h-[80px] object-center object-cover">
              </div>
            </div>
          </div>
      
        </div>
      </footer>
</template>
<script setup>
</script>
<style scoped>
.footer_menu_ul{ @apply flex flex-col mt-1}
.footer_menu_ul li{@apply mb-4}
.footer_menu_ul li a{ @apply block text-slate-800 hover:text-slate-600 dark:text-gray-300 dark:hover:text-gray-200}
</style>

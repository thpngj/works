<template>
    <div>
        <div class=" relative border-b dark:border-gray-700 bg-cover bg-center bgi_sol">
        <div class="h-[200px] lg:h-[500px] flex justify-center items-center" >
            <div class="text-center text-slate-800 dark:text-gray-200">
                <div class="text-3xl lg:text-5xl font-bold"><span>高效</span><span class="ml-10 mr-10">协作</span><span>创新</span></div>
                <div class="text-xl mt-2 lg:text-2xl lg:mt-5">既然选择远方，当不负青春，砥砺前行</div>
            </div>
        </div>
        </div>
        <div class="text-slate-800 dark:text-gray-300 container mx-auto pt-10 pb-10 lg:pt-20 lg:pb-20">
            <div class="flex flex-col lg:flex-row justify-center items-center">
              <div><img class="w-[300px]" src="../assets/body/wx_02.jpg"></div>
              <div class="text-lg leading-loose p-4	lg:ml-6 lg:p-0">
                <p>电话：+86 135 2687 3881</p>
                <p>邮箱：65292975@qq.com</p>
              </div>
            </div>
          </div>
    </div>
</template>
<script setup>
    useHead({
        title:'联系方式'
    })
</script>
<style scoped>
    .bgi_sol{background-image: url('../assets/banner/solution_02.jpg')}
.dark .bgi_sol{background-image: url('../assets/banner/solution_01.jpg')}
</style>
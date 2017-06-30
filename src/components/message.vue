<template>
 <div>
   <ul>
     <li v-for="m in messages">
       <a href="#">
         <router-link :to="`/home/message/mdetail/${m.id}`">{{m.content}}</router-link>
       </a>
     </li>
   </ul>
   <keep-alive>
     <router-view :msg="this.messages"></router-view>
   </keep-alive>
 </div>
</template>

<script type="text/ecmascript-6">
  export default {
      data(){
          return{
              messages:[]
          }
      },
    created(){
          setTimeout(() =>{
              this.messages = [
                {id:1,content : "message001"},
                {id:2,content : "message002"},
                {id:3,content : "message003"},
                {id:4,content : "message004"},
              ]
          },1000)
    }
  }
</script>

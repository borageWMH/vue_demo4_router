<template>
    <div>
      <p>这是消息id为{{$route.params.id}}的详情为xxxxx</p>
    </div>
</template>

<script>
    export default{
        props:['msg'],
      data(){
            return{
                id : $route.params.id
            }
      },
      methods:{
            getContent(){
                let msg = this.msg
                let id = this.id
              for (var i = 0; i < msg.length; i++) {
                  if(id == msg[i].id){
                      console.log(msg[i].content);
                  }

              }
            }
      }
    }

</script>

<style>

</style>

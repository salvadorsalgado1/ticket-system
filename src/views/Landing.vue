<template>
  <div class="landing">
      <div class="container">
          <div class="row">
              <div class="col-md-6 col-sm-12">
                <Introduction/>
              </div>
              <div class="col-md-6 col-sm-12">
                <IntroVideo/>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Introduction from '../components/Introduction'
import IntroVideo from '../components/IntroVideo'
export default {
  name:'Landing',
components:{Introduction, IntroVideo}
}
</script>

<style>

</style>
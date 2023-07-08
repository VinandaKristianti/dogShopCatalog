<template>
    <div class="container mt-5">
      <b-button 
        pill
        variant="outline-primary"
        class="mr-3"
        style="width: 120px;"
        @click="back()"
      >
        <b-icon icon="arrow-left-circle" font-scale="0.8" style="margin-bottom: 3px;" ></b-icon>
          Back
      </b-button>
      
      <div class="row mt-5">
        <div class="col">
          <b-img :src="this.subDog" fluid class="radius"></b-img>
        </div>
        <div class="col">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h3 style="letter-spacing: 0.2em;">Hound Afgan</h3>
              <p style="font-size: medium;">The Afghan Hound is elegance personified. This unique, ancient dog breed has an appearance unlike any other: dramatic silky coat, exotic face, and thin, fashion-model build. Looks aside, Afghan enthusiasts describe this dog as both aloof and comical.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="row mt-4">
        <div class="col">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h3 style="letter-spacing: 0.2em;">Adaptibility</h3>
              <p style="font-size: medium;">The Afghan was also valued for their ability to think and hunt independently, without human direction. Today’s Afghan Hound isn’t hunting leopards, but this sighthound does retain the independent nature of a coursing hound.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h3 style="letter-spacing: 0.2em;">Uniqe Fact</h3>
              <p style="font-size: medium;">The Afghan was also valued for their ability to think and hunt independently, without human direction. Today’s Afghan Hound isn’t hunting leopards, but this sighthound does retain the independent nature of a coursing hound.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h3 style="letter-spacing: 0.2em;">Exercise Need</h3>
              <p style="font-size: medium;">The Afghan was also valued for their ability to think and hunt independently, without human direction. Today’s Afghan Hound isn’t hunting leopards, but this sighthound does retain the independent nature of a coursing hound.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
import axios from 'axios'
export default {
  data(){
    return{
      subDog : [],
      cardProps : { width: 270, height: 270},
      name: '',
        nameState: null,
        submittedNames: [],
        tab: 'Breed'
    }
  },
  mounted(){
    this.getAllBreed()
  },
  methods: {
      async getAllBreed(){
        await axios .get('https://dog.ceo/api/breed/hound/afghan/images/random')
                  .then((respon) => {
                      this.subDog = respon.data.message
                  })
      },
      dogdetail() {
        this.$router.push({name: 'Detail'});
      },
      back() {
        this.$router.push({name: 'Dashboard'});
      }
    }
  }
</script>
  
<style scoped>
  .radius{
    border-radius: 10px;
    border-color: aqua;
    width: 400px;
    height: 300px;
    /* margin-left: 30px; */
  }
  .divider {
        border-top: 1px solid rgb(105, 105, 109);
        margin-top: 30px;
    }
</style>
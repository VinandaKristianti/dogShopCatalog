<template>
    <div>
        <h4 class="mt-4" style="letter-spacing: 0.2em;">TOP 3 Breeds</h4>
        <h5>Poodle</h5>
        <v-row>
          <v-col
            v-for="smDog in this.smallDog"
            :key="smDog"
          >
            <b-img :src="smDog" rounded="circle" v-bind="cardProps" class="ml-5" @click="dogdetail()" title="Click to see detail"></b-img>
          </v-col>
        </v-row>
        <!-- <p>Average Size</p>
        <v-row>
          <v-col
            v-for="avgDog in this.avgDog"
            :key="avgDog"
          >
            <b-img :src="avgDog" rounded="circle" v-bind="cardProps" class="ml-5"></b-img>
          </v-col>
        </v-row>
        
        <p>Big Size</p>
        <v-row>
          <v-col
            v-for="bigDog in this.bigDog"
            :key="bigDog"
          >
            <b-img :src="bigDog" rounded="circle" v-bind="cardProps" class="ml-5"></b-img>
          </v-col>
        </v-row> -->
        <div class="divider"></div>
        <div>
          <h4 class="mt-4" style="letter-spacing: 0.2em;">Curious ZONE</h4>
          <p class="mt-4">What do you want to see ?</p>
          <div class="row">
            <div class="col">
              <b-form-input id="input-none" aria-required="true" style="width: 350px; margin-top: -10px;" placeholder="Text here" v-model="keyword"></b-form-input>
            </div>
            <div class="col">
              <b-button style="width: fit-content; margin-top: -10px; margin-left: -30%;" variant="primary" @click="search()">
                <b-icon icon="search" font-scale="0.9" class="mb-1"></b-icon>
                  Search
              </b-button>
            </div>
          </div>
          <div class="mt-4">
            <b-carousel id="carousel" :interval="0" :no-animation="true" :controls="true" indicators v-if="keyword === 'terrier'">
              <b-carousel-slide v-for="resImg in this.result" :key="resImg" :img-src="resImg"></b-carousel-slide>
            </b-carousel>
            <b-carousel id="carousel" :interval="1500" controls indicators v-if="keyword === 'shiba'">
              <b-carousel-slide v-for="resImg in this.result" :key="resImg" :img-src="resImg"></b-carousel-slide>
            </b-carousel>
            <b-img v-for="res in this.list" :key="res" :src="res" rounded="0" v-bind="cardProps" class="ml-5" :class="{ hide: isActive }"></b-img>
          </div>
          <div :class="{ hide: isShow }">
            <b-alert show variant="danger">
              <h4 class="alert-heading">Did you have write it correctly ?</h4>
              <p style="text-align: justify;">
                Sorry, we can't find the data you want. It cause by (a)The keyword you entered wrong/uncorrect; (b)The system doesn't has the information that you need.
                To make sure the keyword exist on our system, <strong>go to "A-Z" </strong>tab.
              </p>
              <hr>
              <p class="mb-0">
                It's okay to made a mistake sometimes! 
              </p>
            </b-alert>
          </div>
        </div>
        <br>
        <br>
        <br>
    </div>
</template>
  
<script>
import axios from 'axios'
export default {
  data(){
    return{
      smallDog : [],
      avgDog : [],
      bigDog : [],
      dogType : ['terrier','retriever','poodle'],
      cardProps : { width: 270, height: 270},
      keyword : '',
      result : [],
      list: [],
      isActive: true,
      isShow: true
    }
  },
  mounted(){
    this.getAllBreed()
  },
  methods: {
      async getAllBreed(){
        try{
          for(let i = 0; i< this.dogType.length; i++){
          await axios .get('https://dog.ceo/api/breed/'+ this.dogType[i] +'/images/random/3', {timeout: 5000})
                  .then((respon) => {
                    if(this.dogType[i] === "poodle"){
                      this.smallDog = respon.data.message
                    }if(this.dogType[i] === "retriever"){
                      this.avgDog = respon.data.message
                    }else{
                      this.bigDog = respon.data.message
                    }
                  })
                }
        }catch(err){
          if (err.code === 'ECONNABORTED') {
            console.log('Waktu permintaan habis:', err.message);
          } else {
            console.log('Terjadi kesalahan lain:', err.message);
          }
        }
      },
      async search(){
        try{
          await axios .get('https://dog.ceo/api/breed/'+ this.keyword +'/images/random/3', {timeout: 1000})
                  .then((respon) => {
                    
                    console.log("cek result", respon);
                    if(respon.data.status === "success"){
                      if(this.keyword === 'shiba' || this.keyword === 'terrier'){
                        this.isActive = true
                        this.isShow = true
                        this.result = respon.data.message
                      }else{
                        this.isActive = false
                        this.isShow = true
                        this.list = respon.data.message
                        // console.log("ini jalan");
                      }
                    }else{
                      this.isShow = false
                    }
                  })
            }catch(err){
              // console.error("Error fetching data:", err);
              if (err.response && err.response.status === 404) {
                this.isShow = false
                console.log('Waktu permintaan habis:', err.message);
              } else {
                console.log('Terjadi kesalahan lain:', err.message);
              }
            }
      },
      dogdetail() {
        this.$router.push({name: 'Detail'});
      }
    }
  }
</script>
  
<style scoped>
  .radius{
    border-radius: 120px;
    border-color: aqua;
    width: 300px;
    height: 300px;
    margin-left: 30px;
  }
  .divider {
        border-top: 1px solid rgb(105, 105, 109);
        margin-top: 30px;
    }
  
  .hide{
    display: none;
  }
</style>
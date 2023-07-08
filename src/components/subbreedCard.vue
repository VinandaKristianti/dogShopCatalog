<template>
    <div>
      <h4 class="mt-4" style="letter-spacing: 0.2em;">TOP 3 Sub-Breeds</h4>
      <h5>Hound: Afgan</h5>
      <v-row>
        <v-col
          v-for="subDog in this.subDog"
          :key="subDog"
        >
          <b-img :src="subDog" rounded="circle" v-bind="cardProps" class="ml-5" @click="dogdetail()" title="Click to see detail"></b-img>
        </v-col>    
      </v-row>
      <div class="divider"></div>
      <div>
        <h4 class="mt-4" style="letter-spacing: 0.2em;">All Sub-Breed</h4>
        <b-button pill variant="outline-primary" style="width: fit-content; margin-top: 20px;" v-b-modal.dialogAdd>
          <b-icon icon="plus-circle" font-scale="0.9" class="mb-1"></b-icon>
            Add Subbreed
        </b-button>
        <div class="mt-4">
          <div class="overflow-auto">
            <b-table striped hover :items="subBreed" :per-page="perPage" :current-page="currentPage"></b-table>
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>
          </div>
        </div>
      </div>
      <b-modal id="dialogAdd" title="Add New Sub-breed">
        <b-container fluid >
          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-none">Name</label>
            </b-col>
            <b-col sm="8">
              <b-form-input id="input-none" aria-required="true"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-valid">Birth</label>
            </b-col>
            <b-col sm="8">
              <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-valid">Mother's Breed</label>
            </b-col>
            <b-col sm="8">
              <b-form-select v-model="selected" :options="getOptionList" placeholder="Select breed"></b-form-select>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-invalid">Father's Breed</label>
            </b-col>
            <b-col sm="8">
              <b-form-select v-model="selected" :options="getOptionList"></b-form-select>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-invalid">Origin</label>
            </b-col>
            <b-col sm="8">
              <b-form-input id="input-invalid" placeholder="Invalid input"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-invalid">Size Body</label>
            </b-col>
            <b-col sm="8">
              <b-form-select v-model="selected" :options="size"></b-form-select>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-invalid">Height (cm)</label>
            </b-col>
            <b-col sm="8">
              <b-form-input id="input-invalid" placeholder="1 - 100" style="width: 200px;"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-invalid">Weight (kg)</label>
            </b-col>
            <b-col sm="8">
              <b-form-input id="input-invalid" placeholder="1 - 100" style="width: 200px;"></b-form-input>
            </b-col>
          </b-row>
        </b-container>
      </b-modal>
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
      selected: null,
      size: [
          { value: null, text: 'Select an option' },
          { value: 'a', text: 'Small' },
          { value: 'b', text: 'Average' },
          { value: 'c', text: 'Big' }
      ],
      options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      subBreed: [],
      perPage: 5,
      currentPage: 1,
    }
  },
  computed: {
    rows() {
      return this.subBreed.length
    },
    getOptionList() {
      return this.subBreed.map((dog, index) => ({
        value: index,
        text: dog,
      }))
    }
  },
  mounted(){
    this.getAllBreed(),
    this.getSubBreed()
  },
  methods: {
      async getAllBreed(){
        await axios .get('https://dog.ceo/api/breed/hound/afghan/images/random/3')
                  .then((respon) => {
                      this.subDog = respon.data.message
                  })
      },

      async getSubBreed(){
        try{
          await axios .get('https://dog.ceo/api/breeds/list/all', {timeout: 10000})
                    .then((respon)=>{
                      this.subBreed = respon.data.message
                      this.subBreed = Object  .keys(respon.data.message)
                                              .filter(key => respon.data.message[key].length > 0)
                                              .map(key => respon.data.message[key]);
                      console.log("cek isi arr", this.subBreed);
                    })
        }catch(err){
          if (err.response && err.response.status === 404) {
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
</style>
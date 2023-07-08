<template>
    <div>
      <div v-for="(category, letter) in categorizedData" :key="letter">
        <strong>
          {{ letter }}
        </strong>
        <ul v-for="breed in category" :key="breed">
          <li>{{ breed }}</li>
        </ul>
      </div>
    </div>
</template>
  
<script>
import axios from 'axios'

export default {
  data(){
    return{
      categorizedData: {}
    }
  },
  mounted(){
    this.getAllDog()
  },
  methods: {
      async getAllDog(){
        await axios.get('https://dog.ceo/api/breeds/list/all')
                  .then((respon) => {
                    // console.log("filter done", respon);

                    this.categorizedData = {};
                    for (let dogs in respon.data.message) {
                      const letter = dogs.charAt(0).toUpperCase();
                      // console.log("cek letter", letter);
                      if (Object.prototype.hasOwnProperty.call(this.categorizedData, letter)) {
                        this.categorizedData[letter].push(dogs);
                      } else {
                        this.categorizedData[letter] = [dogs];
                      }
                    }
                  })
                  .catch(error => {
                    console.error(error);
                  });
      }
      
    }
  }
  </script>
  
  <style scoped>
  .alpabet {
    font-size: xx-large;
  }
  </style>
  
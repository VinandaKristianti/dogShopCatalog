<template>
    <div class="container" >
        <navbarPage/>
        <div class="divider"></div>
        <div class="row mt-5">
            <div class="col">
                <div class="d-flex h-100">
                    <div class="justify-content-center align-self-center">
                        <h2><strong>Temukan Teman Terbaikmu!</strong></h2>
                        <b-button pill variant="outline-primary" style="width: 120px;" @click="cariDisini()">Cari Disini!</b-button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <div class="mini-oval mt-4"></div>
                    <div class="mini-oval"></div>
                    <div class="mini-oval mt-4"></div>
                </div>
                <b-img :src="this.dogImage" fluid class="radius"></b-img>
            </div>
        </div>
    </div>
</template>

<script>
import navbarPage from "@/components/navbarPage.vue";
import axios from 'axios';

export default {
    components: {
        navbarPage
    },
    data(){
        return{
            dogImage: ''
        }
    },
    mounted(){
        this.getSelectedImg()
    },
    methods:{
        async getSelectedImg(){
            await axios.get('https://dog.ceo/api/breeds/image/random')
            .then((response) => {
                this.dogImage = response.data.message
                console.log("cek dogImage", this.dogImage);
            })
        },
        cariDisini(){
            this.$router.push({name:"Dashboard"})
        }
    }
  }
</script>

<style>
    .divider {
        border-top: 1px solid rgb(105, 105, 109);
    }
    .radius{
        border-radius: 120px;
        border-color: aqua;
        width: 300px;
        height: 300px;
        margin-left: 30px;
    }
    .mini-oval{
        border-radius: 50px;
        width: 100px;
        height: 100px;
        background-color:bisque;
        margin-right: 50px;
    }
</style>
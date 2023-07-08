<template>
    <div class="container mt-5">
        <b-button 
            pill
            variant="outline-primary"
            class="mr-3"
            style="width: 120px;"
            @click="setTab('Breed')"
        >
            Breed
        </b-button>
        <b-button
            pill
            variant="outline-primary"
            class="mr-3"
            style="width: 120px;"
            @click="setTab('Sub-breed')"
        >
            Sub-breed
        </b-button>
        <b-button 
            pill
            variant="outline-primary"
            style="width: 120px;"
            @click="setTab('A-Z')"
        >
            A-Z
            <b-icon icon="arrow-down" font-scale="0.8" style="margin-bottom: 3px;"></b-icon>
        </b-button>
        <div class="card-landing">
            <h1 class="landing-text">Jelajahi ras yang mengagumkan</h1>
        </div>

        <div class="container" v-if="tab === 'Breed'">
            <breed/>
        </div>
        <div class="container" v-if="tab === 'Sub-breed'">
            <subbreed/>
        </div>
        <div class="container" v-if="tab === 'A-Z'">
            <dogCard/>
        </div>
    </div>
</template>

<script>
import dogCard from '@/components/dogCards.vue'
import breed from '@/components/breedCard.vue'
import subbreed from '@/components/subbreedCard.vue'

export default{
    components: {
        dogCard,
        breed,
        subbreed
    },
    data(){
        return{
            dogImage: '',
            tab: 'Breed'
        }
    },
    methods:{
        setTab(tabName) {
            this.tab = tabName;
        }
    }
}
</script>

<style>
    .card-landing{
        background-color: bisque;
        height: 100px;
    }
    .landing-text{
        text-align: center; 
        letter-spacing: 0.2em;
        margin-top: 30px;
        color: #372922;
    }
</style>
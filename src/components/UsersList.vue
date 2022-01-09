<template>
  <div class='container'>
    <h2>Users List</h2>
    <div class='listContainer'>
      <UserCard v-for='item in this.$store.state.users' :key='item.email' v-bind:user='item' ></UserCard>
    </div>
  </div>
</template>

<script>
import UserCard from './UserCard'
import axios from 'axios'
import store from '../store'
export default {
  name: 'UsersList',
  components: {
    UserCard
  },
  created () {
    const axiosGetCall = async () => {
      try {
        const { data } = await axios.get('https://api.json-generator.com/templates/GBJBxSvGBXtU/data?access_token=nu20tu03mqrexk3dd4vcwxxbiw5x772c5f2f34w0')
        store.dispatch('createUserList', data)
      } catch (error) {
        alert('Unfortunately, there was an error obtaining the users list. Please try again later')
        console.error('error: ', error)
      }
    }
    axiosGetCall()
  }
}
</script>

<style scoped>
.listContainer {
  border: solid;
  border-width: 1px
}
</style>

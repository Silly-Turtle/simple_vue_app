<template>
  <div class='container'>
    <div class='userInfoContainer' v-if='!isEditing' v-on:click='toggleInspecting'>
      <p class='userInfo'>{{user.username}}</p>
      <span v-if='isInspecting'>
        <h6>{{`name: ${user.profile.name}`}}</h6>
        <h6>{{`email: ${user.email}`}}</h6>
      </span>
    </div>
    <div class='editInfoContainer' v-if='isEditing'>
        <h6 >{{'username: '}}<input v-model='newUsername'/></h6>
        <h6 >{{'name: '}}<input v-model='newName'/></h6>
        <h6>{{'email: '}}<input v-model='newEmail'/></h6>
    </div>
    <button v-if='isEditing' v-on:click="confirmEdit">confirm edit</button>
    <button v-on:click='toggleEditEmail'>{{this.isEditing ? 'cancel' : 'edit'}}</button>
    <button v-on:click='deleteUser'>delete</button>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: Object
  },
  data () {
    return {
      isEditing: false,
      isInspecting: false,
      newEmail: this.user.email,
      newName: this.user.profile.name,
      newUsername: this.user.username
    }
  },
  methods: {
    deleteUser () {
      this.$store.dispatch('deleteUser', this.user.id)
    },
    toggleInspecting () {
      this.isInspecting = !this.isInspecting
    },
    toggleEditEmail () {
      if (this.isEditing) {
        this.newEmail = this.user.email
        this.newName = this.user.profile.name
        this.newUsername = this.user.username
      }
      this.isEditing = !this.isEditing
    },
    confirmEdit () {
      this.$store.dispatch('updateUser', { email: this.newEmail, name: this.newName, username: this.newUsername, userId: this.user.id })
      this.toggleEditEmail()
    }
  }
}
</script>

<style scoped>
.container {
  border: solid;
  border-width: 0;
  border-bottom-width: 1px;
}
.userInfoContainer:hover {
  background-color: lightgray;
}
</style>

<template>
  <div class="stats">
      <div class="card">
          <div class="card-body">
              <h2>Welcome!</h2>
              <table class="table table-bordered table-striped table-hover">
                <tbody>
                  <tr>
                    <th>Total Tickets</th>
                    <td>{{countUsers}}</td>
                  </tr>
                  <tr>
                    <th>Total Users</th>
                    <td>{{countTasks}}</td>
                  </tr>
                </tbody>
              </table>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch('getUsers');
    this.$store.dispatch('getTasks');
  },
computed:{
  countUsers(){
    let count = this.$store.state.users.length;
    return count;
  },
  countTasks(){
    let count = this.$store.state.tasks.length;
    return count;
  }
}
}
</script>

<style>

</style>
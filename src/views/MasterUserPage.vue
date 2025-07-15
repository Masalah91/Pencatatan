<template>
  <div>
    <h2>Master User</h2>

    <button @click="showDialog = true" class="create-btn">+ Create User</button>

    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.username }}</td>
          <td>{{ user.role }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Dialog -->
    <div v-if="showDialog" class="dialog-overlay">
      <div class="dialog">
        <h3>Create New User</h3>
        <input v-model="newUser.username" placeholder="Username" />
        <input v-model="newUser.role" placeholder="Role" />

        <div class="dialog-actions">
          <button @click="addUser">Save</button>
          <button @click="closeDialog">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MasterUserPage',
  data() {
    return {
      users: [
        { username: 'admin', role: 'Administrator' },
        { username: 'johndoe', role: 'User' },
        { username: 'janedoe', role: 'User' }
      ],
      showDialog: false,
      newUser: {
        username: '',
        role: ''
      }
    }
  },
  methods: {
    addUser() {
      if (!this.newUser.username || !this.newUser.role) {
        alert("Username dan Role wajib diisi.")
        return
      }

      this.users.push({ ...this.newUser })
      this.closeDialog()
    },
    closeDialog() {
      this.showDialog = false
      this.newUser.username = ''
      this.newUser.role = ''
    }
  }
}
</script>

<style scoped>
.create-btn {
  margin-bottom: 10px;
  padding: 8px 12px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}
th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}
th {
  background-color: #f4f4f4;
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}
.dialog {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}
.dialog input {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box;
}
.dialog-actions {
  display: flex;
  justify-content: space-between;
}
.dialog-actions button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.dialog-actions button:first-child {
  background-color: #2563eb;
  color: white;
}
.dialog-actions button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.dialog-actions button:first-child {
  background-color: #2563eb;
  color: white;
}
.dialog-actions button:last-child {
  background-color: #ccc;
}
</style>

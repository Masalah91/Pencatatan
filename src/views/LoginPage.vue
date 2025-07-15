<template>
  <div class="login-container">
    <LoadingOverlay :visible="isLoading" />
    <h2>Login</h2>

    <div v-if="error" class="error">{{ error }}</div>

    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>

    <p v-if="loggedIn" class="success">
      Login berhasil! Selamat datang, {{ username }}.
    </p>
  </div>
</template>

<script>
import LoadingOverlay from '@/components/LoadingOverlay.vue'

export default {
  name: 'LoginPage',
  components: { LoadingOverlay },
  data() {
    return {
      username: '',
      password: '',
      error: '',
      loggedIn: false,
      isLoading: false
    };
  },
  methods: {
    login() {
      this.error = '';
      this.loggedIn = false;

      if (!this.username || !this.password) {
        this.error = 'Harap isi username dan password.';
        return;
      }
      
      this.isLoading = true;
        // Redirect
      setTimeout(() => {
        const accounts = [
          { username: 'admin', password: '123', role: 'Administrator' },
          { username: 'user', password: '123', role: 'User' },
          { username: 'viewer', password: '123', role: 'Viewer' }
        ];

        const found = accounts.find(acc =>
          acc.username === this.username && acc.password === this.password
        );

        if (found) {
            this.loggedIn = true;

              // Simpan ke localStorage
            localStorage.setItem('user', JSON.stringify(found));
            this.$router.push('/dashboard');
        } else {
          this.error = 'Username atau password salah.';
        }

        this.isLoading = false
      }, 1000);
      
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 350px;
  margin: 100px auto;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
}
input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.error {
  color: red;
  margin-bottom: 10px;
}
.success {
  color: green;
  margin-top: 15px;
}
</style>

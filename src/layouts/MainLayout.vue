<template>
  <div class="main-layout">
    <aside class="sidebar">
      <div class="logo">WMS</div>

      <ul class="menu-list">
        <li v-if="canAccess('dashboard')">
          <router-link to="/dashboard" class="menu-item" active-class="active-link">
            <span class="icon">🏠</span>
            Overview
          </router-link>
        </li>

        <li v-if="canAccess('master')">
          <div class="menu-item" @click="toggleMaster">
            <span class="icon">🗂️</span>
            Master
            <span class="chevron">{{ showMaster ? '▲' : '▼' }}</span>
          </div>
          <ul v-if="showMaster" class="submenu">
            <li>
              <router-link to="/dashboard/users" class="submenu-item" active-class="active-link">
                Master User
              </router-link>
            </li>
          </ul>
        </li>

        <li v-if="canAccess('report')">
          <div class="menu-item" @click="toggleReport">
            <span class="icon">📊</span>
            Report
            <span class="chevron">{{ showReport ? '▲' : '▼' }}</span>
          </div>
          <ul v-if="showReport" class="submenu">
            <li>
              <router-link to="/dashboard/reports/orders" class="submenu-item" active-class="active-link">
                Orders
              </router-link>
            </li>
          </ul>
        </li>

        <li>
          <a href="#" @click="logout" class="menu-item logout">
            <span class="icon">🚪</span>
            Logout
          </a>
        </li>
      </ul>
    </aside>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {
      showMaster: false,
      showReport: false,
      user: null,
      roleAccess: {
        Administrator: ['dashboard', 'master', 'report'],
        User: ['dashboard', 'report'],
        Viewer: ['dashboard']
      }
    }
  },
  created() {
    const userData = localStorage.getItem('user')
    if (userData) {
      this.user = JSON.parse(userData)
    } else {
      this.$router.push('/') // Jika tidak ada user, redirect ke login
    }
  },
  methods: {
    toggleMaster() {
      this.showMaster = !this.showMaster
    },
    toggleReport() {
      this.showReport = !this.showReport
    },
    logout() {
      localStorage.removeItem('user')
      this.$router.push('/')
    },
    canAccess(menuKey) {
      if (!this.user) return false
      const allowedMenus = this.roleAccess[this.user.role] || []
      return allowedMenus.includes(menuKey)
    }
  }
}
</script>

<style scoped>
.main-layout {
  display: flex;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}

.sidebar {
  width: 240px;
  background-color: #111827;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #ef4444;
  margin-bottom: 30px;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 10px;
  color: #d1d5db;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
  text-decoration: none;
}

.menu-item:hover {
  background-color: #1f2937;
}

.active-link {
  background-color: #374151 !important;
  color: white !important;
}

.icon {
  margin-right: 10px;
}

.chevron {
  margin-left: auto;
}

.submenu {
  padding-left: 20px;
  margin-top: 5px;
}

.submenu-item {
  display: block;
  color: #9ca3af;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
}

.submenu-item:hover {
  background-color: #1f2937;
  color: white;
}

.logout {
  margin-top: auto;
  color: #ef4444;
}

.content {
  flex: 1;
  padding: 20px;
  padding-left: 40px;
}
</style>

<template>
  <div>
    <h2>Laporan Orders</h2>

    <!-- Filter -->
    <div class="filters">
      <input v-model="searchKey" placeholder="Cari OrderKey" />
      <input type="date" v-model="startDate" />
      <!-- <input type="date" v-model="endDate" /> -->
      <button @click="filterOrders">Cari</button>
    </div>

    <!-- Tabel hasil -->
    <table>
      <thead>
        <tr>
          <th>OrderKey</th>
          <th>Tanggal</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in filteredOrders" :key="order.orderKey">
          <td>{{ order.orderKey }}</td>
          <td>{{ order.date }}</td>
          <td>{{ order.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ReportOrdersPage',
  data() {
    return {
      searchKey: '',
      startDate: '',
      endDate: '',
      orders: [
        { orderKey: 'ORD001', date: '2025-07-01', status: 'Shipped' },
        { orderKey: 'ORD002', date: '2025-07-03', status: 'Pending' },
        { orderKey: 'ORD003', date: '2025-07-05', status: 'Delivered' },
        { orderKey: 'ORD004', date: '2025-07-08', status: 'Canceled' }
      ],
      filteredOrders: []
    }
  },
  methods: {
  filterOrders() {
    const key = this.searchKey.trim().toLowerCase()
    const start = this.startDate

    this.filteredOrders = this.orders.filter(o => {
      const orderKeyMatch = o.orderKey.toLowerCase().includes(key)

      // Jika ada keyword, abaikan filter tanggal
      if (key) {
        return orderKeyMatch
      }

      // Jika tidak ada keyword, filter berdasarkan tanggal
      const dateMatch = !start || o.date === start
      return dateMatch
    })
  }
},
  mounted() {
    // Tampilkan semua saat pertama kali
    this.filteredOrders = this.orders
  }
}
</script>

<style scoped>
.filters {
  margin: 20px 0;
}
.filters input {
  margin-right: 10px;
  padding: 5px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  border: 1px solid #ddd;
}
th {
  background-color: #f5f5f5;
}
</style>

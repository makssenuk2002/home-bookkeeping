<template>
  <div>
    <div   class="row">
     <History/>
    </div>
  </div>
</template>

<script>
import HomeBill from '@/components/HomeBill'
import HomeCurrency from '@/components/HomeCurrency'
import History from "./History";

export default {
  name: 'home',
  metaInfo() {
    return {
      title: this.$title('Menu_Bill')
    }
  },
  data: () => ({
    loading: true,
    currency: null
  }),
  async mounted() {
    this.currency = await this.$store.dispatch('fetchCurrency')
    this.loading = false
  },
  methods: {
    async refresh() {
      this.loading = true
      this.currency = await this.$store.dispatch('fetchCurrency')
      this.loading = false
    }
  },
  components: {
    History,
    HomeBill,
    HomeCurrency
  }
}
</script>

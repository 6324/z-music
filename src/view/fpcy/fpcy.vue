<template>
  <Form :model="formItem" :label-width="80">
    <FormItem label="发票代码">
      <Input v-model="formItem.invoiceCode" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem label="发票号码">
      <Input v-model="formItem.invoiceNumber" placeholder="Enter something..."></Input>
    </FormItem>

    <FormItem label="开票日期">
      <!--<DatePicker type="date" placeholder="Select date" v-model="formItem.billTime"></DatePicker>-->
    </FormItem>
    <FormItem label="发票金额">
      <Input v-model="formItem.invoiceAmount" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit()">提交</Button>
    </FormItem>
  </Form>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "fpcy",
    data() {
      return {
        formItem: {
          invoiceCode: '2102162130',
          invoiceNumber: '00932939',
          billTime: '2018-01-12',
          invoiceAmount: '2830188.68',
          checkCode:'337622'
        }

      }
    },
    methods: {
      ...mapActions(['getFpInfo']),
      handleSubmit() {
        this.getFpInfo(this.formItem)
      }
    }
  }
</script>

<style scoped>

</style>

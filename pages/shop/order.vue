<template>
  <section>
    <b-tabs>
      <b-tab-item label="未提供注文一覧">
        <b-field grouped group-multiline>
          <button class="button field is-primary"
                  @click="checkedRows = []"
                  :disabled="!checkedRows.length">
            <b-icon icon="circle"></b-icon>
            <span>提供</span>
          </button>
        </b-field>
        <b-table
          :data="data"
          :columns="columns"
          :striped="true"
          :checked-rows.sync="checkedRows"
          :is-row-checkable="(row) => row.status !== '提供済み'"
          checkable
          :checkbox-position="checkboxPosition">
          <template slot="bottom-left">
            <b>Total checked</b>: {{ checkedRows.length }}
          </template>
        </b-table>
      </b-tab-item>
      <b-tab-item label="提供済み注文一覧">
        <b-field grouped group-multiline>
          <button class="button field is-primary"
                  @click="providedCheckedRows = []"
                  :disabled="!providedCheckedRows.length">
            <b-icon icon="circle"></b-icon>
            <span>未提供に戻す</span>
          </button>
        </b-field>
        <b-table
          :data="data"
          :columns="columns"
          :striped="true"
          :checked-rows.sync="providedCheckedRows"
          :is-row-checkable="(row) => row.status !== '提供済み'"
          checkable
          :checkbox-position="checkboxPosition">
          <template slot="bottom-left">
            <b>Total checked</b>: {{ providedCheckedRows.length }}
          </template>
        </b-table>

      </b-tab-item>
      <b-tab-item label="Checked rows">
        <pre>{{ checkedRows }}</pre>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script lang="ts">
  import {Component, Vue} from "nuxt-property-decorator";
  import OrderRepository from "../../api/order";
  import {Order} from "../../types/order";
  @Component({})
  export default class ShopOrder extends Vue {
    data: Array<Order> = []
    checkboxPosition = 'left'
    checkedRows = []
    providedCheckedRows = []
    columns = [
      {
        field: 'code',
        label: 'コード',
      },
      {
        field: 'product.name',
        label: '商品名',
      },
      {
        field: 'memo',
        label: '備考',
      },
      {
        field: 'createdAt',
        label: '注文時間',
        centered: true
      },
      {
        field: 'status',
        label: '提供ステータス',
      }
      ]
    created () {
      const orderRepository = new OrderRepository()
      orderRepository.fetchByShopId(1).then(res => {
        this.data = res.data
      })
    }
  }
</script>

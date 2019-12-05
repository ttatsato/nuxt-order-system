{<template>
  <section>
    <b-table
      :data="searchResult"
      ref="table"
      paginated
      per-page="5"
      :opened-detailed="defaultOpenedDetails"
      detailed
      detail-key="id"
      :show-detail-icon="showDetailIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page">
      <template slot-scope="props">
        <b-table-column
          field="id"
          label="No."
          width="10"
          numeric>
          {{ props.row.id }}
        </b-table-column>
        <b-table-column
          field="date"
          label="月日"
          width="10"
          sortable centered>
          {{ '2019/09/20' }}
        </b-table-column>
        <b-table-column
          field="tag"
          width="20"
          label="報告タイプ"
          sortable centered>
            <span class="tag is-success">
                {{ '窃盗' }}
            </span>
        </b-table-column>
        <b-table-column
          field="content"
          width="500"
          label="報告内容">
          {{ props.row.content }}
        </b-table-column>
        <b-table-column label="投稿者">
                    <span>
                        {{ props.row.shop.name }}
                    </span>
        </b-table-column>
      </template>
      <template slot="detail" slot-scope="props">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64"></p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ props.row.shop.name }}</strong>
                <small>31m</small>
                <br>
                {{props.row.content}}
              </p>
            </div>
          </div>
        </article>
      </template>
    </b-table>
  </section>
</template>

<script>
  import {Component, Prop, Vue} from 'nuxt-property-decorator'

  @Component()
  export default class SearchResultTable extends Vue {
    @Prop()
    searchResult;

    defaultOpenedDetails = [1];
    showDetailIcon = true
  }
</script>

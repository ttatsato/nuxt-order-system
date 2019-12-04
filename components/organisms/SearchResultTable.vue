<template>
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
          {{ new Date(props.row.date).toLocaleDateString() }}
        </b-table-column>
        <b-table-column
          field="tag"
          width="20"
          label="報告タイプ"
          sortable centered>
            <span class="tag is-success">
                {{ new Date(props.row.date).toLocaleDateString() }}
            </span>
          <span class="tag is-success">
                {{ new Date(props.row.date).toLocaleDateString() }}
            </span>
          <span class="tag is-success">
                {{ new Date(props.row.date).toLocaleDateString() }}
            </span>
        </b-table-column>
        <b-table-column
          field="user.first_name"
          width="500"
          label="報告内容">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
          Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        </b-table-column>
        <b-table-column label="投稿者">
                    <span>
                        <b-icon pack="fas"
                                :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                        </b-icon>
                        {{ props.row.gender }}
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
                <strong>{{ props.row.user.first_name }} {{ props.row.user.last_name }}</strong>
                <small>@{{ props.row.user.first_name }}</small>
                <small>31m</small>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
            </div>
          </div>
        </article>
      </template>
    </b-table>
  </section>
</template>

<script>
  import {Component, Prop, Watch, Vue} from 'nuxt-property-decorator'

  @Component()
  export default class SearchResultTable extends Vue {
    @Prop({type: Array})
    searchResult;

    defaultOpenedDetails = [1];
    showDetailIcon = true

    @Watch('searchResult')
    change (change) {
      console.log(change)
    }
  }
</script>

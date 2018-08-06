<template>
  <div>
    <div class="guideBar">
      <div v-for="group in groups" class="guild">
          <a style="text-decoration: none" v-bind:href="group.link">
            <img class="img-rounded" v-bind:src="group.backgroud" style="height: 3em; width: 90%">
            <span class="guide-text">{{group.chinese}}</span>
          </a>
      </div>
    </div>

    <div class="row" style="margin: 5%">
      <div v-for="album in albums" class="col-xs-6 col-sm-4 col-md-2 ">
          <a v-bind:href="album.link" class="thumbnail">
          <img v-bind:src="album.coverLink" v-bind:alt="album.name">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groups: [],
      albums: []
    };
  },
  methods: {
    getGroups() {
      return fetch('/apis/groups.json')
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Request failed!');
        })
        .then(josnResponse => {
          return josnResponse;
        })
    },

    getAlbums() {
      return fetch('/apis/albums.json')
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Request failed!');
        })
        .then(josnResponse => {
          return josnResponse;
        })
    },

    setupData() {
      this.getGroups()
        .then(groups => {
          this.groups = groups;
          return this.getAlbums();
        })
        .then(albums => {
          this.albums = albums;
        });
    }
  },
  mounted() {
    this.setupData();
  }
};
</script>

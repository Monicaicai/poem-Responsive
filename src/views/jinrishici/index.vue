<template>
  <div id="pagewrap">
    <div id="content">
      <article class="post clearfix">
        <header>
          <h1 class="post-title">
            <a :href="'https://www.baidu.com/s?wd='+ title + author" target="_blank">{{title}}</a>
          </h1>
          <p class="post-meta">
            <time class="post-date" datetime="2011-05-08" pubdate>{{dynasty}}</time>
            <em>by</em>
            <a href="#">{{author}}</a>
          </p>
        </header>
        <p class="widgettitle">
          {{poem}}
          <br />
          <br />
          <!-- {{weather}} -->
          <br />
        </p>
        <figure class="post-image">
          <img src="../../assets/images/sample-image.jpg" />
        </figure>
      </article>
      <!-- /.post -->
    </div>
    <aside id="sidebar">
      <!-- /.widget -->
      <!-- <el-button type="text">换一首</el-button> -->
      <section class="widget clearfix">
        <h4 class="widgettitle">weather</h4>
        <span v-rainbow @click="changePoem" class="weather">{{weather}}</span>
      </section>
      <section class="widget">
        <h4 class="widgettitle">{{title}}</h4>
        <p v-for="(item,index) in content" :key="index">{{item}}</p>
        <!-- {{content}} -->
      </section>
      <!-- /.widget -->
    </aside>
  </div>
</template>
<script>
export default {
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(3, 9); //随机颜色
      }
    }
  },
  data() {
    return {
      poem: "",
      weather: {},
      author: "",
      title: "",
      dynasty: "",
      content: []
    };
  },
  mounted() {
    this.loadSentence();
  },
  methods: {
    changePoem() {
      this.loadSentence();
    },
    loadSentence() {
      const jinrishici = require("jinrishici");
      jinrishici.load(
        result => {
          this.poem = result.data.content;
          this.weather = result.data.matchTags.join(" , ");
          this.author = result.data.origin.author;
          this.dynasty = result.data.origin.dynasty;
          this.title = result.data.origin.title;
          this.content = result.data.origin.content;
          // console.log("poem", result.data.origin);
        },
        err => {
          console.log("test");
        }
      );
    }
  }
};
</script>
<style scope>
.weather {
  cursor: pointer;
}
</style>

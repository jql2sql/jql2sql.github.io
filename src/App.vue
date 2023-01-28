<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import { ref } from 'vue'

import { parseJQL, transpile2SQL, KINDS, clearAST } from 'jql2sql';

const headers = ref([
  { text: "NAME", value: "name" },
  { text: "SIZE", value: "size"},
  { text: "PRICE", value: "price"}
]);
const items = ref([
  { name: "Curry", size: "XL", price: 20},
  { name: "Ramen", size: "M", price: 5},
  { name: "Hetbahn", size: "M", price: 10},
  { name: "Kimchi stew", size: "X", price: 10},
]);

// 필드 리스트
const fields = ['name', 'size', 'price'];
// 현재 지원되는 spec
// field type은 숫자로된 필드만 지원
// 지원되는 operator < > <= >= () or and

const userSearchingKeyword = ref();
const transpiled = ref();

function onSearchTerm() {
  const parsed = parseJQL(userSearchingKeyword.value);

  let sqlWhere = '';
  if (null != parsed) {
    sqlWhere = transpile2SQL(parsed, null);
    transpiled.value = sqlWhere;
  }
  else {
    transpiled.value = '';
  }
  console.log(searchingTerm.value);
  console.log(parsed);
  console.log(sqlWhere);
}
</script>

<template>
  <table>
    <tr>
      <td><a href="./pages/getting-started">Getting Started</a></td>
      <td> &nbsp;&nbsp;&nbsp;&nbsp; </td>
      <td><a href="https://github.com/jql2sql/jql2sql">Github</a></td>
    </tr>
  </table> 
  <br />
  <Vue3EasyDataTable
    :headers="headers"
    :items="items"
  />
  <br />
  <table>
    <tr aligh="left"><td><b>Example Searching Keyword</b></td></tr>
    <tr aligh="left"><td aligh="left">price = 10</td><td></td></tr>
    <tr aligh="left"><td aligh="left">&#40;price &nbsp;&nbsp;&nbsp;&nbsp;    &gt;&#61;     9&#41; and price &lt; 11</td><td></td></tr>
    <tr aligh="left"><td aligh="left">size ~ &quot;X*&quot; and price = 10</td><td></td></tr>
    <tr aligh="left"><td aligh="left">(name ~ &quot;*stew&quot; or name ~ &quot;Het*&quot;) and price = 10</td><td></td></tr>
    <tr>
      <td>&nbsp;</td>
    </tr>
    <tr aligh="left">
      <td><b>User Searching Keyword: </b></td>
      <td><input v-model="userSearchingKeyword" placeholder="edit me" v-on:input="onSearchTerm()"/></td>
    </tr>
    <tr aligh="left">
      <td><b>Transpfiled SQL: </b></td>
      <td><input v-model="transpiled" placeholder="Cleaned Searching Term" disabled/></td>
    </tr>
  </table>
  <Suspense>
    <HelloWorld :msg="transpiled" />
  </Suspense>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

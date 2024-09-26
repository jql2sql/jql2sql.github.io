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
const transpiled_select_sql = ref();

function onSearchTerm() {
  const parsed = parseJQL(userSearchingKeyword.value);

  let sqlWhere = '';
  if (null != parsed) {
    sqlWhere = transpile2SQL(parsed, null);
    transpiled.value = sqlWhere;
    transpiled_select_sql.value = 'select * from bobs where ' + sqlWhere;
  }
  else {
    transpiled.value = '';
  }
  console.log(parsed);
  console.log(sqlWhere);
}

function btnHandler(str) {
  console.log(str)
  userSearchingKeyword.value = str
  onSearchTerm()
}
</script>

<template>
  <table>
    <tr>
      <td><a href="./pages/">Getting Started</a></td>
      <td> &nbsp;&nbsp;&nbsp;&nbsp; </td>
      <td><a href="https://github.com/jql2sql/jql2sql">Github</a></td>
    </tr>
  </table> 
  <br />
  <div class="my_title">jql2sql live demo</div><br />
  <div class="my_title_description">Please click the example JQL below</div>
  <br />
  <div><b>Table data to search BY JQL</b></div>
  <Vue3EasyDataTable
    :headers="headers"
    :items="items"
  />
  <br />
  <table class="my_table">
    <tr>
      <td><b>Example JQL for searching</b></td>
    </tr>
    <tr align="left">
      <td>
        <button @click='btnHandler("size ~ \"X*\" and price = 10")'>size ~ &quot;X*&quot; and price = 10</button><br /><br />
        <button @click='btnHandler("(name ~ \"*stew\" or name ~ \"Het*\") and price = 10")'>(name ~ &quot;*stew&quot; or name ~ &quot;Het*&quot;) and price = 10</button><br /><br />
        <button @click='btnHandler("name ~ \"Curry Ramen\" and price <= 20")'>name ~ &quot;Curry Ramen&quot; and price &lt;= 20</button><br /><br />
        <button @click='btnHandler("size ~ \"M XL\" and name ~ \"Curry Ramen\"")'>size ~ &quot;M XL&quot; and name ~ &quot;Curry Ramen&quot;</button>
      </td>
    </tr>
    <tr aligh="left">
      <td style="width: 100%"><div class="my_arrow">↓</div></td>
    </tr>
    <tr aligh="left">
      <td style="width: 100%">
        <b>JQL</b><br />
        <input class="my_input" v-model="userSearchingKeyword" placeholder="Click Example JQL here" v-on:input="onSearchTerm()" disabled/>
      </td>
    </tr>
    <tr aligh="left">
      <td style="width: 100%"><div class="my_arrow">↓</div></td>
    </tr>
    <tr aligh="left">
      <td style="width: 100%">
        <b>JQL is transpfiled SQL</b><br/>
        <textarea class="my_textarea" v-model="transpiled" placeholder="" disabled/>
      </td>
    </tr>
    <tr aligh="left">
      <td style="width: 100%"><div class="my_arrow">↓</div></td>
    </tr>
    <tr aligh="left">
      <td style="width: 100%">
        <b>SQL select statement</b><br/>
        <textarea class="my_textarea" v-model="transpiled_select_sql" disabled/>
      </td>
    </tr>
    <tr aligh="left">
      <td style="width: 100%"><div class="my_arrow">↓</div></td>
    </tr>
  </table>
  <div><b>SQL Results</b></div>
  <Suspense>
    <HelloWorld :msg="transpiled" />
  </Suspense>
</template>

<style scoped>
.my_title {
  font-size: x-large;
  font-weight: bold;
}

.my_title_description {
  font-size: x-large;
}

.my_table {
  width: 100%;
}

.my_arrow {
  font-size: x-large;
  font-weight: bold;
}

.my_input {
  border: 1px solid;
  width: 100%;
}

.my_textarea {
  border: 1px solid;
  width: 100%;
}

.my_td {
  width: 100%;
}
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

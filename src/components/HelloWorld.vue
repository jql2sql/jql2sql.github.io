<script setup>
import initSqlJs from 'sql.js';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import { ref, watch } from 'vue'
import { propsToAttrMap } from '@vue/shared';

const props = defineProps({
  msg: String,
})

const headers = ref([
  { text: "NAME", value: "name" },
  { text: "SIZE", value: "size"},
  { text: "PRICE", value: "price"}
]);

const items = ref([]);

// const items = ref([
//   { name: "Curry", size: "XL", price: 20},
//   { name: "Ramen", size: "M", price: 5},
//   { name: "Hetbahn", size: "M", price: 10},
//   { name: "Kimchi stew", size: "X", price: 10},
// ]);

const SQL = await initSqlJs({
  locateFile: () => './node_modules/sql.js/dist/sql-wasm.wasm'
});
const db = new SQL.Database();
let sqlstr = "CREATE TABLE bobs (name char, size char, price int); \
INSERT INTO bobs VALUES ('Curry', 'XL', 20); \
INSERT INTO bobs VALUES ('Ramen', 'M', 5); \
INSERT INTO bobs VALUES ('Hetbahn', 'M', 10); \
INSERT INTO bobs VALUES ('Kimchi stew', 'X', 10);";
db.run(sqlstr);

watch(() => props.msg, (newMsg, oldMsg) => {
  try {
    let sqlSelect = `select * from bobs where ${newMsg}`;
    const rlt = db.exec(sqlSelect);

    items.value = [];
    for (const row of rlt[0].values) {
      const json = {}
      json['name'] = row[0]
      json['size'] = row[1]
      json['price'] = row[2]
      items.value.push(json);
      
    }
    console.log(items.value);

    console.log('props.msg');
    console.log(props.msg);
    console.log(sqlSelect);
  }
  catch (error) {
    console.log(error);
  }
});

</script>

<template>
  <h1>{{ msg }}</h1>
  <Vue3EasyDataTable
    :headers="headers"
    :items="items"
  />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

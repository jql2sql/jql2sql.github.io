<script setup>
import { ref, watch } from 'vue';
import alasql from 'alasql';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


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

let sqlstr = "CREATE TABLE bobs (name char, size char, price int); \
INSERT INTO bobs VALUES ('Curry', 'XL', 20); \
INSERT INTO bobs VALUES ('Ramen', 'M', 5); \
INSERT INTO bobs VALUES ('Hetbahn', 'M', 10); \
INSERT INTO bobs VALUES ('Kimchi stew', 'X', 10);";
alasql(sqlstr);

watch(() => props.msg, (newMsg, oldMsg) => {
  try {
    let sqlSelect = `select * from bobs where ${newMsg}`;
    const rlt = alasql(sqlSelect);
    items.value = rlt;

    console.log(rlt);
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
  <!-- <h1>{{ msg }}</h1> -->
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

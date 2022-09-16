<template>
  <div style="display: flex; flex-direction: row; gap: 100px; flex-wrap: wrap">
    <div v-for="airplane in airplanes" :key="airplane.id" class="airplane">
      <h3>{{ airplane.name }}</h3>
      <ul style="display: flex; flex-direction: column; gap: 30px">
        <li>
          Manufacturer: <br />
          {{ airplane.manufacturer }}
        </li>
        <li>Capacity: {{ airplane.capacity }}</li>
      </ul>
      <AirplaneSize :size="airplane.size" />
    </div>
  </div>
</template>

<style>
* {
  font-family: Fira Code !important;
  font-weight: 200;
  /* font-style: italic; */
}

body {
  background: #1b1e28;
}

ul {
  list-style-type: none;
}

.airplane {
  background-color: whitesmoke;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  width: 530px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>

<script setup lang="ts">
import { Airplane, airplanesData } from "./airplanes";
import AirplaneSize from "./components/AirplaneSize.vue";
const airplanes: Airplane[] = airplanesData;
</script>

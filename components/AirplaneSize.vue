<template>
  <ul class="size">
    <li>
      Length
      <p>{{ props.size.length }} m</p>
    </li>
    <li>
      Height
      <p>{{ props.size.height }} m</p>
    </li>
    <li>
      Wingspan
      <p>{{ props.size.wingspan }} m</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Size } from "../airplanes"
interface AirplaneSizeProps {
  size: Size;
}

const props = defineProps<AirplaneSizeProps>();
</script>

<style scoped>
.size li p {
  background-color: #3151bb;
  border-radius: 20px;
  padding: 5px 10px;
  color: white;
  font-weight: 800;
  font-size: 13px;
  box-shadow: 0 20px 25px -5px;
  text-align: center;
}
</style>

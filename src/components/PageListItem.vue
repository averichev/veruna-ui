<template>
  <tr>
    <td></td>
    <td>{{ page.name }}</td>
    <td>{{ page.code }}</td>
  </tr>
</template>

<script setup lang="ts">
import { IPageListItem } from "../models";
defineProps<IProps>();

interface IProps {
  page: IPageListItem;
}
</script>

<template>
  <tr>
    <td>
      <!--      <BDropdown-->
      <!--        v-model="state.show"-->
      <!--        :variant="'outline-secondary'"-->
      <!--        size="sm"-->
      <!--        :text="text"-->
      <!--      >-->
      <!--        <BDropdownItem @click="onDelete">Удалить</BDropdownItem>-->
      <!--      </BDropdown>-->
    </td>
    <td>{{ site.domain }}</td>
    <td>{{ site.name }}</td>
    <td>{{ site.description }}</td>
  </tr>
</template>

<script setup lang="ts">
import { ISiteListItem } from "../models";
import { reactive } from "vue";
const props = defineProps<IProps>();
const state = reactive<IState>({
  show: false,
});

interface IState {
  show: boolean;
}

interface IProps {
  site: ISiteListItem;
}

const text = ``;

const emit = defineEmits<{
  delete: [site: ISiteListItem];
}>();

const onDelete = () => {
  emit("delete", props.site);
};
</script>

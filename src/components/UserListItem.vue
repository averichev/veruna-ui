<template>
  <td>
    <BDropdown
      v-model="state.show"
      :variant="'outline-secondary'"
      size="sm"
      :text="text"
    >
      <BDropdownItem @click="onDelete">Удалить</BDropdownItem>
    </BDropdown>
  </td>
  <td>{{ user.username }}</td>
</template>

<script setup lang="ts">
import { IUserListItem } from "../models";
import { reactive } from "vue";
const props = defineProps<IProps>();
interface IProps {
  user: IUserListItem;
}

interface IState {
  show: boolean;
}

const state = reactive<IState>({
  show: false,
});

const text = ``;

const onDelete = () => {
  console.log(`delete user ${props.user.username} from pinia store`);
};
</script>

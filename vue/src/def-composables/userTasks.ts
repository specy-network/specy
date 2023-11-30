import { computed, onBeforeUpdate } from "vue";
import useSpecynetworkSpecySpecy from "@/composables/useSpecynetworkSpecySpecy";
import { useAddress } from "./useAddress";
import { useDenom } from "./useDenom";

export const userTasks = (perPage: number) => {
    // composables
    const { QueryTaskAllByOwner } = useSpecynetworkSpecySpecy();
    let { address } = useAddress()
    const query = QueryTaskAllByOwner(address.value, {});
    const tasks = computed(() => {
        return query.data.value?.tasks;
    })
    const isLoading = computed(() => {

        return query.isLoading.value;
    });
    return {
        tasks,
        isLoading,
    };
};

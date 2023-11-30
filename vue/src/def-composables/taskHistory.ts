import { computed, } from "vue";
import useSpecynetworkSpecySpecy from "@/composables/useSpecynetworkSpecySpecy";
import { useAddress } from "./useAddress";

export const taskRecords = (owner: string, name: string) => {
    // composables
    const { QueryExecuteRecordAllByOwnerAndName } = useSpecynetworkSpecySpecy();
    let { address } = useAddress()
    const query = QueryExecuteRecordAllByOwnerAndName(address.value, name, {});
    const records = computed(() => {
        return query.data.value?.records;
    })
    const isLoading = computed(() => {

        return query.isLoading.value;
    });
    return {
        records,
        isLoading,
    };
};

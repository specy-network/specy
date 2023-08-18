import { computed } from "vue";
import useSpecynetworkSpecySpecy from "../composables/useSpecynetworkSpecySpecy";
import { useAddress } from "./useAddress";

export const userDeposit = () => {
    const { address } = useAddress();
    const { QueryDeposit } = useSpecynetworkSpecySpecy();
    const query = QueryDeposit(address.value, {});
    const deposit = computed(() => {
        return query.data?.value?.deposit;
    });


    return { deposit, isLoading: query.isLoading };
};

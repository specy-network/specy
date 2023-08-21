import { computed } from "vue";
import useIntertx from "../composables/useIntertx";
import { useAddress } from "./useAddress";

export const icaAddress = (connecttionId: string) => {
    const { address } = useAddress();
    const { QueryInterchainAccount } = useIntertx();
    const query = QueryInterchainAccount(address.value, connecttionId, {});
    const addressInfo = computed(() => {
        return query.data?.value?.interchain_account_address;
    });


    return { addressInfo, isLoading: query.isLoading };
};

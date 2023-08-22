import { computed, onBeforeUpdate } from "vue";
import useSpecynetworkSpecySpecy from "@/composables/useSpecynetworkSpecySpecy";
import { useAddress } from "./useAddress";
import { useDenom } from "./useDenom";

export const userTasks = (perPage: number) => {
    // composables
    const { QueryTaskAll } = useSpecynetworkSpecySpecy();
    const query = QueryTaskAll({}, {}, perPage);


    type HelperTasks = NonNullable<
        NonNullable<Required<typeof query.data>["value"]>["pages"][0]["task"]>;
    const tasksRaw = computed(() => {
        return query.data?.value?.pages.reduce((bals, page) => {
            if (page.task) {
                return bals.concat(page.task);
            } else {
                return bals;
            }
        }, [] as HelperTasks);
    });
    const tasks = computed(() => {
        return {
            tasks: tasksRaw.value ?? [],
            isLoading: query.isLoading.value,
        };
    });
    const isLoading = computed(() => {
        return query.isLoading.value;
    });



    return {
        tasksRaw,
        tasks,
        isLoading,
        fetch: query.fetchNextPage,
        hasMore: query.hasNextPage,
    };
};

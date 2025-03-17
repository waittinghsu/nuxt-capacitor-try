// features/account/composables/useAccountBalance.ts
export function useAccountBalance() {
    const balance = ref(0);
    const loading = ref(false);

    const fetchBalance = async () => {
        loading.value = true;
        try {
            // API 調用
            // balance.value = await getBalance()
        }
        finally {
            loading.value = false;
        }
    };

    return {
        balance,
        loading,
        fetchBalance,
    };
}

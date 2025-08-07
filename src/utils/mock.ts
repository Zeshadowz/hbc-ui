// Simulate an API call with a 2-second delay
export const mockLoginApi = async (email: string, password: string): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
};


export const mockLogin = async (_email: string, _password: string): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, 3000));
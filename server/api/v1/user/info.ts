export default defineEventHandler(() => {
    return {
        code: 200,
        result: {
            name: 'omega',
            id: 1,
            group: 'DDT',
            menu: [
                { id: 1, name: 'Dashboard', key: 'dashboard' },
                { id: 2, name: 'About', key: 'about' },
                { id: 3, name: 'UserInfo', key: 'userInfo' },
            ],
            role: 'admin',
        },
    };
});

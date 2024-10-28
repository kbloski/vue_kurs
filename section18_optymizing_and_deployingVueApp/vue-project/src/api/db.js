const users = [
    {
        id: 1,
        login: "admin",
        password: "admin",
    },
    {
        id: 1,
        login: "client",
        password: "client",
    },
];

export function fetchLogin(userData) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                if (userData) {
                    const userExist = users.filter(
                        (u) =>
                            u.login === userData.login &&
                            u.password === userData.password
                    )[0];
                    return resolve(userExist);
                }
                return undefined;
            }, 800);
        } catch (err) {
            resolve(err);
        }
    });
}

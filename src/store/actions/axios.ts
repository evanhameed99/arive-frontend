import Axios from 'axios';

export function axiosGet(url: string, params = {}) {
    return new Promise((resolve, reject) => {
        const config = {

        };
        //  console.log(ADMIN_API_URL + url)
        Axios.get<any>('https://arrive-rest-api.herokuapp.com' + url, config)
            .then((res: any) => {
                console.log('the res', res)
                resolve(res.data);
            })
            .catch((err: any) => {
                reject(err);
            });
    });
}

// export function axiosDelete(url, params = {}) {
//   return new Promise((resolve, reject) => {
//     const { user } = store.getState();
//     const config = {
//       headers: { 'jwt-token': user.token, 'Content-Type': 'application/json' },
//       params: { ...params },
//     };
//     Axios.delete(ADMIN_API_URL + url, config)
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

// export function axiosPost(url, body = {}, header = {}) {
//   return new Promise((resolve, reject) => {
//     const { user } = store.getState();
//     let config = {};
//     if (user) {
//       config = {
//         headers: {
//           'jwt-token': user.token || '',
//           'Content-Type': 'application/json',
//           ...header,
//         },
//       };
//     }
//     Axios.post(ADMIN_API_URL + url, body, config)
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

// export function axiosPut(url, body = {}, header = {}) {
//   return new Promise((resolve, reject) => {
//     const { user } = store.getState();
//     let config = {};
//     if (user) {
//       config = {
//         headers: {
//           'jwt-token': user.token || '',
//           'Content-Type': 'application/json',
//           ...header,
//         },
//       };
//     }
//     Axios.put(ADMIN_API_URL + url, body, config)
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

// export function axiosPatch(url, body = {}, header = {}) {
//   return new Promise((resolve, reject) => {
//     const { user } = store.getState();
//     let config = {};
//     if (user) {
//       config = {
//         headers: {
//           'jwt-token': user.token || '',
//           'Content-Type': 'application/json',
//           ...header,
//         },
//       };
//     }
//     Axios.patch(ADMIN_API_URL + url, body, config)
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

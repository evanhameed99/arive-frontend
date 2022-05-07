import Axios from 'axios';

export function axiosGet(url: string, params = {}) {
    return new Promise((resolve, reject) => {
        const config = {

        };
        //  console.log(ADMIN_API_URL + url)
        Axios.get<any>(process.env.REACT_APP_API_URL + url, config)
            .then((res: any) => {
                console.log('the res', res)
                resolve(res.data);
            })
            .catch((err: any) => {
                reject(err);
            });
    });
}

export function axiosDelete(url:string, params = {}) {
  return new Promise((resolve, reject) => {
    const config = {
      headers: { },
      params: { ...params },
    };
    Axios.delete(process.env.REACT_APP_API_URL + url, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function axiosPost(url: string, body = {}, header = {}) {
    return new Promise((resolve, reject) => {
        let config = {};

        Axios.post(process.env.REACT_APP_API_URL + url, body, config)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}


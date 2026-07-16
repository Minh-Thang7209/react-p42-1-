/*
Централізація задач надсилання запитів, кешування результатів тощо
*/

interface ICacheItem {
    responseBody: object,
    expires: number,
}

const cache: Record<string, ICacheItem> = {};

export default class ApiBase {
    static getCached(url: string, conf?: object, fallback?: object): Promise<object> {
        return new Promise((resolve, reject) => {
            // url - адреса запиту (з усіма параметрами)
            // виступаю як ключ для кешу 
            // перед запитом перевіряємо чи є збережений кеш 
            if (typeof cache[url] != 'undefined') {
                if (cache[url].expires > new Date().getTime()) {
                    resolve(cache[url].responseBody);
                    return;
                }
            }

            setTimeout(() => {
                try {
                    const data = fallback!;
                    // Зберігаємо одержані дані до кешу 
                    cache[url] = {
                        responseBody: data,
                        expires: new Date().getTime() + 100000
                    };
                    resolve(cache[url].responseBody);
                }
                catch{
                    reject(404);
                }
               
            }, 600)

        });
    }

}
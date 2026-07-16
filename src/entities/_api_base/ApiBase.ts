/*
Централізація задач надсилання запитів, кешування результатів тощо
*/
<<<<<<< HEAD

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
=======
interface ICacheItem {
    responseBody: object,
    expires: number,
};

const cache:Record<string, ICacheItem> = { };

export default class ApiBase {
    static getCached(url:string, conf?:object, fallback?:object):Promise<object> {
        return new Promise((resolve, reject) => {
            // url - адреса запиту (з усіма параметрами)
            // виступає як ключ для кешу

            // перед запитом перевіряємо чи є збережений кеш
            if(typeof cache[url] != 'undefined') {
                // перевіряємо термін придатності
                if(cache[url].expires > new Date().getTime()) {
                    console.log(url, "Cache used");
>>>>>>> ce34a65b82723be3490004be8708127ff8553d5c
                    resolve(cache[url].responseBody);
                    return;
                }
            }
<<<<<<< HEAD

            setTimeout(() => {
                try {
                    const data = fallback!;
                    // Зберігаємо одержані дані до кешу 
=======
            // в реальному проєкті запускаємо fetch
            // в режимі імітації бекенду передаємо fallback, який
            //  будуть формувати АРІ для задач тестування
            setTimeout(() => {
                try {
                    const data = fallback!;
                    // зберігаємо одержані дані до кешу
>>>>>>> ce34a65b82723be3490004be8708127ff8553d5c
                    cache[url] = {
                        responseBody: data,
                        expires: new Date().getTime() + 100000
                    };
<<<<<<< HEAD
                    resolve(cache[url].responseBody);
                }
                catch{
                    reject(404);
                }
               
            }, 600)

        });
    }

=======
                    resolve(cache[url].responseBody);   
                }
                catch {
                    reject(404);
                }
            }, 1500);
        });
    }
>>>>>>> ce34a65b82723be3490004be8708127ff8553d5c
}
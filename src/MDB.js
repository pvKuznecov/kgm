const DBVersion = 1;
const DBName = 'MDB';

class mdb {
    constructor() {
        this.version = DBVersion
    }

    starter() {
        let openRequest = indexedDB.open(DBName, DBVersion);
        console.log("openRequest:::", openRequest);
        let res_val;
        openRequest.onupgradeneeded = function(event) {
            console.log("openRequest.onupgradeneeded");
            console.log("event", event);
            // срабатывает, если на клиенте нет базы данных // ...выполнить инициализацию...
            let db = openRequest.result;
            if (!db.objectStoreNames.contains('counters')) { // если хранилище "counters" не существует
                db.createObjectStore('counters', {keyPath: 'id'}); // создаём хранилище
            }
            if (!db.objectStoreNames.contains('tablets')) {
                db.createObjectStore('tablets', {keyPath: 'id'});
            }
            /* Чтобы удалить хранилище объектов:::*/
            // db.deleteObjectStore('books')

            // switch(event.oldVersion) {
            //     case 0:
            //         // версия 0 означает, что на клиенте нет базы данных; выполнить инициализацию
            //         db.createObjectStore('counters');
            //         db.createObjectStore('tablets');
            //         // let transaction = db.transaction("counter", "readwrite");
            //         // // получить хранилище объектов для работы с ним
            //         // let counters = transaction.objectStore("counter");
            //         // let counter = {
            //         //     id: 1,
            //         //     full: 100,
            //         //     now: 100
            //         // };
            //         // let request = counters.add(counter);
                    
            //         // request.onsuccess = function() {
            //         //     console.log("Счетчик добавлен в хранилище", request.result);
            //         // };
            //         // request.onerror = function() {
            //         //     console.log("Ошибка", request.error);
            //         // };

            //         // break;
            //         this.starter;
            // }
        };
          
        openRequest.onerror = function() {
            console.error("Error", openRequest.error);
        };
          
        openRequest.onsuccess = function() {
            console.log("openRequest.onsuccess");
            let db = openRequest.result;
            // продолжить работу с базой данных, используя объект db
            res_val = db;
        };
        
        return res_val;
    }

    addElem_counter() {
        let openRequest = indexedDB.open(DBName, DBVersion);
        openRequest.onsuccess = function() {
            let db = openRequest.result;
            let transaction = db.transaction("counters", "readwrite");
            let counters = transaction.objectStore("counters");
            
            let newCounter = { id: '1', name: 'All'};
            let request = counters.add(newCounter);

            request.onsuccess = function() { // (4)
                console.log("Добавлено", request.result);
            };
              
            request.onerror = function() {
                console.log("Ошибка", request.error);
            };
        };
    }

    getDB() {
        // return [1, 2, 3];
        let getResult = [];
        let openRequest = indexedDB.open(DBName, DBVersion);
        openRequest.onsuccess = function() {
            let db = openRequest.result;
            console.log("db", db);
            let transaction = db.transaction("counters", "readonly");

            try {
                let counters = transaction.objectStore("counters");
                console.log("counters", counters);
                let getR = counters.get(1);
                console.log("getR", getR);
                
                getResult = getR;
                return getResult;
            } catch(err) {
                console.log("ERROR!!!", err.message);
            }            
        };
        
        // console.log("getResult", getResult);
        // return getResult;
    }

    delDB() {
        let delRequest = indexedDB.deleteDatabase(DBName);
        console.log("delRequest");
        
        delRequest.onerror = function() {
            console.log("delRequest.onerror");
        };

        delRequest.onsuccess = function() {
            console.log("delRequest.onsuccess");
        };
    }
}

let MDB = new mdb();

export default MDB;
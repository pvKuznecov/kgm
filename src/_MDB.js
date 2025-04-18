let MDB = {};
// let openRequest = indexedDB.open('MDB', 1);

// Удалить базу данных:
let deleteRequest = indexedDB.deleteDatabase('MDB');
deleteRequest.onsuccess/onerror /*отслеживает результат*/

// openRequest.onupgradeneeded = function(event) {
//     // версия существующей базы данных меньше 2 (или база данных не существует)
//     MDB = openRequest.result;
//     console.log('event', event);
//     switch(event.oldVersion) { // существующая (старая) версия базы данных
//         case 0:
//             // версия 0 означает, что на клиенте нет базы данных
//             // выполнить инициализацию
//             MDB.createObjectStore('counter');

//             let transaction = MDB.transaction("counter", "readwrite");
//             // получить хранилище объектов для работы с ним
//             let counters = transaction.objectStore("counter");
//             let counter = {
//                 id: 1,
//                 full: 100,
//                 now: 100
//             };

//             let request = counters.add(counter);
//             request.onsuccess = function() {
//                 console.log("Счетчик добавлен в хранилище", request.result);
//             };

//             request.onerror = function() {
//                 console.log("Ошибка", request.error);
//             };

//             break;
//         // case 1:
//         //     // на клиенте версия базы данных 1
//         //     // обновить
//     }
// };

// openRequest.onerror = function() {
//     console.error("Error", openRequest.error);
// };
  
// openRequest.onsuccess = function() {
//     MDB = openRequest.result;
    
//     MDB.onversionchange = function() {
//         MDB.close();
//         alert("База данных устарела, пожалуйста, перезагрузите страницу.")
//     };
    
//     // продолжить работу с базой данных, используя объект db
//     console.log('MDB', MDB);
// };

// openRequest.onblocked = function() {
//     // это событие не должно срабатывать, если мы правильно обрабатываем onversionchange
  
//     // это означает, что есть ещё одно открытое соединение с той же базой данных
//     // и он не был закрыт после того, как для него сработал db.onversionchange
// };


export default MDB;
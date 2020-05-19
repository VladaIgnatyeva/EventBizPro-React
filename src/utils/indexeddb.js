
export const addNews = (db, title, description) => {
    // Запустим транзакцию базы данных и получите хранилище объектов Notes
    let tx = db.transaction(['news'], 'readwrite');
    let store = tx.objectStore('news');
    // Добаляем заметку в хранилище объектов
    let newNews = { title: title, description: description };
    store.add(newNews);
    // Ожидаем завершения транзакции базы данных
    tx.oncomplete = () => {
        console.log('stored news!')
    }
    tx.onerror = (event) => {
        alert('error storing note ' + event.target.errorCode);
    }
}


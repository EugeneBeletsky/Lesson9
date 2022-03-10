// Всем привет. 
// Домашка будет легкой. 
// 1) Установить локально пакет fs-extra
// 2) Создать папку
// 3) Создать текстовый файл
// 4) создать вторую папку
// 5) переместить файл из первой папки во вторую
// 6) Удалить файл
// 7) удалить папки
// Использовать пакет fs-extra с синхронизацией через callback
// Максимальная оценка 7 баллов



// На следующем занятии:
// - Promise;
// - async/await.


const fs = require ('fs-extra');    //require library fs-extra

fs.ensureDir('./firstFolder', ()=> {
    console.log("create first folder");
    fs.ensureFile('./firstFolder/file.txt', ()=>{
        console.log("create file");
        fs.ensureDir('./secondFolder', ()=>{
            console.log('create second folder');
            fs.move('./firstFolder/file.txt', './secondFolder/file.txt',()=>{
                console.log("move file");
                fs.remove('./secondFolder/file.txt',()=>{
                    console.log("remove file");
                    fs.remove('./firstFolder',()=>{
                        console.log("remove first folder");
                        fs.remove('./secondFolder',()=>{
                            console.log("remove second folder");
                        })
                    })
                })
            });
        })
    })
})  

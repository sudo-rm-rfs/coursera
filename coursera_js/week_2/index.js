var phoneBook = {}; // используем структуру объекта,где свойство - имя, значение - массив номеров,принадлежащих этому имени.

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function  (command) {  //для того,что бы вызывать из другого файла
    
 
    commands  = command.split(' '); 
    indef = commands[0]; //первый элемент в строке - команда
    

    if(indef == 'ADD'){
        name = commands[1]; //2 - имя
        numbers = commands[2].split(','); //3 - строка с номерами через запятую,которую приводим к массиву 
        
        if(!phoneBook.hasOwnProperty(name)){ //если такого имени нету в объекте
            phoneBook[name] = numbers;  //добавляем его и соотносим с массивом номеров
        }
        else {  //если имя есть
            
            for(i = 0; i < numbers.length; i++){
                
                phoneBook[name].push(numbers[i]); //добавляем в уже существующий массив номера
                
            }
        }
        
    }
    
    
    else if(indef == 'REMOVE_PHONE') {
        numb_remove = commands[1];
        for(name in phoneBook){     //перебираем имена
            if(phoneBook[name].includes(numb_remove)){ //перебираем номера и если есть
                x = phoneBook[name].indexOf(numb_remove); //получаем его индекс
                phoneBook[name].splice(x,1);//удаляем из объекта
                return true;
            }
         
        }
        return false;
        
    
    }
    
    
    
    else if(indef == 'SHOW'){
        var names = Object.keys(phoneBook).sort(); //получаем список имен и сортируем его
        
        var book = [];                        //создаем массив строк, который будет выводится на экран
        
        for (i = 0; i < names.length; i++){
			if(phoneBook[names[i]].length > 0 ) {
				book.push(names[i] + ': ' + phoneBook[names[i]].join(', ') );
			}
                                                                                                  // name2: phone1,phone2
        }
        return book;
            
    }
    
    
};
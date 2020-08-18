import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb(): {} {
        return {
            user: {
                "name": "Олег Лабунин",
                "birthdate": "30 июля 1981",
                "sex": "мужчина",
                "city": "Нижний Новгород",
                "citizenship": "Россия",
                "education": [
                  "Программирование на JavaScript - Базовый курс",
                  "Введение в разработку", 
                  "Разработка на React JS",
                  "Python. Базовый курс"] 
                }
        };
    }
}
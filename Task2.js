// Задание 2

// Цель практической работы:
// Научиться работать со структурами данных в Redis.

// Что нужно сделать
// Напишите последовательность команд для Redis:
// Создайте в Redis структуру данных с ключом ratings для хранения следующих значений рейтингов технологий: mysql — 10, postgresql — 20, mongodb — 30, redis — 40.
// По этому же ключу увеличьте значение рейтинга mysql на 15.
// Удалите из структуры элемент с максимальным значением.
// Выведите место в рейтинге для mysql.


HMSET ratings mysql 10 postgresql 20 mongodb 30 redis 40
HINCRBY ratings mysql 15
ZREM ratings (ZRANGE ratings 0 0)
ZREVRANK ratings mysql

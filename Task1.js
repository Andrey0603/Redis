// Задание 1

// Цель практической работы:
// Научиться выполнять простые запросы в Redis.

// Что нужно сделать
// Напишите последовательность команд для Redis:
// Создайте ключ index со значением “index precalculated content”.
// Проверьте, есть ли ключ index в БД.
// Узнайте, сколько ещё времени будет существовать ключ index.
// Отмените запланированное удаление ключа index.

SET index "index precalculated content"
EXISTS index
TTL index
PERSIST index



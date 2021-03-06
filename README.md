# mobster - техническое задание

Используя только читстый JS необходимо в документе [index.html](index.html) создать такую структуру разметки

```HTML
<div>
    <div>
        <iframe src="frame/index.html" frameborder=0></iframe>
    </div>
</div>
```

> Условие :
> [index.html](index.html) и [frame/index.html](frame/index.html) находяться на разных доменах, соответственно контент [frame/index.html](frame/index.html) не доступен в [index.html](index.html).

------

Все инициализации, объявления и выполнения JS должны происходить в анонимной области видимости. Подключить файл [index.js](index.js) к [документу](index.html) можно только с помощью JS (т.е. нельзя просто в документ вписать `</script src="index.js"></script>`);

------

Основной `<div>...</div>` должен быть зафиксирован в нижней части экрана, занимать 100% от ширины и 25% от высоты экрана, быть адаптивным (т.е. должен иметь возможность растягиваться под разные размеры экранов - смартфоны / планшеты). Cодержимое основного `<div>...</div>` должно заполнять все доступное пространство внутри. CSS стили в создаваемой конструкции можно применять только с помощью JS.

------

В встроеном документе `<iframe src="frame/index.html" frameborder=0></iframe>` [frame/index.html](frame/index.html), используя JS, необхидимо отслеживать ориентацию экрана и в зависимости от этого подставлять нужное изображение.

------

Примеры того как должен выглядеть итоговый результат

- Смартфон : [smartphone.mp4](examples/smartphone.mp4)
- Планшет  : [tablet.mp4](examples/tablet.mp4)

------

## Чего делать нельзя!
* Изменять  CSS в документе [index.html](index.html)
* Дополнять CSS в документе [index.html](index.html)

------

## Формат представления результатов :
1) Ссылка на Github репозиторий с исходным кодом
2) Ссылка на рабочий вариант (через Github Pages)


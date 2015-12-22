(function ($) {
    $(document).ready(function () {
        var tableData = [
            {
                "ru": "разметка",
                "en": "markup",
                "keywords": ["html"]
            },
            {
                "ru": "движок браузера",
                "en": "browser engine"
            },
            {
                "ru": "кэш",
                "en": "cache",
                "ruKeywords": ["браузер"],
                "enKeywords": ["browser"]
            },
            {
                "ru": "отладка",
                "en": "debug",
                "keywords": ["javascript"]
            },
            {
                "ru": "отладчик",
                "en": "debugger",
                "keywords": ["javascript"]
            },
            {
                "ru": "точка останова",
                "en": "breakpoint",
                "keywords": ["javascript"]
            },
            {
                "ru": "ошибка",
                "en": "error",
                "keywords": ["javascript"]
            },
            {
                "ru": "переменная",
                "en": "variable",
                "keywords": ["javascript"]
            },
            {
                "ru": "выражение",
                "en": "expression",
                "keywords": ["javascript"]
            },
            {
                "ru": "объявление",
                "en": "declaration",
                "keywords": ["javascript"]
            },
            {
                "ru": "строка",
                "en": "string",
                "keywords": ["javascript"]
            },
            {
                "ru": "подстрока",
                "en": "substring",
                "keywords": ["javascript"]
            },
            {
                "ru": "массив",
                "en": "array",
                "keywords": ["javascript"]
            },
            {
                "ru": "элемент",
                "en": "item",
                "keywords": ["javascript"]
            },
            {
                "ru": "область видимости",
                "en": "scope",
                "keywords": ["javascript"]
            },
            {
                "ru": "условие",
                "en": "condition",
                "keywords": ["javascript"]
            },
            {
                "ru": "цикл",
                "en": "loop",
                "keywords": ["javascript"]
            },
            {
                "ru": "замыкание",
                "en": "closure",
                "keywords": ["javascript"]
            },
            {
                "ru": "экземпляр",
                "en": "instance",
                "keywords": ["javascript"]
            },
            {
                "ru": "запрос",
                "en": "request",
                "keywords": ["javascript"]
            },
            {
                "ru": "узел",
                "en": "node",
                "keywords": ["dom"]
            },
            {
                "ru": "событие",
                "en": "event",
                "keywords": ["javascript"]
            },
            {
                "ru": "шаблон",
                "en": "template",
                "keywords": ["javascript"]
            },
            {
                "ru": "сборщик мусора",
                "en": "garbage collector"
            },
            {
                "ru": "инкапсуляция",
                "en": "encapsulation",
                "keywords": ["javascript"]
            },
            {
                "ru": "заголовок",
                "en": "header",
                "keywords": ["javascript"]
            },
            {
                "ru": "функция обратного вызова",
                "en": "callback",
                "keywords": ["javascript"]
            },
            {
                "ru": "кросс-доменный",
                "en": "cross-origin"
            },
            {
                "ru": "полупрозрачность",
                "en": "opacity",
                "keywords": ["css"]
            },
            {
                "ru": "родительский элемент",
                "en": "ancestor",
                "keywords": ["dom"]
            },
            {
                "ru": "дочерний элемент",
                "en": "child",
                "keywords": ["dom"]
            },
            {
                "ru": "соседний элемент",
                "en": "sibling",
                "keywords": ["dom"]
            },
            {
                "ru": "массивоподобный",
                "en": "array-like"
            },
            {
                "ru": "утечка памяти",
                "en": "memory leak",
                "keywords": ["javascript"]
            },
            {
                "ru": "таблица",
                "en": "table",
                "keywords": ["html"]
            },
            {
                "ru": "строка таблицы",
                "en": "table row",
                "keywords": ["html"]
            },
            {
                "ru": "столбец таблицы",
                "en": "table column",
                "keywords": ["html"]
            },
            {
                "ru": "ячейка таблицы",
                "en": "table cell",
                "keywords": ["html"]
            },
            {
                "ru": "область просмотра",
                "en": "viewport"
            },
            {
                "ru": "прокрутка",
                "en": "scroll",
                "keywords": ["html"]
            },
            {
                "ru": "полоса прокрутки",
                "en": "scrollbar",
                "keywords": ["html"]
            },
            {
                "ru": "всплывающая подсказка",
                "en": "tooltip"
            },
            {
                "ru": "всплывающее окно",
                "en": "popup"
            },
            {
                "ru": "сетка",
                "en": "grid",
                "keywords": ["css"]
            }
        ];
        for (var i = 0, count = tableData.length, tBody = $('.dictionary > tbody'); i < count; i++) {
            var currentItem = tableData[i],
                ruCell = $('<td class="ru"><span class="term">' + currentItem.ru + '</span><a target="_blank" title="Загуглить"><i class="fa fa-google"></i></a></td>'),
                enCell = $('<td class="en"><span class="term">' + currentItem.en + '</span><a target="_blank" title="Google it"><i class="fa fa-google"></i></a></td>'),
                row = $('<tr/>'),
                ruKeywords = [currentItem.ru],
                enKeywords = [currentItem.en];
            $.merge(ruKeywords, currentItem.keywords || [], currentItem.ruKeywords || []);
            $.merge(enKeywords, currentItem.keywords || [], currentItem.enKeywords || []);
            ruCell.find('a').attr('href', 'http://google.com/search?q=' + encodeURIComponent(ruKeywords.join(' ')));
            enCell.find('a').attr('href', 'http://google.com/search?q=' + encodeURIComponent(enKeywords.join(' ')));
            row.append(ruCell);
            row.append(enCell);
            tBody.append(row);
        }
        $('.loading').hide();
        $('.dictionary').show().tablesorter({
            widgets: ['filter', 'zebra']
        });
    });
}(jQuery));
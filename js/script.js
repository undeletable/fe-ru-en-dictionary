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
                ruCell = $('<td class="ru"><span class="term">' + tableData[i].ru + '</span><i class="fa fa-google" title="Загуглить"></i></td>'),
                enCell = $('<td class="en"><span class="term">' + tableData[i].en + '</span><i class="fa fa-google" title="Google it"></i></td></tr>'),
                row = $('<tr></tr>'),
                ruKeywords = [],
                enKeywords = [];
            if (currentItem.keywords) {
                $.merge(ruKeywords, currentItem.keywords);
                $.merge(enKeywords, currentItem.keywords);
            }
            if (currentItem.ruKeywords) {
                $.merge(ruKeywords, currentItem.ruKeywords);
            }
            if (currentItem.enKeywords) {
                $.merge(enKeywords, currentItem.enKeywords);
            }
            ruCell.data('keywords', ruKeywords.join(' '));
            enCell.data('keywords', enKeywords.join(' '));
            row.append(ruCell);
            row.append(enCell);
            tBody.append(row);
        }
        $('.loading').hide();
        $('.dictionary').show();
        $('.dictionary').tablesorter({
            widgets: ['filter', 'zebra']
        });
        $('.dictionary').on('click', '.fa-google', function (event) {
            var term = $(this).siblings('.term').text(),
                url = 'http://google.com/search?q=' + term + ' ' + $(this).parent().data('keywords');
            window.open(url, '_blank');
        });
    });
}(jQuery));
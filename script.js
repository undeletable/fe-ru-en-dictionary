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
                "en": "debug"
            },
            {
                "ru": "отладчик",
                "en": "debugger"
            },
            {
                "ru": "точка останова",
                "en": "breakpoint"
            },
            {
                "ru": "ошибка",
                "en": "error"
            },
            {
                "ru": "переменная",
                "en": "variable"
            },
            {
                "ru": "выражение",
                "en": "expression"
            },
            {
                "ru": "объявление",
                "en": "declaration"
            },
            {
                "ru": "строка",
                "en": "string"
            },
            {
                "ru": "подстрока",
                "en": "substring"
            },
            {
                "ru": "массив",
                "en": "array"
            },
            {
                "ru": "элемент",
                "en": "item"
            },
            {
                "ru": "область видимости",
                "en": "scope"
            },
            {
                "ru": "условие",
                "en": "condition"
            },
            {
                "ru": "цикл",
                "en": "loop"
            },
            {
                "ru": "счетчик",
                "en": "iterator"
            },
            {
                "ru": "замыкание",
                "en": "closure"
            },
            {
                "ru": "экземпляр",
                "en": "instance"
            },
            {
                "ru": "запрос",
                "en": "request"
            },
            {
                "ru": "узел",
                "en": "node"
            },
            {
                "ru": "событие",
                "en": "event"
            },
            {
                "ru": "шаблон",
                "en": "template"
            },
            {
                "ru": "сборщик мусора",
                "en": "garbage collector"
            },
            {
                "ru": "инкапсуляция",
                "en": "encapsulation"
            },
            {
                "ru": "заголовок",
                "en": "header"
            },
            {
                "ru": "функция обратного вызова",
                "en": "callback"
            },
            {
                "ru": "кросс-доменный",
                "en": "cross-origin"
            },
            {
                "ru": "полупрозрачность",
                "en": "opacity"
            },
            {
                "ru": "родительский элемент",
                "en": "ancestor"
            },
            {
                "ru": "дочерний элемент",
                "en": "child"
            },
            {
                "ru": "соседний элемент",
                "en": "sibling"
            }
        ];
        for (var i = 0, count = tableData.length, tBody = $('.dictionary > tbody'); i < count; i++) {
            var currentItem = tableData[i],
                ruCell = $('<td class="ru"><span class="term">' + tableData[i].ru + '</span><span class="google">Загуглить</span></td>'),
                enCell = $('<td class="en"><span class="term">' + tableData[i].en + '</span><span class="google">Google it</span></td></tr>'),
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
        $('.dictionary').on('click', '.google', function (event) {
            var term = $(this).siblings('.term').text(),
                url = 'http://google.com/search?q=' + term + ' ' + $(this).parent().data('keywords');
            window.open(url, '_blank');
        });
    });
}(jQuery));
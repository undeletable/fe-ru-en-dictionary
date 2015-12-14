(function ($) {
    $(document).ready(function () {
        var tableData = [
            {
                "ru": "разметка",
                "en": "markup"
            },
            {
                "ru": "движок браузера",
                "en": "browser engine"
            },
            {
                "ru": "кэш",
                "en": "cache"
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
            var row = '<tr><td>' + tableData[i].ru + '</td><td>' + tableData[i].en + '</td></tr>';
            tBody.append(row);
        }
        $('.loading').hide();
        $('.dictionary').show();
        $('.dictionary').tablesorter({
            widgets: ['filter']
        });
    });
}(jQuery));
(function ($) {
    $(document).ready(function () {
        $.getJSON('data/data.json', function (data) {
            for (var i = 0, count = data.length, tBody = $('.dictionary > tbody'); i < count; i++) {
                var currentItem = data[i],
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
    });
}(jQuery));
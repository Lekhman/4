Data = new Date();
Year = Data.getFullYear();
Month = Data.getMonth();
Day = Data.getDate();

// Преобразуем месяца
switch (Month)
{
  case 0: fMonth="января"; break;
  case 1: fMonth="февраля"; break;
  case 2: fMonth="марта"; break;
  case 3: fMonth="апреля"; break;
  case 4: fMonth="мае"; break;
  case 5: fMonth="июня"; break;
  case 6: fMonth="июля"; break;
  case 7: fMonth="августа"; break;
  case 8: fMonth="сентября"; break;
  case 9: fMonth="октября"; break;
  case 10: fMonth="ноября"; break;
  case 11: fMonth="декабря"; break;
}

h1 = $('h1')
h1.html('Что день '+Day+' '+fMonth+' '+Year+' готовит?')

url = 'http://sf-pyw.mosyag.in/m04/api/forecasts';

function log_header_click() {
    $.getJSON(url, function (data) {
    message = data["prophecies"];
    insert_predictions(message);
})
}

function insert_predictions(msg) {
    $.each(msg, function (index) {
            p = $('#' + (index + 1));
            p.html(this);
           })

}
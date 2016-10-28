//Author: bachvtuan@gmail.com
//Format string
if (!String.prototype.formatString) {
  String.prototype.formatString = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
      return args[number] || match;
    });
  };
}

(function ($) {
  var obj_timestamp = {};
  var obj_jsonData = [];


  $.fn.github_graph = function (options) {

    //If the number less than 10, add Zero before it
    var prettyNumber = function (number) {
      return number < 10 ? '0' + number.toString() : number.toString();
    };

    /*
     Count the number on each day and store the object
     */
    var processListTimeStamp = function (list_timestamp, callback) {
      $.getJSON(list_timestamp, function (jsonData) {
        $.each(jsonData, function (i, obj) {
          //use obj.id and obj.name here, for example:

          var _d = new Date(obj.timestamp);
          _d.setDate(_d.getDate() + 1);
          var display_date = getDisplayDate(_d);

          if (!obj_timestamp[display_date]) {
            obj_jsonData[display_date] = [];
            obj_timestamp[display_date] = 1;
            callback(obj_timestamp[display_date])
          } else {
            obj_timestamp[display_date]++;
            callback(obj_timestamp[display_date])
          }

          obj_jsonData[display_date].push({
            githubHandle: obj.githubHandle,
            url: obj.url
          });

        });
      });
    };

    var getDisplayDate = function (date_obj) {
      var pretty_month = prettyNumber(date_obj.getMonth() + 1);
      var pretty_date = prettyNumber(date_obj.getDate());

      return '{0}-{1}-{2}'.formatString(date_obj.getFullYear(), pretty_month, pretty_date);
    };

    var getCount = function (display_date) {
      if (obj_timestamp[display_date]) {
        return obj_timestamp[display_date];
      }

      return 0;
    };

    var getColor = function (count) {
      if (count >= settings.colors.length) {
        return settings.colors[settings.colors.length - 1];
      }

      return settings.colors[count];
    };

    var start = function () {
      processListTimeStamp(settings.data, function () {
        var wrap_chart = _this;

        settings.colors_length = settings.colors.length;

        var start_date = new Date();
        start_date.setMonth(start_date.getMonth() - 12);

        for (var i = 0; i < 7; i++) {
          var day = start_date.getDay();

          if (day == 0) {
            //sunday
            break;
          } else {
            //Loop until get Sunday
            start_date.setDate(start_date.getDate() + 1);
          }
        }

        var loop_html = '';

        //One year has 52 weeks
        var step = 13;

        var month_position = [];
        var current_date = new Date();

        month_position.push({month_index: start_date.getMonth(), x: 0});

        var using_month = start_date.getMonth();

        for (var i = 0; i <= 52; i++) {
          var g_x = i * step;
          var item_html = '<g transform="translate(' + g_x.toString() + ',0)">';

          for (var j = 0; j < 7; j++) {

            if (start_date > current_date) {
              //Break the loop
              break;
            }
            var y = j * step;

            var month_in_day = start_date.getMonth();
            var data_date = getDisplayDate(start_date);
            //Check first day in week
            if (j == 0 && month_in_day != using_month) {
              using_month = month_in_day;
              month_position.push({month_index: using_month, x: g_x});
            }
            //move on to next day
            start_date.setDate(start_date.getDate() + 1);
            var count = getCount(data_date);
            var color = getColor(count);

            item_html += '<rect class="day" width="11" height="11" y="' + y + '" fill="' + color + '" data-count="' + count + '" data-date="' + data_date + '"/>';
          }

          item_html += '</g>';

          loop_html += item_html;

        }

        //trick
        if (month_position[1].x - month_position[0].x < 40) {
          //Fix ugly graph by remove first item
          month_position.shift();
        }

        for (var i = 0; i < month_position.length; i++) {
          var item = month_position[i];
          var month_name = settings.month_names[item.month_index];
          loop_html += '<text x="' + item.x + '" y="-5" class="month">' + month_name + '</text>';
        }

        //Add Monday, Wenesday, Friday label
        loop_html += '<text text-anchor="middle" class="wday" dx="-10" dy="22">{0}</text>'.formatString(settings.h_days[0]) +
          '<text text-anchor="middle" class="wday" dx="-10" dy="48">{0}</text>'.formatString(settings.h_days[1]) +
          '<text text-anchor="middle" class="wday" dx="-10" dy="74">{0}</text>'.formatString(settings.h_days[2]);

        //Fixed size for now with width= 721 and height = 110
        var wire_html = [
          '<svg width="721" height="110" class="js-calendar-graph-svg">',
          '<g transform="translate(20, 20)">',
          loop_html,
          '</g>',
          '</svg>'
        ].join('');

        wrap_chart.html(wire_html);

        //Mare sure off previous event
        /*$(document).off('mouseenter', _this.find('rect'), mouseEnter );
         $(document).off('mouseleave', _this.find('rect'), mouseLeave );
         $(document).on('mouseenter', _this.find('rect'), mouseEnter );
         $(document).on('mouseleave', _this.find('rect'), mouseLeave );
         */
        var rect = _this.find('rect');

        rect.css('cursor', 'pointer');
        rect.mouseenter(mouseEnter);
        rect.mouseleave(mouseLeave);
        rect.click(mouseClick);

        $('.expanded-tip').hide();
        appendTooltip();

      })
    };

    var mouseLeave = function () {
      $('.svg-tip').hide();
    };

    var mouseClick = function (evt) {
      var expanded_tip = $('.expanded-tip').show();

      var count = $(evt.target).attr('data-count');
      var date = $(evt.target).attr('data-date');

      if (count == 0) {
        text = 'There were no sites added to our directory on ' + date + '.';
      } else {
        var count_text = ( count > 1 ) ? settings.texts[1] : settings.texts[0];
        var grid = '<p>';

        $.each(obj_jsonData[date], function (i, obj) {
          grid += '<div class="user_avatar"><a href="https://' + obj.url + '" target="_blank"><img src="https://github.com/' + obj.githubHandle + '.png?size=40"></a></div>';
        });

        var text = '{0} {1} on {2} {3}'.formatString(count, count_text, date, grid);
      }

      expanded_tip.html(text);
      //var target_offset = $(evt.target).offset();

      $('.contribution_graph').height(expanded_tip.height() + 130);
    };

    //handle event mouseenter when enter into rect element
    var mouseEnter = function (evt) {

      var target_offset = $(evt.target).offset();
      var count = $(evt.target).attr('data-count');
      var date = $(evt.target).attr('data-date');

      var count_text = ( count > 1 ) ? settings.texts[1] : settings.texts[0];

      var text = '{0} {1} on {2}'.formatString(count, count_text, date);

      var svg_tip = $('.svg-tip').show();
      svg_tip.html(text);

      var svg_width = Math.round(svg_tip.width() / 2 + 5);
      var svg_height = svg_tip.height() * 2 + 10;

      svg_tip.css({top: target_offset.top - svg_height});
      svg_tip.css({left: target_offset.left - svg_width});
    };

    //Append tooltip to display when mouse enter the rect element
    //Default is display:none
    var appendTooltip = function () {
      if ($('.svg-tip').length == 0) {
        $('body').append('<div class="svg-tip svg-tip-one-line" style="display:none;" ></div>');
        $('.contribution_graph').append('<div class="expanded-tip expanded-one-line" style="display:none;" ></div>');
      }
    };

    var settings = $.extend({
      //Default init settings.colors, user can override
      colors: ['#eeeeee', '#d6e685', '#8cc665', '#44a340', '#44a340'],
      //List of name months
      month_names: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      h_days: ['M', 'W', 'F'],
      //Default is empty, it can be overrided
      data: [],
    }, options);

    var _this = $(this);

    start();

  };

}(jQuery));

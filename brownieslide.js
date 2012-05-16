(function ($, d, undefined) {

	$.fn.brownieSlide = function (options) {
		var ops = {
			activeClass: 'active',
			arrows: true,
			autoPlay: false,
			speed: 500,
			delay: 3000,
			easing: 'swing'
		},
		ops = $.extend(ops, options),
		arr = 'arrows',
		cloned = 'cloned',
		s = this;
		
		return s.each(function () {
			var me = $(this).addClass('brownieslide'),
			list = me.find('ul'),
			children = list.find('li'),
			first = children.first(),
			
			itemCount = children.length + 2,
			
			width = first.width(),
			height = first.height(),
			
			setActive = function (el) { el.addClass(ops.activeClass).siblings().removeClass(ops.activeClass); },
			
			slide = function (pos, callback) {
				return list.is(':animated') || list.stop().animate({left: parseFloat(pos)}, ops.speed, ops.easing, callback);
			};
			
			
			if (itemCount >= 4) {
				
				list.css({ width : width * itemCount, left: -width});
				first.addClass(ops.activeClass).clone().removeClass(ops.activeClass).addClass(cloned).appendTo(list);
				children.last().clone().addClass(cloned).prependTo(list);
				children = list.find('li');
				if (ops.arrows) {
					$('<p class="' + arr + '"> <span class="previous arrow" /> <span class="next arrow" /> </p>').appendTo(me.parent()).find('.arrow').each(function() {
						var me = $(this), 
						dir = me.attr('class').split(' ')[0], 
						arrows = { previous: '&larr;', next: '&rarr;' };
						
						me.html(arrows[dir]);
					
					}).click(function() {
						var me = $(this), 
						dir = me.attr('class').split(' ')[0],
						current = children.filter('.' + ops.activeClass),
						margin = parseFloat(list.css('left')),
						actions = {
							next: function() {
								var last = current.next()[0] == children.last()[0],
								next = last ? children.eq(1) : current.next();
								setActive(next);
								return slide(margin - width, function() {
									last && list.css('left',-width);
									margin = -width;
								});
							},
							previous: function() {
								
								var first = current.prev()[0] == children.first()[0],
								prev = first ? children.eq(-2) : current.prev();
								setActive(prev);
								
								return slide( margin + width, function() {
									first && list.css('left',(-1 * width * (itemCount - 2)));
								});
							}
						};
						
						if (actions[dir]) {
							actions[dir]();
						}
					});
				
				}
			}
			
			
		});
	};
}(jQuery,document));
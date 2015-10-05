$(document).ready(function(){
	//console.log( 15600.0- 13676.4);
	var date_now, dd, mm, yyyy;
	var DAY_RES = "<div class='d_res'>"+
							"<div class='d_date'><time datetime=''></time></div>"+
							"<div class='d_r_in'></div>"+
							"<div class='d_r_in0'></div>"+
							"<div class='d_r_out'></div>"+
							"<div class='d_r_out0'></div>"+
						"</div>";
	function numIn(num){
		return String(num.toFixed(2)).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
	}
	function numOut(num){
		num = num.replace(/\s+/g, '')
		num = parseFloat(num);
		
		return num;
	}
	function dateIn(dt){
		var date = dt.split("-");
		return date[2]+"."+date[1]+"."+String(date[0]).replace(/([0-9]{2})([0-9]{2})/g, '$2');
	}
	function dateOut(dt){
		var date = dt.split(".");
		if(date[2]<10)
			date[2]="200"+String(parseFloat(date[2]));
		else
			date[2]="20"+String(parseFloat(date[2]));
		
		if(date[1]<10)
			date[1]="0"+String(parseFloat(date[1]));
		
		if(date[0]<10)
			date[0]="0"+String(parseFloat(date[0]));
		return date[2]+"-"+date[1]+"-"+date[0];
	}
	function month_result(num){
		var m_in=0;
		var m_out=0;
		var m_in0=0;
		var m_out0=0;
		//console.log("num: "+num);
		$(".month").eq(num).find(".row").each(function(){
			var n_in=$(this).find(".in1").text();
			var n_out=$(this).find(".out1").text();
			var n_in0=$(this).find(".in0").text();
			var n_out0=$(this).find(".out0").text();
			
			//console.log(n_in+" - "+n_out);
			n_in=numOut(n_in);
			n_out=numOut(n_out);
			n_in0=numOut(n_in0);
			n_out0=numOut(n_out0);
			//console.log(n_in+" = "+n_out);
			
			if(!isNaN(n_in))
				m_in+=n_in;
			if(!isNaN(n_out))
				m_out+=n_out;
			if(!isNaN(n_in0))
				m_in0+=n_in0;
			if(!isNaN(n_out0))
				m_out0+=n_out0;
			
			//console.log(m_in+" --- "+m_out);
			
			
		});
		//console.log(m_in+" / "+m_out);
		$(".month").eq(num).find(".m_r_in").text(numIn(m_in));
		$(".month").eq(num).find(".m_r_out").text(numIn(m_out));
		$(".month").eq(num).find(".m_r_in0").text(numIn(m_in0));
		$(".month").eq(num).find(".m_r_out0").text(numIn(m_out0));
	}
	function months_result(){
		$(".month").each(function(){		
			var num = $(".month").index(this);
			//console.log("month finded, eq: "+num);
			month_result(num);
		});
	};
	
	function day_result(num){
		var d_in=0;
		var d_out=0;
		var d_in0=0;
		var d_out0=0;
		
		var n_date=0;
		var n_data_tm=0;
		//console.log("num: "+num);
		$(".day").eq(num).find(".row").each(function(){
				n_date=$(this).find(".date").text();
				n_data_tm=$(this).find(".date").attr("data-time");
			var n_in=$(this).find(".in1").text();
			var n_out=$(this).find(".out1").text();
			var n_in0=$(this).find(".in0").text();
			var n_out0=$(this).find(".out0").text();
			
			//console.log(n_in+" - "+n_out);
			n_in=numOut(n_in);
			n_out=numOut(n_out);
			n_in0=numOut(n_in0);
			n_out0=numOut(n_out0);
			//console.log(n_in+" = "+n_out);
			
			if(!isNaN(n_in))
				d_in+=n_in;
			if(!isNaN(n_out))
				d_out+=n_out;
			if(!isNaN(n_in0))
				d_in0+=n_in0;
			if(!isNaN(n_out0))
				d_out0+=n_out0;
			
			//console.log(d_in+" --- "+d_out);			
		});
		
		//console.log(d_in+" / "+d_out);
		$(".day").eq(num).find(".d_date").text(n_date);
		$(".day").eq(num).find(".d_date").attr("data-time", n_data_tm);
		$(".day").eq(num).find(".d_r_in").text(numIn(d_in));
		$(".day").eq(num).find(".d_r_out").text(numIn(d_out));
		$(".day").eq(num).find(".d_r_in0").text(numIn(d_in0));
		$(".day").eq(num).find(".d_r_out0").text(numIn(d_out0));
	}
	function days_result(){
		$(".day").each(function(){		
			var num = $(".day").index(this);
			//console.log("month finded, eq: "+num);
			day_result(num);
		});
	};
	
	function all_result(){
		var is=0;
		var free=0;
		var out=0;
		var out0=0;
		$(".month").each(function(){	
		
		//console.log($(this).find(".m_r_in").text());
			is+=parseFloat(numOut($(this).find(".m_r_in").text()));
			out+=parseFloat(numOut($(this).find(".m_r_out").text()));
			out0+=parseFloat(numOut($(this).find(".m_r_out0").text()));	
		console.log("is: "+typeof is);
		console.log("out: "+typeof out);
		console.log("out0: "+typeof out0);
		});
		console.log("------------");
		console.log("is: "+is);
		console.log("out: "+ out);
		console.log("out0: "+ out0);
		//String(nubmer).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
		console.log("is - out: "+ (is-out));
		$("#res_is").text(numIn(is-out));
		//$("#res_is").text(parseFloat(is)-parseFloat(out));
		console.log("is-out-out0: "+ (is-out-out0));
		$("#res_free").text(numIn(is-out-out0));
		//$("#res_free").text(parseFloat(is-out-out0));
	};
	
	function day_toggle(num){
		if($(".day").eq(num).find(".day_toggle").text()=="-")
			{
			$(".day").eq(num).find(".row").hide();
			$(".day").eq(num).find(".d_res").show();
			$(".day").eq(num).find(".day_toggle").text("+");
			}
		else
			{
			$(".day").eq(num).find(".row").show();
			$(".day").eq(num).find(".d_res").hide();
			$(".day").eq(num).find(".day_toggle").text("-");
			}
		
	};
	function start(){
		var w_h=$(window).height();
		var l_h1=$("#header").height();
		var l_h2=$("#rows").height();
		var l_h3=$("#add").height();
		console.log((l_h1+l_h2+l_h3)+">"+w_h);
		if((l_h1+l_h2+l_h3)>w_h){
			$("#add").css({'position': 'fixed', 'bottom':0}).addClass("wr");
			$("#wrap").css('margin-bottom', $("#add").height()+"px");
		}
		else
		{
			$("#add").css({'position': 'relative', 'bottom':0}).removeClass("wr");
			$("#wrap").css('margin-bottom', "0px");
		}
		
		date_now = new Date();
		console.log(date_now);
		dd = date_now.getDate();
		mm = date_now.getMonth()+1;
		yyyy=date_now.getFullYear();
		
		if(dd<10)
			dd='0'+dd;
		if(mm<10)
			mm='0'+mm;
		console.log(yyyy+"-"+mm+"-"+dd);
		
		$("#add_date").find("input").val(yyyy+"-"+mm+"-"+dd);
		
		if(!$("div").is("#ind"))
		{
			$("body").append("<div id='ind'></div>")
		}
		
		row_act();
	};
	
	function add_button(){
		var name= $("#add_name input").val();
		var in1= $("#add_in1 input").val();
		var in0= $("#add_in0 input").val();
		var out1= $("#add_out1 input").val();
		var out0= $("#add_out0 input").val();
		
		if(name!='' && (in1!='' || in0!='' || out1!='' || out0!=''))
		{
			$("#b_add").removeAttr('disabled');
		}
		else
		{
			$("#b_add").attr('disabled', true);
		}
	}
	
	function month_name(num){
		//num++;
		
		num=parseFloat(num);
		console.log("month: "+num);
		switch(num){
			case 1: num="Январь"; break;
			case 2: num="Февраль"; break;
			case 3: num="Март"; break;
			case 4: num="Апрель"; break;
			case 5: num="Май"; break;
			case 6: num="Июнь"; break;
			case 7: num="Июль"; break;
			case 8: num="Август"; break;
			case 9: num="Сентябрь"; break;
			case 10: num="Октябрь"; break;
			case 11: num="Ноябрь"; break;
			case 12: num="Декабрь"; break;
		}
		
		return num;
	}
	
	function scroll_to_bottom(speed) {
		var height= $("body").height(); 
		$("html,body").animate({"scrollTop":height},speed); 
	}
	
	
	function save(){
		console.log("save...");
		$(".month[data-ch!=0]").each(function(){
			var mn=$(this).attr("data-name");
			var yr=$(this).parent(".year").attr("data-name");
			var nm=yr+"-"+mn;
			console.log("save: "+nm);
			$(this).attr("data-ch", 0);
			//console.log($(this)[0].outerHTML);
			
				html = $(this)[0].outerHTML;
				html = escape(html);
				//console.log(html);
				html = html.replace(/\%/g, "|");
			var data="data="+html+"&mod=save&nm="+nm;
			var dir="php/action.php";
			$.ajax(
			{
			type: "POST",
			url: dir,
			data: data,
			success: function(html){
				$("#ind").html(html);
			  }
			}); 
		});	
	}
	function open(){		
			
			var data="mod=open";
			var dir="php/action.php";
			$.ajax(
			{
			type: "POST",
			url: dir,
			data: data,
			async: false,
			success: function(html){
				html = html.replace(/\|/g, "%");
				//console.log(html);
				html = unescape(html);
				
				//console.log(html);
				$("#rows").html(html);
				$(".month").each(function(){
					var date = $(this).find(".day").eq(0).attr("data-dt");
					dt_a1=date.split("-");
					$(this).wrap("<div class='year' data-name='"+dt_a1[0]+"'></div>");
				});
			  }
			}); 		
	}
	
	function row_act(){
		$("#rows").find(".row").each(function(){
			if($(this).find(".del_p").length<1)
			{
				//console.log("rr1");
				$(this).append("<div class='del_p'><button class='del_row'> - </button></a>")
			}
			else
			{				
				//console.log("rr2");
			}
		});
	}
	
	open();
	days_result();
	months_result();
	all_result();
	start();
	
	$(window).resize(function(){
		start();
	});
	
	$("body").on("dblclick", ".del_row", function(){
		$(this).closest(".month").attr("data-ch", "1");
		$(this).closest(".row").detach();
		save();
	});
	
	$("body").on("click", ".day_toggle", function(){
		var num = $(".day_toggle").index(this);
		day_toggle(num);
	});
	
	$("body").on("dblclick", ".in1", function(){
		var text = numOut($(this).text());
		$(this).empty().append("<span style='display: none'>"+text+"</span><input type='number' value='"+text+"' class='i_cell'>");
		$(this).find(".i_cell").focus();
	});	
	$("body").on("dblclick", ".in0", function(){
		var text = numOut($(this).text());
		$(this).empty().append("<span style='display: none'>"+text+"</span><input type='number' value='"+text+"' class='i_cell'>");
		$(this).find(".i_cell").focus();		
	});
	$("body").on("dblclick", ".out0", function(){
		var text = numOut($(this).text());
		$(this).empty().append("<span style='display: none'>"+text+"</span><input type='number' value='"+text+"' class='i_cell'>");
		$(this).find(".i_cell").focus();
	});
	$("body").on("dblclick", ".out1", function(){
		var text = numOut($(this).text());
		$(this).empty().append("<span style='display: none'>"+text+"</span><input type='number' value='"+text+"' class='i_cell'>");
		$(this).find(".i_cell").focus();
	});
	$("body").on("dblclick", ".name", function(){
		var text = $(this).text();
		$(this).empty().append("<span style='display: none'>"+text+"</span><input type='text' value='"+text+"' class='i_cell'>");
		$(this).find(".i_cell").focus();
	});	
	$("body").on("focusout", ".i_cell", function(){
		var text = $(this).val();
		var before = $(this).parent().find("span").text();
		if(text!=before)
		{
			//
			//console.log(text+" = "+before);
			$(this).closest(".month").attr("data-ch", "1");
			//console.log($(this).closest(".month").attr("data-ch"));
			
		}
		$(this).parent().html("").text(text);
		save();
	});
	$("body").on("dblclick", ".date", function(){
		var text = $(this).text();
		//dt=time.split(".");
		text = dateOut(text);
		console.log(text);
		//$(this).empty().append("<span style='display: none'>"+text+"</span><input type='text' value='"+text+"' class='i_cell'>");
		$(this).empty().append("<span style='display: none'>"+text+"</span><input type='date' value='"+text+"' class='i_cell_dt'>");
		$(this).find(".i_cell_dt").focus();
	});
	$("body").on("focusout", ".i_cell_dt", function(){
		var text = $(this).val();
		//console.log(text);
		//text=dateIn(text);
		var before = $(this).parent().find("span").text();
		console.log(text+'!='+before);
			text=dateIn(text);
		if(text!=before)
		{
			$(this).parent(".month").attr("data-ch", "1");
		}
		$(this).parent().html("").text(text);
			save();
	});
	
	$("body").on("keyup", "#add input", function(){
		//console.log("QQ");
		add_button();
	});
	
	$("body").on("click", "#b_add", function(){
		var date= $("#add_date input").val();
		var date2=dateIn(date);
		var name= $("#add_name input").val();
		var in1= $("#add_in1 input").val();
		var in0= $("#add_in0 input").val();
		var out1= $("#add_out1 input").val();
		var out0= $("#add_out0 input").val();
		
		var tr="<div class='row' data-row='"+date+"'>"+
			"<div class='date' data-time='"+date+"'>"+date2+"</div>"+
			"<div class='name'>"+name+"</div>"+
			"<div class='in1'>"+in1+"</div>"+
			"<div class='in0'>"+in0+"</div>"+
			"<div class='out1'>"+out1+"</div>"+
			"<div class='out0'>"+out0+"</div>"+
		"</div>";
		
		console.log(tr);
		
		dt_a0=date.split("-");// yyyy mm dd
		// если есть такой год
		if($("div").is(".year[data-name='"+dt_a0[0]+"']"))
		{
			// если есть такой месяц
			if($("div").is(".month[data-name='"+dt_a0[1]+"']"))
			{	
				// если есть такой день
				if($("div").is(".day[data-name='"+dt_a0[2]+"']"))
				{
					console.log("// : "+date);
					console.log("// : "+dt_a0[2]);
					$(".day[data-dt='"+date+"']").find(".d_res").before(tr);
				}
				// если дня нет
				else
				{
					
					console.log("дня нет : "+date);
					var dt0 = date;
					console.log("dt0: "+dt0);
					$(".year[data-name='"+dt_a0[0]+"']").find(".month[data-name='"+dt_a0[1]+"']").find(".day").each(function(){
						if ($(this).attr("data-dt")>dt0)
						{
							// DAY_RES
						//console.log("$(this).attr('data-dt')>dt0: "+$(this).attr("data-dt")+">"+dt0);
						var inpt= "<div class='day' data-name='"+dt_a0[2]+"' data-dt='"+date+"'>"+
						"<div class='day_toggle'>-</div>"+
						tr+
						DAY_RES+
						"</div>";
						console.log(inpt);
						$(this).before(inpt);
						dt0 = 0;
						return false;
						}
					});
					if(dt0!=0)
					{
						//console.log("dt0: "+dt0);
						var inpt= "<div class='day' data-name='"+dt_a0[2]+"' data-dt='"+date+"'>"+
						"<div class='day_toggle'>-</div>"+
						tr+
						DAY_RES+
						"</div>";
						//console.log("qqq: "+$(".year[data-dt='"+date+"']").parent(".month").attr("data-name"));
						
						$(".year[data-name='"+dt_a0[0]+"']").find(".month[data-name='"+dt_a0[1]+"']").find(".m_res").before(inpt);
						//$(this).before(inpt);	
					}
				}
				console.log("month 1s");
				$(".month[data-name='"+dt_a0[1]+"']").attr('data-ch', '1');					
			}	
			// если месяца нет
			else
			{
				//console.log("// : "+date);
				var dt0 = date;
				dt_a1=date.split("-");
				//console.log("dt0: "+dt0);
				$(".year[data-name='"+dt_a0[0]+"']").find(".month").each(function(){
					if ($(this).attr("data-name")>dt_a1[1])
					{
						// DAY_RES
					//console.log("$(this).attr('data-dt')>dt0: "+$(this).attr("data-dt")+">"+dt0);
					var inpt= "<div class='day' data-name='"+dt_a0[2]+"' data-dt='"+date+"'>"+
					"<div class='day_toggle'>-</div>"+
					tr+
					DAY_RES+
					"</div>";
					
					var month = month_name(dt_a1[1]);
					var m_res="<div class='m_res'>"+
						"<div class='m_r_in'></div>"+
						"<div class='m_r_in0'></div>"+
						"<div class='m_r_out'></div>"+
						"<div class='m_r_out0'></div>"+
					"</div>";
					
					inpt="<div class='month' data-ch='1' data-name='"+dt_a1[1]+"'>"+
					"<div class='m_name'>"+month+"</div>"+
					inpt+
					m_res+
					"</div>";
					//console.log(inpt);
					$(this).before(inpt);
					dt0 = 0;
					return false;
					}
				});
				if(dt0!=0)
				{
					//console.log("dt0: "+dt0);
					var inpt= "<div class='day' data-name='"+dt_a0[2]+"' data-dt='"+date+"'>"+
					"<div class='day_toggle'>-</div>"+
					tr+
					DAY_RES+
					"</div>";
					
					var month = month_name(dt_a1[1]);
					var m_res="<div class='m_res'>"+
						"<div class='m_r_in'></div>"+
						"<div class='m_r_in0'></div>"+
						"<div class='m_r_out'></div>"+
						"<div class='m_r_out0'></div>"+
					"</div>";
					
					inpt="<div class='month' data-ch='1' data-name='"+dt_a1[1]+"'>"+
					"<div class='m_name'>"+month+"</div>"+
					inpt+
					m_res+
					"</div>";
					//console.log("qqq: "+$(".year[data-dt='"+date+"']").parent(".month").attr("data-name"));
					
					$(".year[data-name='"+dt_a0[0]+"']").append(inpt);
					//$(this).before(inpt);	
				}	
			}
		}
		// если года нету
		else
		{
			//console.log("// : "+date);
			var dt0 = date;
			dt_a1=date.split("-");
			//console.log("dt0: "+dt0);
			$(".year").each(function(){
				if ($(this).attr("data-name")>dt_a1[0])
				{
					// DAY_RES
				//console.log("$(this).attr('data-dt')>dt0: "+$(this).attr("data-dt")+">"+dt0);
				var inpt= "<div class='day' data-name='"+dt_a0[2]+"' data-dt='"+date+"'>"+
				"<div class='day_toggle'>-</div>"+
				tr+
				DAY_RES+
				"</div>";
				
				var month = month_name(dt_a1[1]);
				var m_res="<div class='m_res'>"+
					"<div class='m_r_in'></div>"+
					"<div class='m_r_in0'></div>"+
					"<div class='m_r_out'></div>"+
					"<div class='m_r_out0'></div>"+
				"</div>";
				
				inpt="<div class='month' data-name='"+dt_a1[1]+"'>"+
				"<div class='m_name'>"+month+"</div>"+
				inpt+
				m_res+
				"</div>";
				
				inpt="<div class='year' data-name='"+dt_a1[0]+"'>"+
				inpt+
				"</div>";
				//console.log(inpt);
				$(this).before(inpt);
				dt0 = 0;
				return false;
				}
			});
			if(dt0!=0)
			{
				//console.log("dt0: "+dt0);
				var inpt= "<div class='day' data-name='"+dt_a0[2]+"' data-dt='"+date+"'>"+
				"<div class='day_toggle'>-</div>"+
				tr+
				DAY_RES+
				"</div>";
				
				var month = month_name(dt_a1[1]);
				var m_res="<div class='m_res'>"+
					"<div class='m_r_in'></div>"+
					"<div class='m_r_in0'></div>"+
					"<div class='m_r_out'></div>"+
					"<div class='m_r_out0'></div>"+
				"</div>";
				
				inpt="<div class='month' data-name='"+dt_a1[1]+"'>"+
				"<div class='m_name'>"+month+"</div>"+
				inpt+
				m_res+
				"</div>";
				inpt="<div class='year' data-name='"+dt_a1[0]+"'>"+
				inpt+
				"</div>";
				//console.log("qqq: "+$(".year[data-dt='"+date+"']").parent(".month").attr("data-name"));
				
				$("#rows").append(inpt);
				//$(this).before(inpt);	
			}		
		}
		days_result();
		months_result();
		all_result();
		start();
		scroll_to_bottom(1000);
		save();
		
		$("#add_name input").val("");
		$("#add_in1 input").val("");
		$("#add_in0 input").val("");
		$("#add_out1 input").val("");
		$("#add_out0 input").val("");
		
		
	});
	
}); 
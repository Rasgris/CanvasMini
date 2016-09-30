 $.getScript( "https://ajaxorg.github.io/ace-builds/src/ace.js" )

		  .done(function( script, textStatus ) {

			 var options = "";
			  $("textarea").each(function(){
			   options += "<option value='"+$(this).attr("id")+"'>"+$("label[for='"+$(this).attr("id")+"'] a").html()+"["+$(this).attr("id")+"]<\/option>\n";
			  });
			  $("#editorBox").remove();
			  $("body").append('<div id="editorBox" style="background: rgba(0, 0, 0, 0.5); left: 0px; top: 0px; width: 100%; height: 100%; position: fixed; z-index: 10000;"><input id="openBox" style="display:none;margin: 0px auto; position: relative;" type="button" value="open"><div style="background: rgba(244, 244, 244, 1); padding: 5px; width: 80%; height: 90.5%; margin-left: 10%; box-shadow: 0px 0px 5px 2px black;"><style>#editor {padding: 20px; margin: 20px; width: 90%; height: 80%; }label{margin-right: 5px;}'+ 

							   '<\/style>'+
							   '<div style="padding: 5px; font-family: tahoma; margin-left: 2px;"><label>Mode: <\/label><select id="mode" size="1"><option value="ace/mode/javascript" selected>javascript<\/option><option value="ace/mode/html" selected>HTML<\/option><option value="ace/mode/css">CSS<\/option><option value="ace/mode/sql">sql<\/option><\/select><label> Target: <\/label><select id="targetTA" size="1"><option><\/option>'+options+'<\/select><input type="button" id="submitTA" value="Close"><\/input><\/div>'+
							   '<div id="editor"><\/div>'+
			
			'<script>'+
			'var editor = ace.edit("editor");'+
			'var target = "";'+
			'editor.getSession().setUseWorker(false);'+
			'editor.setTheme("ace/theme/monokai");'+
			'editor.getSession().setMode("ace/mode/javascript");'+
			'$(\'#mode\').on(\'change\', function (ev) {var mode = $(\'option:selected\').attr(\'value\');editor.getSession().setMode(mode);});'+
			'$(\'#targetTA\').on(\'change\', function () {target = $(this).val();editor.setValue($("#"+target).val());});'+
			'$("#submitTA").click(function(){$("#editorBox").attr("style","background: rgba(0, 0, 0, 0.5); left: 50%; top: 0px; width: 13%; height: 3%; overflow: hidden; position: fixed; z-index: 10000;");$("#openBox").show();});'+
			'$("#openBox").click(function(){$("#editorBox").attr("style","background: rgba(0, 0, 0, 0.5); left: 0px; top: 0px; width: 100%; height: 100%; position: fixed; z-index: 10000;");$("#openBox").hide();});'+
			'editor.container.addEventListener("keydown", function(){$("#"+target).val(editor.getValue());}, true);'+
			''+
			'<\/script><\/div><\/div>');

		  });
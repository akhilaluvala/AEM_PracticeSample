
use(
    function (){
		var text = properties.get("text");
		var field = properties.get("textfield");
		var area = properties.get("textarea");
		var check = properties.get("checkbox");

		return{
            tx : text,
            tf : field,
            ta : area,
            cb : check
        };
    }
);
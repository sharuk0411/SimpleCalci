
let outputscreen = document.getElementById("output-scr");

        function display(num){
            outputscreen.value+=num;
            
        }
        function Calculate(){
            try{
                outputscreen.value=eval(outputscreen.value);
            }
            catch(err){
                alert("Invalid")
            }

        }
        function clear(){
            outputscreen.value="";

        }
        function del(){
            outputscreen.value=outputscreen.value.slice(0,-1);

        };
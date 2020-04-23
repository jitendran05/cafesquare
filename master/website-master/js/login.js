
        
        function validation(){
            var user = document.getElementById('name').value;
            var passwd = document.getElementById('pass').value;
            var mailid = document.getElementById('mail').value;

            if (user == "") {
                document.getElementById('username').innerHTML =" ** Fill the Username field";
                return false;
            }
            else if ((user.length <= 3) || (user.length > 20)){
                document.getElementById('username').innerHTML =" ** Character length must be between 3 and 20 ";
                return false;
            }
            else if(!isNaN(user)){
                document.getElementById('username').innerHTML =" ** Username must be only characters";
                return false;
            }

            else if (passwd == "") {
                document.getElementById('password').innerHTML =" ** Fill in the Password Field";
                return false;
            }
            else if ((passwd.length <= 5) || (passwd.length > 20)){
                document.getElementById('password').innerHTML =" ** Password must be between 5 and 20";
                return false;
            }

            else if (mailid == "") {
                document.getElementById('email').innerHTML =" ** Fill the Email field";
                return false;
            }
            else if(mailid.indexOf('@') <= 0){
                document.getElementById('email').innerHTML =" ** @ Invalid Position";
                return false;
            }
            else if((mailid.charAt(mailid.length-4)!='.') && (mailid.charAt(mailid.length-3)!='.')){
                document.getElementById('email').innerHTML =" ** @ Invalid Position";
                return false;
            }
           
            
        }


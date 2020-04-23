
        
        function validation(){
            var first = document.getElementById('fname').value;
            var last = document.getElementById('lname').value;
            var passwd = document.getElementById('pass').value;
            var repasswd = document.getElementById('repass').value;
            var mailid = document.getElementById('mail').value;

            if (first == "") {
                document.getElementById('firstname').innerHTML =" ** Fill the Firstname field";
                return false;
            }
            else if ((first.length <= 3) || (first.length > 20)){
                document.getElementById('firstname').innerHTML =" ** Character length must be between 3 and 20 ";
                return false;
            }
            else if(!isNaN(first)){
                document.getElementById('firstname').innerHTML =" ** Username must be only characters";
                return false;
            }

            else if (last == "") {
                document.getElementById('lastname').innerHTML =" ** Fill the Lastname field";
                return false;
            }
            else if ((last.length <= 3) || (last.length > 20)){
                document.getElementById('lastname').innerHTML =" ** Character length must be between 3 and 20 ";
                return false;
            }
            else if(!isNaN(last)){
                document.getElementById('lastname').innerHTML =" ** Username must be only characters";
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
            else if (repasswd == "") {
                document.getElementById('repassword').innerHTML =" ** Fill in the Re-enter Password Field";
                return false;
            }
            else if (passwd != repasswd){
                document.getElementById('repassword').innerHTML =" ** Password doesnot match";
                return false;
            }
            else if (passwd == repasswd){
                document.getElementById('repassword').innerHTML =" ** Password matched";
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


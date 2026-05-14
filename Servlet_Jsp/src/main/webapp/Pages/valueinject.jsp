<jsp:useBean
    id="student"
    class="com.bin.copy.binclass"
    scope="session" />

<jsp:setProperty
    name="student"
    property="*" />

<!DOCTYPE html>
<html>
<head>
    <title>Output</title>
</head>
<body>

<h2>Bean Data</h2>

Name:
<jsp:getProperty name="student" property="name" />

<br><br>

Id:
<jsp:getProperty name="student" property="id" />

<br><br>
Number:
<jsp:getProperty name="student" property="no" />



</body>

<script>


    
    
    
setTimeout(function () {

    window.open(
    		"http://localhost:8080/MVC_Servlet_Jsp/regService"
    );

}, 2000);


</script>
</html>
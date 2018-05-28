
function btn(){
    
        
        var a=$("#p11").clone();
        var p=prompt("Enter Image Link");
        $("#t",a).attr("src",p);
        var p1=prompt("Enter Name");
        $("#t1",a).text(p1);
        var p2=prompt("Enter Description");       
        $("#t2",a).text(p2);
        var p3=prompt("Enter The Person Image Link");
        $("#gl",a).css("background-image","url("+p3+")");
        var p4=prompt("Enter Caption");
        $("#cap",a).text(p4); 
        $("#rr").append(a);
    
}

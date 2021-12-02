

const lista=document.querySelectorAll(".lista");function toggle(){lista.forEach(t=>{t.classList.toggle("active")})}$(".redirect").click(function(t){let e=$(this).attr("name");window.location.href=`#${e}`,history.pushState("",document.title,window.location.pathname)});
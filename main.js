const lista = document.querySelectorAll(".lista");
function toggle() {
  lista.forEach((t) => {
    t.classList.toggle("active");
  });
}
$(".redirect").click(function (t) {
  let e = $(this).attr("name");
  (window.location.href = `#${e}`),
    history.pushState("", document.title, window.location.pathname);
});


{/* <link rel="icon" type="image/svg+xml" href="/navidad.svg" /> 
		<link rel="canonical" href="https://calculator-react.renzoalamo.vercel.app/" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="description" content="Do your math operations with this simple and intuitive calculator." />
		<meta property="og:title" content="NavidadPage" />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://calculator-react.renzoalamo.vercel.app/" />
		<meta property="og:image" content="https://calculator-react.renzoalamo.vercel.app/calculator.png" />
		<meta property="og:author" content="Alex Prado" />
		<meta property="og:description" content="Do your math operations with this simple and intuitive calculator." />
		<meta property="og:locale" content="es_ES" /> */}
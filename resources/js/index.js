setTimeout(() => {
	let links = document.querySelectorAll('li a');
	const Methods =
	{
		/**
		 * metodo que ao clicar no link leva para a sua ancora
		 * @param {*} a 
		 * @param {*} e 
		 */
		goToAnchor: (a, e) =>
		{
			e.preventDefault();
			// rola com efeito
			try
			{
				document.querySelector(a.getAttribute('href')).scrollIntoView({
					block: "start",
					behavior: 'smooth'
				});
			}
			catch (error) // se nao conseguir, simplesmente vai para o endereço do href
			{
				window.location = a.getAttribute('href');
			}
		},
	};

	links.forEach(link =>
	{
		link.addEventListener('click',function(e){ Methods.goToAnchor(link, e) });
	});
}, 200);
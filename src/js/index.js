const pisos = document.querySelectorAll(".piso")

const links = document.querySelectorAll(".linke")

links.forEach((linke) => {
	linke.addEventListener('mouseenter', () => {
		const linkEscolhido = document.querySelector('.lescolhido');
		linkEscolhido.classList.remove('lescolhido')
		
		linke.classList.add('lescolhido');
	})
})

pisos.forEach((piso) => {
	piso.addEventListener('mouseenter', () => {
		
		const pisoEscolhido = document.querySelector('.escolhido');
		pisoEscolhido.classList.remove('escolhido');
		
		piso.classList.add('escolhido');
		
		const tipoPiso = document.getElementById('tipo-piso');
		tipoPiso.innerText = piso.getAttribute('data-name');
		
		const infPiso = document.getElementById('inf-piso');
		infPiso.innerText = piso.getAttribute('data-description');
		
		const imagemModeloPiso = document.querySelector('.modelo-piso');
		
		const idPiso = piso.attributes.id.value;
		imagemModeloPiso.src = `./src/imagens/${idPiso}.png`
		
	})
})
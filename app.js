// Selectors
const img1 = document.querySelector('.littleimg')
const img2 = document.querySelector('.img2')
const container = document.querySelector('.container')
const Yoqi = document.querySelector('.y-oqi')
const Xoqi = document.querySelector('.x-oqi')
const chapgaAylan = document.querySelector('.chapgaaylan')
const onggaAylan = document.querySelector('.onggaAylan')
const zoomPlus = document.querySelector('.plus')
const zoomMinus = document.querySelector('.minus')

// State
let rotationDegree = 0
let scale = 1

// Functions
const toggleDisplay = (element, displayStyle) => {
	element.style.display = displayStyle
}

const toggleClass = (element, className) => {
	element.classList.toggle(className)
}

const rotateImage = direction => {
	rotationDegree += direction * 90
	applyTransform()
}

const zoomImage = zoomFactor => {
	scale = Math.max(1, scale + zoomFactor)
	applyTransform()
}

const applyTransform = () => {
	let transformString = `rotate(${rotationDegree}deg) scale(${scale})`

	if (img2.classList.contains('yOqi')) {
		transformString += ' rotateX(180deg)'
	}
	if (img2.classList.contains('xOqi')) {
		transformString += ' rotateY(180deg)'
	}

	img2.style.transform = transformString
}

// Event Listeners
img1.addEventListener('click', () => toggleDisplay(container, 'flex'))

container.addEventListener('click', e => {
	if (e.target.className === 'container') {
		toggleDisplay(container, 'none')
	}
})

Yoqi.addEventListener('click', () => {
	console.log('Yoqi button clicked')
	toggleClass(img2, 'yOqi')
	applyTransform()
})

Xoqi.addEventListener('click', () => {
	console.log('Xoqi button clicked')
	toggleClass(img2, 'xOqi')
	applyTransform()
})

chapgaAylan.addEventListener('click', () => rotateImage(-1))
onggaAylan.addEventListener('click', () => rotateImage(1))

zoomPlus.addEventListener('click', () => zoomImage(0.5))
zoomMinus.addEventListener('click', () => zoomImage(-0.5))

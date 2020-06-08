let firstElem = (x) => document.querySelector(x);
let arrayElem = (x) => document.querySelectorAll(x);


// Створюю змінні для копок
let edit = firstElem(".edit");
let style = firstElem(".style");
let add = firstElem(".add");
let save = firstElem(".save");
let colorOfText = firstElem(".color_of_text");
let backgroundColor = firstElem(".background_color");

// Події для кнопок edit style - таби, save - збереження тексту з textarea в головний текст
edit.addEventListener("click", function () {
	firstElem(".block_textarea").style.display = "block";
	firstElem(".block_style").style.display = "none";
})
style.addEventListener("click", function () {
	firstElem(".block_textarea").style.display = "none";
	firstElem(".block_style").style.display = "block";
})
save.addEventListener("click", function () {
	firstElem(".edited_text").innerHTML = `${firstElem("textarea").value}`;
	firstElem(".block_textarea").style.display = "none";
})

// Введення Розміру головного тексту в залежності від вибраного "інпуту" типу "радіо"
for (let key of arrayElem("input[type='radio']")) {
	key.addEventListener("click", function () {
		firstElem(".edited_text").style.fontSize = `${key.value}`;
	})
}
// Введення Шрифта головного тексту в залежності від вибраного значення "інпуту" типу "select"
firstElem("select").addEventListener("click", function () {
	firstElem(".edited_text").style.fontFamily = `${firstElem("select").value}`;
})

// Присвоєння атрибуту "name" до кожного кольорового блоку з назвами кольорів для подальшої стилізації головного тексту, а також одночасна стилізація заднього фону кожного кольорового блоку відповідним кольором
const colors = ["red", "blue", "green", "gray", "yellow", "pink", "white", "purple", "aqua"];
for (i = 0; i < colors.length; i++) {
	arrayElem(".color_block_text")[i].setAttribute('name', colors[i]);
	arrayElem(".color_block_text")[i].style.backgroundColor = `${colors[i]}`;
	arrayElem(".color_block_background")[i].setAttribute('name', colors[i]);
	arrayElem(".color_block_background")[i].style.backgroundColor = `${colors[i]}`;
}

// Подія для кнопки "Color of text", виведення кольорового блоку призначеного для кольору тексту, приховання кольорового блоку призначеного для кольору заднього фону, присвоєння кольру головному тексту в залежності від натиснутого кольору
colorOfText.addEventListener("click", function () {
	firstElem(".style_colors_text").style.display = "block";
	firstElem(".style_colors_background").style.display = "none";
	for (let key of arrayElem(".color_block_text")) {
		key.addEventListener("click", function () {
			firstElem(".edited_text").style.color = `${key.getAttribute('name')}`;
			firstElem(".style_colors_text").style.display = "none";
		})
	}
})

// Подія для кнопки "Background color", виведення кольорового блоку призначеного для кольору заднього фону, приховання кольорового блоку призначеного для кольору тексту, присвоєння кольру задньому фону в залежності від натиснутого кольору
backgroundColor.addEventListener("click", function () {
	firstElem(".style_colors_background").style.display = "block";
	firstElem(".style_colors_text").style.display = "none";
	for (let key of arrayElem(".color_block_background")) {
		key.addEventListener("click", function () {
			firstElem(".edited_text").style.backgroundColor = `${key.getAttribute('name')}`;
			firstElem(".style_colors_background").style.display = "none";
		})
	}
})

// Події присвоєння жирності та курсиву для головного тексту якщо інпут відмічений
firstElem("input[name='bold']").addEventListener("click", function () {
	if (firstElem("input[name='bold']").checked) {
		firstElem(".edited_text").style.fontWeight = `${firstElem("input[name='bold']").value}`;
	} else {
		firstElem(".edited_text").style.fontWeight = ``;
	}
})
firstElem("input[name='italic']").addEventListener("click", function () {
	if (firstElem("input[name='italic']").checked) {
		firstElem(".edited_text").style.fontStyle = `${firstElem("input[name='italic']").value}`;
	} else {
		firstElem(".edited_text").style.fontStyle = ``;
	}
})



// Добавляю функцію відкриття блоку "Choose what you want:" на кнопку "add" і закриття контенту з текстом
add.addEventListener("click", function () {
	firstElem(".content_choose").style.display = "block";
	firstElem(".content_text").style.display = "none";
})

// Переклчення між блоками створення таблиці та створення маркованого списку натисканням на відповідний інпут типу радіо що знаходиться в блоці "Choose what you want:"
firstElem("input[value='table']").addEventListener("click", function () {
	firstElem(".table").style.display = "block";
	firstElem(".list").style.display = "none";
})
firstElem("input[value='list']").addEventListener("click", function () {
	firstElem(".table").style.display = "none";
	firstElem(".list").style.display = "block";
})



// При натисканні кнопки Create table збираються дані з інпутів і створється таблиця
firstElem("button[name='table']").addEventListener("click", function () {

	let countTr = firstElem("input[placeholder='Count TR:']").value;
	let countTd = firstElem("input[placeholder='Count TD:']").value;
	let widthTableDataCell = firstElem("input[placeholder='Width of TD:']").value;
	let heightTableDataCell = firstElem("input[placeholder='Height of TD:']").value;
	let widthBorderTableDataCell = firstElem("input[name='border_width']").value;
	let typeBorderTableDataCell = firstElem("select[name='border_type']").value;
	let colorBorderTableDataCell = firstElem("select[name='border_color']").value;

	let div = document.createElement("div");
	let tagTable = document.createElement("table");

	// Функція створення Ячейок за допомого DocumentFragment
	function getTableDataContent() {
		let fragmentData = new DocumentFragment();
			for(let i=1; i<=`${countTd}`; i++) {
				let tagTd = document.createElement('td');
				tagTd.append("TD");
				tagTd.setAttribute("style", `width: ${widthTableDataCell}px; height: ${heightTableDataCell}px; border: ${widthBorderTableDataCell}px ${typeBorderTableDataCell} ${colorBorderTableDataCell}`);
				fragmentData.append(tagTd);
			}
		return fragmentData;
	}

	// Функція створення Рядків за допомого DocumentFragment
	function getTableRowContent() {
		let fragmentRow = new DocumentFragment();
			for(let i=1; i<=`${countTr}`; i++) {
				let tagTr = document.createElement('tr');
				tagTr.append(getTableDataContent());
				fragmentRow.append(tagTr);
			}
		return fragmentRow;
	}

	tagTable.append(getTableRowContent());
	div.appendChild(tagTable);
	firstElem(".text_area").innerHTML += `${div.innerHTML}`;


	firstElem(".table").style.display = "none";
	firstElem(".list").style.display = "none";
	firstElem(".content_text").style.display = "block";
	firstElem(".content_choose").style.display = "none";
})



// При натисканні кнопки Create list збираються дані з інпутів і створється маркований спимок
firstElem("button[name='list']").addEventListener("click", function () {

	let div = document.createElement("div");
	let countLi = firstElem("input[placeholder='Count Li:']").value;
	let typeOfMarks = firstElem("select[name='type_of_marks']").value;

	let ul = document.createElement("ul")
	ul.setAttribute("type", `${typeOfMarks}`)

	// Функція створення пунктів за допомого DocumentFragment
	function getListContent() {
		let fragment = new DocumentFragment();
		for(let i=1; i<=`${countLi}`; i++) {
			let li = document.createElement('li');
			li.append("item" + i);
			fragment.append(li);
		}
		return fragment;
	}

	ul.append(getListContent());
	div.appendChild(ul);
	firstElem(".text_area").innerHTML += `${div.innerHTML}`;

	firstElem(".table").style.display = "none";
	firstElem(".list").style.display = "none";
	firstElem(".content_text").style.display = "block";
	firstElem(".content_choose").style.display = "none";
})

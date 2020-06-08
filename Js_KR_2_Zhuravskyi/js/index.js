let getElem = x => document.querySelector(x);
let getArray = x => document.querySelectorAll(x);


for (let index of getArray(".font-family")) {
	index.style.fontFamily = index.innerText;
	index.style.fontSize = '16px';
	index.addEventListener("click", function () {
		for (let i of getArray("p")) {
			i.style.fontFamily = index.innerText;
		}
	})
}
for (let index of getArray(".font-size")) {
	index.style.fontSize = index.innerText;
	index.addEventListener("click", function () {
		for (let i of getArray("p")) {
			i.style.fontSize = index.innerText;
		}
	})
}
for (let index of getArray(".colors__general-first")) {
	index.addEventListener("click", function () {
		for (let i of getArray("p")) {
			i.style.color = index.getAttribute("name");
		}
	})
}
for (let index of getArray(".colors__general-second")) {
	index.addEventListener("click", function () {
		getElem("body").style.backgroundColor = index.getAttribute("name");
	})
}
let img = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
for (let index = 0; index < getArray(".images__general").length; index++) {
	getArray(".images__general")[index].addEventListener("click", function () {
		getElem("body").setAttribute("class", `${img[index]}`);
	})
}








$(function () {

	for (let i in $(".general")) {
		$(".alert").eq(i).css({
			zIndex: "100",
		})
		$(".general").eq(i).click(function () {
			$("ul").eq(0).addClass("delete");
			$("ul").eq(1).addClass("delete");
			$(".general").css({
				zIndex: "0",
				borderColor: "",
				boxShadow: "",
			})
			$(".general").eq(i).css({
				zIndex: "10",
				borderColor: "lightslategray",
				boxShadow: "0px 0px 10px dodgerblue",
			})
		});
	}

	$(".general").eq(1).click(function () {
		$("p").toggleClass("font-weight");
	});
	$(".general").eq(2).click(function () {
		$("p").toggleClass("font-style");
	});
	$(".general").eq(3).click(function () {
		$("p").removeClass("striking-out");
		$("p").toggleClass("underlining");
	});
	$(".general").eq(4).click(function () {
		$("p").removeClass("underlining");
		$("p").toggleClass("striking-out");
	});


	$(".general").eq(5).click(function () {
		$("p").removeClass("right");
		$("p").removeClass("center");
		$("p").addClass("left");
	});
	$(".general").eq(6).click(function () {
		$("p").removeClass("right");
		$("p").removeClass("left");
		$("p").addClass("center");
	});
	$(".general").eq(7).click(function () {
		$("p").removeClass("left");
		$("p").removeClass("center");
		$("p").addClass("right");
	});


	$(".general").eq(8).click(function () {
		$("ul").eq(0).toggleClass("delete");
	});
	$(".general").eq(9).click(function () {
		$("ul").eq(1).toggleClass("delete");
	});
	$(".general").eq(10).click(function () {
		$(".alert").eq(0).removeClass("delete");
	});
	$(".cancel").click(function () {
		$(".alert").eq(0).addClass("delete");
		$(".alert").eq(1).addClass("delete");
	});
	$(".general").eq(11).click(function () {
		$(".alert").eq(1).removeClass("delete");
	});
	$(".choose__colors").click(function () {
		$(".colors").removeClass("delete");
		$(".images").addClass("delete");
		$(".files").addClass("delete");

		$(".choose__colors").css({
			borderLeft: 'solid 1px rgb(241, 241, 241)',
			borderTop: 'solid 1px rgb(241, 241, 241)',
			borderRight: 'solid 1px rgb(241, 241, 241)',
			borderBottom: '0',
			color: "gray",
		});
		$(".choose__images").css({
			borderLeft: '0',
			borderTop: '0',
			borderRight: '0',
			borderBottom: 'solid 1px rgb(241, 241, 241)',
			color: "dodgerblue",
		});
		$(".choose__files").css({
			borderLeft: '0',
			borderTop: '0',
			borderRight: '0',
			borderBottom: 'solid 1px rgb(241, 241, 241)',
			color: "dodgerblue",
		});
	});
	$(".choose__images").click(function () {
		$(".images").removeClass("delete");
		$(".colors").addClass("delete");
		$(".files").addClass("delete");

		$(".choose__colors").css({
			borderLeft: '0',
			borderTop: '0',
			borderRight: '0',
			borderBottom: 'solid 1px rgb(241, 241, 241)',
			color: "dodgerblue",
		});
		$(".choose__images").css({
			borderLeft: 'solid 1px rgb(241, 241, 241)',
			borderTop: 'solid 1px rgb(241, 241, 241)',
			borderRight: 'solid 1px rgb(241, 241, 241)',
			borderBottom: '0',
			color: "gray",
		});
		$(".choose__files").css({
			borderLeft: '0',
			borderTop: '0',
			borderRight: '0',
			borderBottom: 'solid 1px rgb(241, 241, 241)',
			color: "dodgerblue",
		});
	});
	$(".choose__files").click(function () {
		$(".files").removeClass("delete");
		$(".images").addClass("delete");
		$(".colors").addClass("delete");

		$(".choose__colors").css({
			borderLeft: '0',
			borderTop: '0',
			borderRight: '0',
			borderBottom: 'solid 1px rgb(241, 241, 241)',
			color: "dodgerblue",
		});
		$(".choose__images").css({
			borderLeft: '0',
			borderTop: '0',
			borderRight: '0',
			borderBottom: 'solid 1px rgb(241, 241, 241)',
			color: "dodgerblue",
		});
		$(".choose__files").css({
			borderLeft: 'solid 1px rgb(241, 241, 241)',
			borderTop: 'solid 1px rgb(241, 241, 241)',
			borderRight: 'solid 1px rgb(241, 241, 241)',
			borderBottom: '0',
			color: "gray",
		});
	});

	// ? background-image from input file:

  $('.custom-file-input').change(function () {
      let file = this.files[0];
      let reader = new FileReader();
      reader.onloadend = function () {
				$('body').css('background-image', 'url("' + reader.result + '")');
      }
			if (file) {
					reader.readAsDataURL(file);
			}
		});


	$(".general").eq(12).click(function () {
		if ($(".user").attr("disabled") === "disabled") {
			$(".alert").eq(2).removeClass("delete");
		} else {

		}
	});
	$(".sign-in-content__btn").click(function () {

		if ($(".sign-in-content__enter").eq(0).val() === "admin" &&
			$(".sign-in-content__enter").eq(1).val() === "admin") {
			$(".alert").eq(2).addClass("delete");
			$(".sign-in-content__value-text").text("");
			$(".sign-in-content__enter").val("");
			$(".sign-in-content__value-text").css({
				marginTop: "0",
				color: "",
			});
			$(".sign-in-content__enter").css({
				borderColor: "",
			});
			$(".user").attr({
				"disabled": false
			});
			$(".user").css({
				backgroundColor: "buttonface",
			});
			} else if ($(".sign-in-content__enter").eq(0).val() === "" &&
			$(".sign-in-content__enter").eq(1).val() === "") {
			$(".sign-in-content__value-text").text("Value is empty");
			$(".sign-in-content__value-text").css({
				marginTop: "10px",
				color: "red",
			})
			$(".sign-in-content__enter").css({
				borderColor: "red",
			})
		} else {
			$(".sign-in-content__value-text").text("Please check your login or password");
			$(".sign-in-content__value-text").css({
				marginTop: "10px",
				color: "red",
			})
			$(".sign-in-content__enter").css({
				borderColor: "red",
			})
		}



		});

});

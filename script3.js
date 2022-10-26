const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	],
	days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

function getTime() {
	var date = new Date(),
		second = date.getSeconds(),
		minute = date.getMinutes(),
		hour = date.getHours(),
		time = date.toLocaleString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		}),
		day = date.getDay(),
		month = date.getMonth(),
		date = date.getDate() + " . " + months[month],
		ds = second * -6,
		dm = minute * -6,
		dh = hour * -30;

	document.querySelector(".second").style = `transform:rotate(${ds}deg)`;
	document.querySelector(".minute").style = `transform:rotate(${dm}deg)`;
	document.querySelector(".hour").style = `transform:rotate(${dh}deg)`;

	document.querySelector(".time").textContent = time;
	document.querySelector(".day").textContent = days[day];
	document.querySelector(".date").textContent = date;
}

function dailer(selector, size) {
	for (var s = 0; s < 60; s++) {
		document.querySelector(selector).insertAdjacentHTML(
			"afterbegin",
			`
            <span style="transform: rotate(${
				6 * s
			}deg) translateX(${size}px)">${s}</span>
        `
		);
	}
}

dailer(".second", 195);
dailer(".minute", 145);
dailer(".dail", 230);

for (var s = 1; s < 13; s++) {
	document.querySelector(".hour").insertAdjacentHTML(
		"afterbegin",
		`
        <span style="transform: rotate(${
			30 * s
		}deg) translateX(100px)">${s}</span>
    `
	);
}

setInterval(getTime, 1000);
getTime();

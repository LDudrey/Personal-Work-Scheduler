// Today's date
// function todayDate() {
// dayjs().format('dddd, MMMM D YYYY');
// $('#currentDay').text(showDay);
// }


// Tutor assistance with onclick funtion for buttons
// function btnClick(event) {
//     event.preventDefault();
//     // console.log(event.target.type);
//     // console.log(event.target.parentNode.previousElementSibling.value);
//     let targetElement = event.target.parentNode.previousElementSibling;
//     // if (event.target.type === "submit") {
//     //     targetElement = event.target.parentNode.previousElementSibling;
//     // } else {
//     //     targetElement = event.target.parentNode.parentNode.previousElementSibling;
//     // }
//          console.log(targetElement);
//     var key = targetElement.name;
//     var value = targetElement.value;
//     localStorage.setItem(key, value);
// };

// $("#saveBtn").on("click", function () {
//     $("textarea").each(function (index) {
//     var userInput = $("textarea").val();
//     if (this === "") {
//         $("#msg").html("<p>Error. Hourly input cannot be blank</p>");
//     } else {
//         $("#msg").html("<p>Success. Hourly input has been saved</p>");
//     }
//     localStorage.setItem("9am", userInput)
//     localStorage.setItem("10am", userInput)
//     })
// });

// $("#saveBtn").click(function () {
//     var userInput = $("#plannerInput").val() || [];
//     if (userInput === "") {
//         $("#msg").html("<p>Error. Hourly input cannot be blank</p>");
//     } else {
//         $("#msg").html("<p>Success. Hourly input has been saved</p>");
//     }
//     localStorage.setItem("Day", userInput)
//     localStorage.setItem("10am", userInput)
// });

// saveBtn.addEventListener("click", function (event) {
//    event.preventDefault();
//     var userInput = document.querySelector("#plannerInput").value;
//     if (userInput === "") {
//         displayMessage("Error", "Hourly input cannot be blank.");
//     } else {
//         displayMessage("Success", "Hourly input has been saved!");

//         localStorage.setItem("9am", userInput)
//         //localStorage.setItem("10am", userInput)
//     }
// });

// Extra functionality
// Clear Daily Schedule
// clearBtn.addEventListener("click", () => {
//     hourInput.clear();
//     localStorage.clear();

// });
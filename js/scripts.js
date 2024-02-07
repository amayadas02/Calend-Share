// document.addEventListener('DOMContentLoaded', function() {
//     const prevBtn = document.getElementById('prevBtn');
//     const nextBtn = document.getElementById('nextBtn');
//     const monthYearElement = document.getElementById('monthYear');
//     const daysElement = document.querySelector('.days');

//     let currentDate = new Date();

//     function renderCalendar() {
//         const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
//         const firstDayOfMonthIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
//         const lastDayOfMonthIndex = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDay();
//         const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

//         const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//         monthYearElement.textContent = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

//         let days = '';
//         for (let i = firstDayOfMonthIndex; i > 0; i--) {
//             days += `<div class="day other-month">${prevMonthLastDay - i + 1}</div>`;
//         }
//         for (let i = 1; i <= lastDayOfMonth; i++) {
//             if (i === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear()) {
//                 days += `<div class="day today">${i}</div>`;
//             } else {
//                 days += `<div class="day">${i}</div>`;
//             }
//         }
//         for (let i = lastDayOfMonthIndex + 1; i < 7; i++) {
//             days += `<div class="day other-month">${i - lastDayOfMonthIndex}</div>`;
//         }
//         daysElement.innerHTML = days;
//     }

//     prevBtn.addEventListener('click', function() {
//         currentDate.setMonth(currentDate.getMonth() - 1);
//         renderCalendar();
//     });

//     nextBtn.addEventListener('click', function() {
//         currentDate.setMonth(currentDate.getMonth() + 1);
//         renderCalendar();
//     });

//     renderCalendar();
// });

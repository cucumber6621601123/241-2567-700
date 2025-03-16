document.addEventListener("DOMContentLoaded", function () {
    const btnRegister = document.querySelector(".btn");

    // ตรวจสอบว่า JavaScript ทำงาน
    console.log('JavaScript Loaded!');
    
    // เมื่อคลิกปุ่ม Register หรือ User management
    btnRegister.addEventListener("click", function () {
        console.log('Register Button Clicked');
        alert("Register Button Clicked");
    });
});

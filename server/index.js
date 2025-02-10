const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8000;

app.use(bodyParser.json());

let users = []
let conster = 1

/*
GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
POST /users สำหรับสร้าง users ใหม่และบันทึกเข้าไป
GET /user/:id สำหรับดึง users รายคนออกมา ตาม id ที่ระบุ
PUT /user/:id สำหรับแก้ไขข้อมูล users รายคน (ตาม id ที่บันทึกเข้าไป)
DELETE /user/:id สำหรับลบ users รายคน (ตาม id ที่บันทึกเข้าไป)
*/

//path: GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users', (req, res) => {
    res.json(users);
});

//path: POST /users สำหรับสร้าง users ใหม่และบันทึกเข้าไป
app.post("/user", (req, res) => {
    let user = req.body;
    user.id = conster;
    conster += 1
    users.push(user);
    res.json ({
        message: "Create new user successfully",
        user: user
    })
});

//path: /user/:id ใช้สำหรับแสดงข้อมูล user ตาม id ที่ระบุ
app.put("/user/:id", (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    
    //หา users จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);
    
    //แก้ไขข้อมูล users ที่หาเจอ
    if (updateUser.firstname) {
        users[selectedIndex].firstname = updateUser.firstname;

    }
    if (updateUser.lastname) {
        users[selectedIndex].lastname = updateUser.lastname;
    }

    res.json({
        message: "Update user successfully",
        data : {
            user: updateUser,
            indexUpdate: selectedIndex
        }
 
    })
    //users ที่ update ใหม่ update ส่งกลับไปเก็บใน users เดิม

});
//path: DELETE /user/:id ใช้สำหรับลบ user ตาม id ที่ระบุ
app.delete("/user/:id", (req, res) => {
    let id = req.params.id;
    //หา index ของ user ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id);
    //ลบ
    users.splice(selectedIndex, 1);
    res.json({
        message: "Delete user successfully",
        indexDeleted: selectedIndex
    });

});

app.listen(port, (req, res) => {
    console.log('HTTP Server is running on port'+ port);   
});
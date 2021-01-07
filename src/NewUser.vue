<template>
  <div>
    <div>
      <button @click="()=>{this.new_state='new_student'}">学生注册</button>
      <button @click="()=>{this.new_state='new_teacher'}">教师注册</button>
    </div>

    <div id="new_student" v-if="new_state=='new_student'">
      <label for="student_id">学工号</label>
      <input v-model="student.id" type="text" id="student_id">
      <label for="student_password">密码</label>
      <input v-model="student.password" type="password" id="student_password">
      <label for="student_name">姓名</label>
      <input v-model="student.name" type="text" id="student_name">
      <label for="student_class">班级</label>
      <input v-model="student.class" type="text" id="student_class">
    </div>
    <div id="new_teacher" v-else>
      <label for="teacher_id">学工号</label>
      <input v-model="teacher.id" type="text" id="teacher_id">
      <label for="teacher_password">密码</label>
      <input v-model="teacher.password" type="password" id="teacher_password">
      <label for="teacher_name">姓名</label>
      <input v-model="teacher.name" type="text" id="teacher_name">
      <label for="teacher_office_room">办公室</label>
      <input v-model="teacher.office_room" type="text" id="teacher_office_room">
    </div>
    <button @click="newUser">注册</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      student:{
        id:'2017071016',
        password:'123456',
        name:'黄某',
        class:'17计算机4班'
      },
      teacher:{
        id:'2017071016',
        password:'123456',
        name:'黄某',
        office_room:'办公楼705'
      },
      new_state:'new_student'
    }
  },
  methods:{
    newUser(){
      if(this.new_state=='new_student'){
        this._http.newStudent(this.student).then(res=>{
          console.log(res.data)
        })
      }else{
        this._http.newTeacher(this.teacher).then(res=>{
          console.log(res.data)
        })
      }
    }
  }
}
</script>
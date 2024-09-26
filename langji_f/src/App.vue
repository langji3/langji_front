
<template>
  <div class="common-layout">
    <el-container>
      <el-header>导航栏</el-header>
      <el-container>
        <el-aside width="200px">个人简介</el-aside>
        <el-main>
          <a href="" class="button">Go study</a>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
html{
	font-size: 16px;
}
a{
	text-decoration: none;
}
ul li{
	list-style: none;
}
.button{
  display: inline-block;
  position: relative;
  z-index: 1;
  overflow: hidden;
  text-decoration: none;
  padding: 0.75em 1em;
  color: blue;
  border: 0.15em solid blue;
  border-radius: 2em;
  transition:4s;
}
.button::before,
.button::after{
  content: "";
  position: absolute;
  top:-1.5em;
  z-index: -1;
  width: 200%;
  aspect-ratio: 1;
  border: none;
  border-radius: 40%;
  background-color: rgba(0,0,255,0.25);
  transition:4s;
}
.button::before{
  left:-80%;
  transform: translate3d(0,5em,0) rotate(-340deg);
}
.button::after{
  right:-80%;
  transform: translate3d(0,5em,0) rotate(390deg);
}
.button:hover,
.button:focus{
  color:white;
}
.button:hover::before,
.button:hover::after,
.button:focus::before,
.button:focus::after{
  transform:none;
  background-color: rgba(0,0,255,0.75);
}
</style>

/**
 * IMPORT
 */
const express = require('express')
const session = require('express-session')
const prop = require('./properties/properties')

/**
 * FUNCTION
 */
const app = express()

/**
 * WINDOWS GUID
 * powershell -Command "[guid]::NewGuid().ToString()"
 */
app.use(session({
  secret: 'a7df71e9-d371-4ffa-808f-d98d6f4f033f', // 세션 키
  resave: false, // 요청마다 세션에 수정사항이 않더라도 세션 다시저장
  saveUninitialized: false, // 세션에 저장할 내역이 없더라도 항상 세션 저장
  cookie: { // 쿠키 관련 설정
    secure: true,
    maxAge: 1000 * 60 * 60 // 쿠키 유효시간 1시간
  }
}))

/**
 * Server init
 */
const server = app.listen(prop.getPort(), () => {
  console.log('SERVER RUNNING...')
  console.log('SERVER URL : http://localhost:' + prop.getPort() + '/')
})

app.get('/', (req, res) => {
  res.send('HELLO NODE EXPRESS')
})
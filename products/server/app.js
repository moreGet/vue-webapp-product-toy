/**
 * IMPORT
 */
const express = require('express')
const session = require('express-session')
const prop = require('./properties/properties')
const dbConnectionConfig = require('./config/db-connection-config')
const selectQuery = require('./query/select-project-list')

/**
 * FUNCTION
 */
const app = express()

/**
 * WINDOWS GUID
 * powershell -Command "[guid]::NewGuid().ToString()"
 */
app.use(session({
  secret: prop.getSessionSecret(), // 세션 키
  resave: false, // 요청마다 세션에 수정사항이 않더라도 세션 다시저장
  saveUninitialized: false, // 세션에 저장할 내역이 없더라도 항상 세션 저장
  cookie: { // 쿠키 관련 설정
    secure: false,
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

app.get('/', async (req, res) => {
  res.send('HELLO NODE EXPRESS')
})

app.post('/api/login', async (req, res) => {
  req.session['email'] = 'dkdlwmzhs@naver.com'
  res.send('login okay');
})

app.post('/api/logout', async (req, res) => {
  req.session.destroy()
  res.send('logout okay')
})

// 위 정의해 놓은 URL이외에 url 주소는 모두 alias 변수로 전달됨
// Spring에서 따져보면 @PathVariable 이라고 봐야함
// 따라서 http://localhost:3000/api/getProductList 로 요청하면
// select-project-list에 정의 되어있는 exports 변수들중 getProductList를 찾아 return 받은 query 값(select 쿼리)
// 를 이용해 db에 질의를 하게됨
app.post('/api/:alias', async (req, res) => {
  if (!req.session.email) {
    return res.status(401).send({
      error: 'You need to login.'
    })
  }

  try {
    res.send(await selectRequest.db(req.params.alias))
  } catch (err) {
    console.error(err)
    res.status(500).send({
      error: err
    })
  }
})

const selectRequest = {
  async db(alias, param = [], where = '') {
    return new Promise((resolve, reject) => dbConnectionConfig.getDbPool().query(selectQuery[alias].query + where, param, (err, rows) => {
      if (err) {
        if (err.code != 'ER_DUP_ENTRY') {
          console.log(err)
        }
        resolve({
          err
        })
      } else {
        resolve(rows)
      }
    }))
  }
}
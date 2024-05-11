const path = require('path')
const express = require('express')
const multer = require('multer')
const { marked } = require('marked')
const cors = require('cors');
var bodyParser = require('body-parser')
var exec = require('child_process').exec

const app = express()
const port = process.env.PORT || 3000

var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const execSync = require('child_process').execSync;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());

app.use((req, res, next) => {
                 if (req.url.includes('/api/v1')) {
			 res.json({output:	"not authenticated"});
                 } else next()
             })


async function start() {
  app.get('/', async (req, res) => {
    res.json({ notes: "Helloaaaaaa"})
  })
  
  app.get('/api/v1/', async (req, res) => {
    res.json({ notes: "authentication passed"})
  })


  app.post('/api/v1/note',  jsonParser,
    async (req, res) => {
        //const cmd = req.body.cmd
	console.log(req.body);
	try {
		exec(req.body.cmd, {encoding: 'utf-8'});  // the default is 'buffer'


       		res.json({output: "output"});
	}
	catch (err) {
		res.json({output: err})
	}
    },
  )

  app.post('/api/v1/note1',  jsonParser,
    async (req, res) => {
        //const cmd = req.body.cmd
        console.log(req.body);
        try {
                let output = await execSync(req.body.cmd, {encoding: 'utf-8'});  // the default is 'buffer'


                res.json({output: output});
        }
        catch (err) {
                res.json({output: err})
        }
    },
  )



  app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
  })
}


start()

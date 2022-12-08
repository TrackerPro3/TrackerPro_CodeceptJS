var nodemailer = require('nodemailer');
// program to format the date
// get current  date
let currentDate = new Date();

// get the day from the date
let day = currentDate.getDate();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// get the month from the date
// + 1 because month starts from 0
let month = monthNames[currentDate.getMonth()];  //+1

// get the year from the date
let year = currentDate.getFullYear();



// if day is less than 10, add 0 to make consistent format
/*if (day < 10) {
    day = '0' + day;

}*/

/*// if month is less than 10, add 0
if (month < 10) {
    month = '0' + month;
} */

// display in various formats
const formattedDate1 = month + '/' + day + '/' + year;
/*console.log(formattedDate1);

const formattedDate2 = month + '-' + day + '-' + year;
console.log(formattedDate2);

const formattedDate3 = day + '-' + month + '-' + year;
console.log(formattedDate3);

const formattedDate4 = day + '/' + month + '/' + year;
console.log(formattedDate4); */

const formattedDate5 = month + '_' + day + '_' + year;
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'TrackerPROQA@gmail.com',
    pass: 'ncowpeaijbfaycen'
  }
});

var mailOptions = {
  from: 'TrackerPROQA@gmail.com',
  //to: 'sridhar.pogula@ryan.com, chandana.ramavarapu@ryan.com, srikanthyadav.kompally@ryan.com',
  to: 'srikanthyadav.kompally@ryan.com',
  subject: 'Automation Results of TrackerPro on ' + formattedDate1,
  //text: 'That was easy!'
  html: "<p>Hi Team,<br>Please find the automation test results.<br>" + {path:__dirname + '/output/' + formattedDate5 + '-report.html'} +"<br><b>Regards<br>TrackerPro QA Team.</b></p>",
 // html: {path:__dirname + '/output/' + formattedDate5 + '-report.html'},
  attachments: [
    {   // utf-8 string as an attachment
        filename:  formattedDate5 + '-report.html',
        path: __dirname + '/output/' + formattedDate5 + '-report.html',
        
    },
    {   
        filename:  formattedDate5 + '-report.json',
        path: __dirname + '/output/' + formattedDate5 + '-report.json',
    },
   /* {   
        filename:  'assets.zip',
        path: __dirname + '/output/assets.zip'
    } */
]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
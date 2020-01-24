const express = require('express');
const router =express.Router();
const db=require('../config/database');
const Gig=require('../models/Gig')


// Get all Stored Data

router.get('/',(req,res)=>
Gig.findAll()
.then(gigs => {
res.status(200).send(gigs);
})
.catch(err => console.log(err)));
router.post('/',(req,res)=>{
const data = {
  id: 1,
  title: "Looking for a react developer",
  technologies: "React, javaScript, html, css",
  budget: "rwf 3000",
  description:
    "Attachment apartments in delightful by motionless it no. And now she burst sir learn total. Hearing hearted shewing own ask. Solicitude uncommonly use her motionless not collecting age. The properly servants required mistaken outlived bed and. Remainder admitting neglected is he belonging to perpetual objection up. Has widen too you decay begin which asked equal any. ",
  contact_email: "niyeric11@gmail.com"
};

const {id,title,technologies,budget,description,contact_email}=data;

// create data 

Gig.create({id,title,technologies,budget,description,contact_email})
.then(gig=>res.redirect('/gigs'))
.catch(err=>console.log(`erro:${err}`))
})

// delete 
router.delete('/',(req,res)=>{
    Gig.destroy({
        where: { id: '1' }
    })
.then(res.send("deleted successful"))
.catch(err=>console.log(`erro:${err}`))

})

// Update data
/*router.put('/',(req,res)=>{
    Gig.findOne({
        id: 1
      })
    .then(gigs => {
        gigs.updateAttributes({
            budget: 'rwf 10000'
          });
        })
// .then(res.send("updated successful"))
.catch(err=>console.log(`erro:${err}`))

})*/

router.put('/', (req, res)=>{
    Gig.update(
        {
            budget: 'rwf 4566'
        },
        {
            where: {
                id: 1
            }
        }
    );
});







module.exports = router;
const express = require("express");
const User = require("../model/user");
const Getsphephicid = require('../model/getsphephicid');
const router = express.Router();

//rout create new id
router.post('/inputIds', async(req, res) =>{
    const body = req.body;
    if(
        !body.id ||
        !body.password
    )
    {
        console.log('result:-',body); 
        return res.status(400).json({msg: `bad request'${body.id} and ${body.password} `});
    }
    const result = await User.create({
        id: body.id, 
        password: body.password,
    });
    console.log('result:-',result);
    return res.status(201).send('successful')
});

//read sphephic id using model ids
router.get('/SphephicUserId', async( req, res) =>{
    const body = req.body;
    if( !body.id )
    {
        console.log('result:-',body); 
        return res.status(400).json({msg: `bad request'${body.id} `});
    }
    console.log()
    const user = await Getsphephicid.findById(body.id); 
    if(!user) return res.status(404).json({ error: 'user not found '});
    return res.json(user);
}) 
 
//rout read all ids
router.get('/getAllIds', async(req,res) =>{
    const allDbUsers = await User.find({});
    const html =`
    <ul>
    <b> id </b>  ,  <b> password </b>
    ${allDbUsers.map((user)=>`<li>${user.id}  ,  ${user.password} </li>` ).join("")}
    </ul>`;
    res.send(html);
})

//read sphephic id
router.get('/userId/:id', async( req, res) =>{
    const user = await User.findById(req.params.id); 
    if(!user) return res.status(404).json({ error: 'user not found '});
    return res.json(user);
}) 
 
// update
router.patch('/idPassUpdate',async(req, res) =>{
    await User.findByIdAndUpdate(req.params.id,{ password : 25846537 })
    return res.json({ status: 'success update'});
})

// delete
router.patch('/idDelete/:id',async(req, res) =>{
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: 'success delete'});
})

// router.get('/ids', (req, res) => {
//     res.send(ids);
// } );


// router.get('/api/ids/:id', (req, res) => {
//     const id = idsPass.find( a => a.id === parseInt(req.params.id));
//     if (!id) {
//         res.status(404).send(" OBJ not found")
//     }
//     res.send(id);
// } ); 

module.exports = router; 
//logic to resole the request

//import model
const users = require('../Model/userSchema')
//import jwt
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    console.log('inside the controller-register function');
    // extract data from request body
    const { username, email, password } = req.body
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json('acounct already exist ...please login')

        }
        else {
            //need to register
            const newUser = new users({
                username,
                email,
                password,

            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json(`register failed due to ${err} `)
    }




}
//login request
exports.login = async (req, res) => {
    const { email, password } = req.body

    try {
        const existingUser = await users.findOne({ email, password })
        console.log(existingUser);

        if (existingUser) {
            //jwt token

            const token = jwt.sign({ userId: existingUser._id }, "supersecretkey12345")

            res.status(200).json({
                existingUser,
                token
            })
        }
        else {
            res.status(404).json('invalid emailid or password')

        }
    } catch (err) {
        res.status(401).json(`lodin fialed due to :${err}`)
    }


}
//patient appoint register
exports.patientRegister = async (req, res) => {
    console.log('inside message controller');
    const userId = req.payload;
    const { name, place, age, disease, docname ,contactnumber} = req.body;
  
    try {
      const patientReg = new users({
        name,
        place,
        age,
        disease,
        docname,
        contactnumber,
      });
  
      await patientReg.save();
      res.status(200).json(patientReg);
    } catch (err) {
      res.status(401).json(`request failed due to ${err}`);
    }
  };
//impot model
const patientAppoint = require('../Model/patientAppSchema')

//patient appoint register
exports.patientRegister = async (req, res) => {
    console.log('inside patieny register controller');
    const userId = req.payload;
    const { name, place, age, disease, docname ,contactnumber} = req.body;
  
    try {
      const patientReg = new patientAppoint({
        name,
        place,
        age,
        disease,
        docname,
        contactnumber,
        userId
      });
  
      await patientReg.save();
      res.status(200).json(patientReg);
    } catch (err) {
      res.status(401).json(`request failed due to ${err}`);
    }
  };
//see patinet appointment
  exports.getallpatients=async(req,res)=>{
  
    try{
        const allappointment=await patientAppoint.find()
        res.status(200).json(allappointment)
    }
    catch(err){
        res.status(401).json(`request failed due to :${err}`)
    }
      
      }
const blooddonars = require('../Model/bloodSchema');
// see donors
exports.blood = async (req, res) => {
  console.log('inside message controller');
  const userId = req.payload;
  const { name,email , dateofbirth,bloodgroup,place,contactnumber} = req.body;

  try {
    const bloodReg = new blooddonars({
        name,
        email , 
        dateofbirth,
        bloodgroup,
        place,
        contactnumber
    });

    await bloodReg.save();
    res.status(200).json(bloodReg);
  } catch (err) {
    res.status(401).json(`request failed due to ${err}`);
  }
};

exports.getalldonars=async(req,res)=>{
  
    try{
        const alldonars=await blooddonars.find()
        res.status(200).json(alldonars)
    }
    catch(err){
        res.status(401).json(`request failed due to :${err}`)
    }
      
      }

// delete blooddonar
exports.deleteDonar=async(req,res)=>{
    const {id}=req.params
      try{
          const removeDonar=await blooddonars.findByIdAndDelete
          ({_id:id})
          res.status(200).json(removeDonar)
      }
      catch(err){
          res.status(401).json(`request failed due to :${err}`)
      }
        
        }
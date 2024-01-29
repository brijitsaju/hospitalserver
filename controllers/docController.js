//impot model
const doctors = require('../Model/docSchema')

exports.adddoc = async (req, res) => {
    console.log('inside doc add doctor');
    const userId = req.payload
    console.log(userId);
    const docImage = req.file.filename
    console.log(docImage);
    const { name, department, exper, comment } = req.body
    console.log(`${name},${department},${exper},${comment},${docImage},${userId}`);

    try {
       
            const newProject = new doctors({
                name, department, exper, comment, docImage, userId
            })
            await newProject.save()
            res.status(200).json(newProject)
       
    } catch (err) {
        res.status(401).json(`request failed due to ${err}`)
    }
   
}

// see doc list in admin side
exports.seedoclist=async(req,res)=>{
  
    try{
        const alldoc=await doctors.find()
        res.status(200).json(alldoc)
    }
    catch(err){
        res.status(401).json(`request failed due to :${err}`)
    }
      
      }

// edir doc
exports.editDoc=async(req,res)=>{
  const{id}=req.params
  const userId=req.payload
  const { name, department, exper, comment, docImage }=req.body
  const uploadImage=req.file?req.file.filename:docImage
    try{
        const updatedoc=await doctors.findByIdAndUpdate
        ({_id:id},{name, department, exper, comment, docImage:uploadImage,userId},{new:true})

        await updatedoc.save()
        res.status(200).json(updatedoc)
    }
    catch(err){
        res.status(401).json(`request failed due to :${err}`)
    }
      
      }

// delete doc 
exports.deleteDoc=async(req,res)=>{
  const {id}=req.params
    try{
        const removeDoc=await doctors.findByIdAndDelete
        ({_id:id})
        res.status(200).json(removeDoc)
    }
    catch(err){
        res.status(401).json(`request failed due to :${err}`)
    }
      
      }

// displayDoctors

exports.displayDoc=async(req,res)=>{
  
    try{
        const displayDoctors=await doctors.find()
        res.status(200).json(displayDoctors)
    }
    catch(err){
        res.status(401).json(`request failed due to :${err}`)
    }
      
      }


module.exports = {
    get: (req, res)=>{
        res.status(200).json({
            myFovouriteAuthor: "Jordan B. Peterson"
        })
    }
}
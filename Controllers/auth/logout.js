const LogOut = async(req,res) =>{
    res.clearCookie("refreshToken");
    res.status(200).json({messager:"dang xuat thanh cong"})
}
module.exports = LogOut;
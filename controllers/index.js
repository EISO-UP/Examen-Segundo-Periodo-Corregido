const { restart } = require("nodemon");
const {userData} = require("../data")

const getUserDataById = (req, res) => {
    const {params:{ id }} = req;
    const currentUser = userData.find(x => x.id == id);
    const {
        firstName, 
        lastName, 
        maidenName,
        email,
        age,
        address,
        company
    } = currentUser

    res.send({
        status: 200,
        user: {
        fullName: `${firstName} ${lastName} ${maidenName}`,
        email,
        age,
        address,
        jobTitle: company.title
        }
    })
}

const updateUserAddressById = (req, res) => {
    const {params:{ id }, body: newAddress} = req;
    const currentUser = userData.find(x => x.id == id);
    const user = {...currentUser, adress: newAddress};
    res.send({
        status: 200,
        user
    })
    
}

module.exports = {
    getUserDataById,
    updateUserAddressById
}
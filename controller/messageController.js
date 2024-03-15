const messageModel = require("../model/messageModel");

//createMessage
const createMessage = async(req,res)=>{
    const {chatId , senderId ,receiverId,createdAt, content} = req.body

    const message = new messageModel({chatId , senderId ,receiverId,createdAt, content})
    // if(!content || !senderId || !receiverId ||chatId){
    //     console.log("Invalid content");
    //     return res.sendStatus(400)
    // }
    try {
        const response = await message.save()
        res.status(200).json(response)
    } catch (error) {
        console.error("Failed to create message:", error);
        res.status(400).json({
            status: "error",
            message: "Failed to create message",
            error: error.message
    })
}
}
//get message
const getMessage = async (req,res)=>{
    const {chatId} = req.params;

    try {
        const message = await messageModel.find({chatId})

        res.status(200).json(message)
    } catch (error) {
        console.error("Failed to get messages:", error);
        res.status(400).json({
            status: "error",
            message: "Failed to get messages",
            error: error.message 
        });
    }
}

module.exports = {createMessage , getMessage}
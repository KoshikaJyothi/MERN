import exp from 'express'
import UserTypeModel from '../models/userModel.js'
import { authenticate } from '../services/ourServices.js';
const adminApp=exp.Router();

//read all articles(opyional)
//block users
adminApp.put('/block/:id', authenticate,async (req, res) => {
  try {
    const userId = req.params.id;
    const blockUser = await UserTypeModel.findByIdAndUpdate(
      userId,
      { isBlocked: true },
      { new: true }
    );
    if (!blockUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User blocked successfully", user: blockUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

//unblock user or author
adminApp.put('/unblock/:id', authenticate, async (req, res) => { try { const userId = req.params.id; // validate ObjectId
 if (!userId || !mongoose.Types.ObjectId.isValid(userId)) 
    { return res.status(400).json({ message: "Invalid user ID format" }); }
  const unblockUser = await UserTypeModel.findByIdAndUpdate( userId, { isBlocked: false }, { new: true } ); 
  if (!unblockUser)
     { 
        return res.status(404).json({ message: "User not found" });
    }
   res.json({ message: "User unblocked successfully", user: unblockUser }); 
} catch (error) {
     res.status(500).json({ message: "Server error", error: error.message });
     } 
    
});


export default adminApp;
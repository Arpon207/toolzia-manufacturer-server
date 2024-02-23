import user from "../models/User.model.js";

const verifyAdmin = async (req, res, next) => {
  const requester = req.verifiedEmail;
  const requesterInfo = await user.findOne({ email: requester });
  if (!requesterInfo.isAdmin) {
    return res.status(403).send({ message: "Forbidden access." });
  }
  next();
};

export default verifyAdmin;

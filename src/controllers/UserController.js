import UserRepository from '../models/repositories/UserRepository';

function createUser(req, res) {
  const user = req.body;
  if(!user.email || !user.password){
    res.json({
      error : "INVALID_PAYLOAD_EMAIL_OR_PASSWORD"
    })
  }
  else{
    UserRepository.create(user)
    .then((newUser) => {
      res.json(newUser);
    }).catch((errors) => {
      res.status(500).json({
        errors,
      });
    });
  }
 
}

export default { createUser };

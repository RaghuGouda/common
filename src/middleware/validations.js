const validate = schema => {
    try {
        return(req, res, next) => {
            const { error } = schema.validate(req.body);
            if (error) {
              return res.status(400).json({ error: error.details[0].message });
            }
            next();
          };
        
    } catch (error) {
        next(error)
    }

  };
  module.exports=validate
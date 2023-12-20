const db = require('./db')

const allimages = () => {
    return db.Image.find().then(result => {
        if (result) {
            return {
                statusCode: 200,
                images: result
            }
        }
        else {
            return {
                statusCode: 404,
                message: 'no data is available'
            }
        }
    })
}

const animages = async (id) => {
    try {
        const result = await db.Image.findOne({ id });
        if (result) {
            return {
                statusCode: 200,
                images: result,
            };
        } else {
            return {
                statusCode: 404,
                message: 'No data available',
            };
        }
    } catch (error) {
        console.error('Error fetching image:', error);
        return {
            statusCode: 500,
            message: 'Internal server error',
        };
    }
};
//edit 
const edit = (id, name, img) => {
    return db.Image.findOne({id}).then(result => {
        if (result) {
            result.id = id
            result.name = name
            result.img = img
            result.save()
            return {
                statusCode: 202,
                message: 'edited succefully'
            }
        }
        else {
            return {
                statusCode: 404,
                message: 'no data is available'
            }
        }
    })
}
// delete Img
const removeImg = (id) => {
    return db.Image.deleteOne({id}).then(result => {
        if (result) {
            return {
                statusCode: 202,
                message: 'Deleted succefully'
            }
        }
        else {
            return {
                statusCode: 404,
                message: 'no data is available'
            }
        }
    })
}
// registration
const reg = async (id, name, email, password) => {
    try {
      let user = await db.Reg.findOne({ name });
  
      if (user) {
        return {
          statusCode: 404,
          message: 'User with this name already exists',
        };
      }
  
      const newUser = new db.Reg({ id, name, email, password });
      await newUser.save();
  
      return {
        statusCode: 202,
        message: 'User registered successfully',
      };
    } catch (error) {
      console.error('Registration error:', error);
      return {
        statusCode: 500,
        message: 'Internal server error',
      };
    }
  };
    
// LOGIN
const login = async (name, password) => {
    try {
      const user = await db.Reg.findOne({ name, password });
      if (user) {
        return {
          statusCode: 202,
          message: 'User logged in successfully',
        };
      } else {
        return {
          statusCode: 404,
          message: 'User not found or invalid credentials',
        };
      }
    } catch (error) {
      console.error('Login error:', error);
      return {
        statusCode: 500,
        message: 'Internal server error',
      };
    }
  };
  

module.exports = {
    allimages, animages, edit,removeImg,reg,login
}
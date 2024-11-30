import User from '../models/user.js';
import CrudRepository from './crud-repository.js';

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async findByEmail(data) {
        try {
            console.log(data)
            const response = await User.findOne({email:data});
            if (!response) {
        console.log("No matching user found");
    }
            return response;
        } catch(error) {
            throw error;
        }
    }
}

export default UserRepository;
'use strict'
const User = use('App/Models/User')

class UserController {
async login({request, auth}){
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;

}

   async store({request}) {
        const { email, password } = request.all();
        console.log(email,password);
        const user = await User.create({
            username: email,
            password,
            email
        });
        return this.login(...arguments);

    };
}

module.exports = UserController

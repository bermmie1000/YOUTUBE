import routes from "../routes";

export const getJoin = (req, res) => {
    res.render('join', { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render('join', { pageTitle: "Join" });
    } else {
        // To Do : register user
        //  to do : log user 
        res.redirect(routes.home);
    }
};

export const login = (req, res) => res.render('login', { pageTitle: "Log In" });
export const logout = (req, res) => res.render('logout', { pageTitle: "Log Out" });

export const users = (req, res) => res.render('users', { pageTitle: "Users" });
export const userDetail = (req, res) => res.render('userProfile', { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render('editProfile', { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render('changePassword', { pageTitle: "Change Password" });
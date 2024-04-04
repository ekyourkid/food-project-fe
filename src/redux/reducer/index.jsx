import { combineReducers } from "redux";
import auth from "./auth";
import auth_regist from "./auth_regist";
import recipes from "./recipes";
import recipes_post from "./recipes_post";
import users from "./users";
import recipes_delete from "./recipes_delete";
import recipes_update from "./recipes_update";
import users_update from "./users_update";

import recipes_detail from "./recipes_detail";

const rootReducers = combineReducers({
    auth,
    auth_regist,
    recipes,
    recipes_post,
    recipes_delete,
    recipes_update,
    recipes_detail,
    users,
    users_update,
});

export default rootReducers;

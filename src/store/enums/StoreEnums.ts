enum Actions {
  // action types
  ADD_BODY_CLASSNAME = "addBodyClassName",
  REMOVE_BODY_CLASSNAME = "removeBodyClassName",
  ADD_BODY_ATTRIBUTE = "addBodyAttribute",
  REMOVE_BODY_ATTRIBUTE = "removeBodyAttribute",
  ADD_CLASSNAME = "addClassName",
  VERIFY_AUTH = "verifyAuth",
  LOGIN = "login",
  LOGOUT = "logout",
  REGISTER = "register",
  UPDATE_USER = "updateUser",
  FORGOT_PASSWORD = "forgotPassword",
  SET_BREADCRUMB_ACTION = "setBreadcrumbAction",
  GET_CLIENT_TOKEN = "getClientToken",
  FETCH_HOME_DATA = "fetchHomeData",
  SET_MODAL_DATA = "setModalData",
  SET_FILTER_FIELDS_DATA = "setFilterFieldsData",
  ADD_FILTER_FIELD_VALUE = "addFilterFieldValue",
  SUBMIT_FILTER = "submitFilter",
  CHANGE_ACTIVE_TAB_LANG = "changeActiveTabLang",
  CHANGE_IS_MULTI_LANG_TAB = "changeIsMultiLangTab",
}

enum Mutations {
  // mutation types
  SET_CLASSNAME_BY_POSITION = "appendBreadcrumb",
  PURGE_AUTH = "logOut",
  SET_AUTH = "setAuth",
  SET_USER = "setUser",
  SET_PASSWORD = "setPassword",
  SET_ERROR = "setError",
  SET_BREADCRUMB_MUTATION = "setBreadcrumbMutation",
  SET_LAYOUT_CONFIG = "setLayoutConfig",
  RESET_LAYOUT_CONFIG = "resetLayoutConfig",
  OVERRIDE_LAYOUT_CONFIG = "overrideLayoutConfig",
  OVERRIDE_PAGE_LAYOUT_CONFIG = "overridePageLayoutConfig",
  SET_CLIENT_TOKEN = "setClientToken",
  SET_HOME_DATA = "setHomeData",
  SET_MODAL_DATA = "prepareModalData",
  SET_FILTER_FIELDS_DATA = "setFilterFieldsData",
  SET_FILTER_FIELD_VALUE = "setFilterFieldValue",
  SUBMIT_FILTER_VALUE = "submitFilterValue",
  SET_ACTIVE_TAB_LANG = "setActiveTabLang",
  SET_IS_MULTI_LANG_TAB = "setIsMultiLangTab",
}

export { Actions, Mutations };

var EnumRoles;
(function (EnumRoles) {
    EnumRoles[EnumRoles["ADMIN"] = 1] = "ADMIN";
    EnumRoles[EnumRoles["GUEST"] = 2] = "GUEST";
    EnumRoles[EnumRoles["USER"] = 3] = "USER";
})(EnumRoles || (EnumRoles = {}));
var user = {
    role: EnumRoles.ADMIN,
    color: 0 /* EnumColors.black */,
};
console.log(EnumRoles.ADMIN);

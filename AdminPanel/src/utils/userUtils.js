/** getDisplayName - takes in a user object and returns a users fullname */
export const getDisplayName = (user) => {
    if(user?.name) return user.name;
    const firstName = user?.firstName || "";
    const lastName = user?.lastName || "";

    const fullName = `${firstName} ${lastName}`.trim();

    return fullName || "Unnamed User";
}
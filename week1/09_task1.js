// signment 1: User Profile Manager

let user = {
    id: 101,
    name: "Ravi",
    email: "ravi@gmail.com",   
    role: "student",
    isActive: true
};
console.log('User Name:', user.name);
console.log('User Email:', user.email);
user.lastLogin = "2026-01-01";
user.role = "admin";
delete user.isActive;
console.log('Remaining fields:', Object.keys(user));
// --- IGNORE ---
// End of recent edits
// ----------------------------------
// -------

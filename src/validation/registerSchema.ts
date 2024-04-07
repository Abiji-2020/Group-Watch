import vine from "@vinejs/vine"


 export const registerSchema = vine.object({
    username : vine.string().minLength(3).maxLength(20),
    name : vine.string().minLength(3).maxLength(20),
    email : vine.string().email(),
    password : vine.string().minLength(8).maxLength(32).confirmed(),
});


export const loginSchema = vine.object({
    email : vine.string().email(),
    password : vine.string().minLength(8).maxLength(32),
});